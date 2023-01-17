import { getNode } from "../dom/getNode.js";

const first = getNode(".first");

// 콜백 함수 생성
function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

// 콜백 함수 사용 (콜백 지옥)
delay(() => {
  first.style.top = "-100px";
  delay(() => {
    first.style.transform = "rotate(360deg)";
    delay(() => {
      first.style.top = "0px";
    });
  });
});
