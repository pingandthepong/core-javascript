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

delayP()
  .then(() => {
    first.style.top = "-100px";
    return delayP();
  })
  .then(() => {
    first.style.transform = "rotate(360deg)";
    second.style.left = "100px";
    return delayP();
  })
  .then(() => {
    first.style.top = "0px";
    second.style.left = "0px";
  });

// Promise 로 약속 -> Then 으로 받아서 사용
function delayP(timeout = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("성공!");
      // reject("실패!");
    }, timeout);
  });
}
// console.log(delayP());

delayP().then((res) => {
  console.log(res);
});
