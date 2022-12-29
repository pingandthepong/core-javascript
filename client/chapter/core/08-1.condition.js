/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

// if..else와 prompt를 사용해 0보다 크면 1, 0보다 작으면 -1, 0을 받으면 0 출력

let number = prompt("숫자를 입력해주세요", 0);

// if..else 사용
/* if (number > 0) {
  console.log("1");
} else if (number < 0) {
  console.log("-1");
} else {
  console.log("아무것도 아닙니다.");
} */

// 삼항연산자 사용
let message = number > 0 ? "1" : number < 0 ? "-1" : "아무것도 아닙니다!";
console.log(message);

// alert(message);

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie;

// 영화 볼거니?
let goingToWatchMovie;

// if 문(statement)

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식
