import { getNode } from "../dom/getNode.js";
import { isNumber, isObject } from "./typeOf.js";

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
export function delayP(options = {}) {
  let config = { ...defaultOptions }; // Object.assign({})과 같음

  if (isNumber(options)) {
    config.timeout = options;
  }

  if (isObject(options)) {
    config = { ...config, ...options }; // 객체 합성 mixin
  }

  const { shouldReject, data, errorMessage, timeout } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      !shouldReject ? resolve(data) : reject(errorMessage);
    }, timeout);
  });
}

// delayP(3000).then((res) => {
//   console.log(res);
// });
// delayP 호출시 Promise가 반환된다는 게 중요한 포인트임

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

/* -------------------------------------------------------------------------- */

// function delayA() {
//   return new Promise((resolve, reject) => {
//     resolve("완료");
//   });
// }

// async : 일반 함수를 promise를 반환하는 함수로 만듦.
// await : 1. promise가 반환하는 result를 가져오기.
//         2. 코드 실행 흐름 제어.

async function delayA() {
  return "완료";
}

let result = delayA();
console.log(result);

async function 라면끓이기() {
  try {
    await delayP();
    first.style.top = "-100px";

    await delayP();
    first.style.transform = "rotate(360deg)";

    // throw new Error("계란 껍질이 들어가버렸다!");
    // 아래 빨간 줄은, 에런데 뭘 써놨냐~ 이런 뜻
    await delayP();
    console.log("그릇에 담기");
  } catch (err) {
    console.log(err);
  }
}

// 라면끓이기();
