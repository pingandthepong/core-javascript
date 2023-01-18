import { getNode } from "../dom/getNode.js";

const first = getNode(".first");
const second = getNode(".second");

// 콜백 함수 생성
// function delay(callback, timeout = 1000) {
//   setTimeout(callback, timeout);
// }

// 콜백 함수 사용 (콜백 지옥)
// delay(() => {
//   first.style.top = "-100px";
//   delay(() => {
//     first.style.transform = "rotate(360deg)";
//     delay(() => {
//       first.style.top = "0px";
//     });
//   });
// });
// 많아지면 보기 힘듦. 그래서 프라미스가 필요. 가독성있게 만들 수 있음!
// 프라미스 사용 이용 = 콜백 가독성을 위해

// delayP()
//   .then(() => {
//     first.style.top = "-100px";
//     return delayP();
//   })
//   .then(() => {
//     first.style.transform = "rotate(360deg)";
//     second.style.left = "100px";
//     return delayP();
//   })
//   .then(() => {
//     first.style.top = "0px";
//     second.style.left = "0px";
//   });

// 매번 함수 호출시 매개변수 자리마다 맞추기 힘드니까, 객체를 생성해
const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: "성공",
  errorMessage: "알 수 없는 오류가 발생했습니다.",
};

// Promise 로 약속 -> Then 으로 받아서 사용
// 매개변수를 option객체로 받아오는 것~!
function delayP(options = {}) {
  const { shouldReject, data, errorMessage, timeout } = options;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      !shouldReject ? resolve(data) : reject(errorMessage);
    }, timeout);
  });
}
// 객체로 받아와서 쓰면 순서 상관없이 쓰면 됨!!
delayP({
  shouldReject: true,
  timeout: 1500,
  data: "안녕",
  errorMessage: "잘가",
}).then((res) => {
  console.log(res);
});

// 프라미스 체이닝 설멍 (지금은 던져주는 게 없어서 undefined 나올거임)
// then에서 return을 던져줘야 함!
// 귀찮나? 그래서 나중에 async await이 나옴..
// delayP()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
