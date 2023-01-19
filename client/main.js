/* global gsap */

import {
  insertLast,
  tiger,
  delayP,
  createUserCard,
  renderUserCard,
  getNode as $,
  changeColor,
  renderSpinner,
  renderEmptyCard,
  attr,
} from "./lib/index.js";

// rendingUserList 함수 만들기
// ajax get user list (tiger.js 통해서 가능함)

// 유저 카드 생성
// 생성된 카드로 랜더링

// 1. userList.js에
// 2. renderUserCard 함수 만들고,
// 3. 만들어진 함수 안에 createUserCard를 던지고,
// 4.renderUserCard 함수를 사용했을 떄 렌더링 될 수 있도록

const userCardContainer = $(".user-card-inner");

async function rendingUserList() {
  renderSpinner(userCardContainer);
  try {
    await delayP(2000);
    $(".loadingSpinner").remove();
    let response = await tiger.get("http://localhost:3000/users");

    let userData = response.data;
    userData.forEach((data) => {
      renderUserCard(userCardContainer, data);
    });

    changeColor(".user-card");

    gsap.to(gsap.utils.toArray(".user-card"), {
      x: 0,
      opacity: 1,
      duration: 1.5,
      stagger: 0.2,
    });
  } catch (err) {
    renderEmptyCard(userCardContainer);
  }
}

rendingUserList();

// 와 렌더링 어케 하노

// 삭제 버튼을 클릭하면 콘솔창에 '삭제' 글자가 출력 될 수 있도록 만들기 (이벤트 위임)
function handler(e) {
  let deleteButton = e.target.closest("button"); // 누른 대상의 인접한 버튼 찾기
  let article = e.target.closest("article"); // 누른 대상의 인접한 article 찾기 (부모,, 위임...)

  if (!deleteButton || !article) return;

  let id = attr(article, "data-index").slice(5);

  // 제거 (사용자 환경에는 반영 안되는 상태라, 반영되도록.)
  tiger.delete(`http://localhost:3000/users/${id}`).then(() => {
    userCardContainer.innerHTML = "";
    rendingUserList();
  });
}

userCardContainer.addEventListener("click", handler);

// article을 찾아, data-index의 id값 조회해오기 (delete통신 시 던지려고)
