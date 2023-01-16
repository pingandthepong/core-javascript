// 아래에서 getNode 등 입력하니 자동완성 됨 (경로 수정해주고, 뒤에 확장자 명 붙여주기)
import {
  copy,
  clearContents,
  getInputValue,
  getNode,
  getRandom,
  insertLast,
  typeError,
  isNumericString,
  showAlert,
  addClass,
  removeClass,
} from "./lib/index.js";
import { jujeobData } from "./data/data.js";

/* -------------------------------------------------------------------------- */
// isNaN() (window제공 메서드)
// let data = "123";
// data = Number(data);
// console.log(data);
//console.log(isNaN("123"));

//console.log(isNumericString(123)); // true
//console.log(isNumericString("asd123")); // false

/* -------------------------------------------------------------------------- */

// #submit을 getNode로 잡기 (쿼리셀렉터는 덜 쓸수록 좋아서 미리 정의해서 사용하는 것)
const submit = getNode("#submit");
// console.log(submit);

// 원래 모듈 프로그래밍이라 안나와야 함 ㅋㅋ 근데 너무 잘 나옴 ?? id라 나옴?? 무슨 말인지 이해 못함
// id는 모듈과 상관 없이 나온다. 궁금한건 야무쌤 강의 참고하기
// id는 쿼리셀렉터로 잡지 않아도 잡힌다.

const resultArea = getNode(".result");

/* -------------------------------------------------------------------------- */

function clickSubmitHandler(e) {
  // 새로고침 차단
  e.preventDefault();

  // input값 가져오기 (함수 만들었었음 getInputValue)
  let name = getInputValue("#nameField");
  let list = jujeobData(name);
  let pick = list[getRandom(list.length - 1)];

  // 아무런 값도 입력하지 않았는데 렌더링 되는 부분 막기
  if (!name) {
    console.log("이름을 입력해 주세요.");
    //syntaxError를 쓰면 전체 에러가 나서 다음 진행이 전혀 안되므로 여기서는 사용X
    showAlert(".alert-error", "잘못된 정보입니다.!", 2000);

    // GSAP
    gsap.fromTo(
      resultArea,
      0.01,
      { x: -5 },
      { x: 5, clearProps: "x", repeat: 20 }
    );

    // addClass(resultArea, "shake");
    // setTimeout(() => {
    //   removeClass(resultArea, "shake");
    // }, 1000);

    return;
  }
  if (isNumericString(name)) {
    console.log("제대로 된 이름을 입력해주세요.");
    gsap.fromTo(
      resultArea,
      0.01,
      { x: -5 },
      { x: 5, clearProps: "x", repeat: 20 }
    );
    showAlert(".alert-error", "정확한 이름을 입력해주세요!", 2000);
    return;
  }

  // 기존 글자 삭제하는 함수
  clearContents(resultArea);
  // result에 pick 뿌리기
  insertLast(resultArea, pick);
}

// result에 나오는 주접 복사하기
function clickCopyHandler() {
  let text = resultArea.textContent;
  copy(text).then(() => {
    showAlert(".alert-success", " 클립보드가 복사가 완료됐습니다.", 2000);
  });
  // 약속구문

  // 약속
  // 다음 해야 할 일 (clipboard에 복사가 완료되었다는 문구 띄우기. copy완료를 어떻게 확인할 수 있을까? '비동기통신'의 Promise가 해줌)
}

// eventHandler 연결
submit.addEventListener("click", clickSubmitHandler);
resultArea.addEventListener("click", clickCopyHandler);
