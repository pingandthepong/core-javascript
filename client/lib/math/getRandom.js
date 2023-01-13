// 오 밑에 typeError 치니까 자동생성 됨. .js 추가해주기!!! (리액트에서는 안쓰는거고, 리액트 유저가 훨씬 많아서 자동완성 기능 안넣은 것임)
import { typeError } from "../error/typeError.js";

export function getRandom(n) {
  //validation
  if (!n) typeError("getRandom 함수는 1개 이상의 매개변수를 받아야 합니다.");
  if (typeof n !== "number") {
    typeError("getRandom 함수의 매개변수는 숫자 타입 이어야 합니다.");
  }

  return Math.random(Math.random() * n);
}
