/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */

let age = 30;

if (age >= 14 && age <= 90) {
  console.log("14세 이상, 90세 미만입니다.");
} else {
  console.log("나이에 속하지 않습니다.");
}

let a = 10;
let b = ""; // 빈 문자열 = falsy값
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

// 논리합(또는) 연산자
let AorB = a || b;

// 부정 연산자
let reverseValue = !value;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&) ( " " 공백 문자는 true / []배열도 값이라 true / {}객체도 값이 있기에 true. &&는 모두 true일 경우, 마지막 값이 반환됨)
let whichFalsy = true && " " && [] && { thisIsFalsy: false };
console.log(whichFalsy);

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || "" || [2, 3].length || { thisIsTruthy: true };
console.log(whichTruthy);

// 로그인 구현하기
let userName = prompt("사용자 이름을 입력해주세요.", "");

if (userName?.toLowerCase() === "admin") {
  let pw = prompt("비밀번호를 입력해주세요.", "");

  if (pw?.toLowerCase() === "themaster") {
    console.log("환영합니다.");
  } else {
    console.log("취소되었습니다.");
  }
} else if (userName === "" || userName === null) {
  console.log("취소했습니다.");
} else {
  console.log("인증되지 않은 사용자입니다.");
}

console.log(userName);

// * 성욱님 코드 - 로그인 구현하기
/* let username = prompt("이름내놔");

if (username.toLowerCase() === "admin") {
  let password = prompt("비번ㄱ");
  if (password.toLowerCase() === "themaster") {
    console.log("코드 좀 치네 ㅋㅋ");
  } else {
    console.log("맞겠냐? ㅋㅋ");
  }
} else if (username === "" 오어 username === null) {
  console.log("ㅋㅋ");
} else {
  console.log("ㅉㅉ");
} */
