/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

// if..else와 prompt를 사용해 0보다 크면 1, 0보다 작으면 -1, 0을 받으면 0 출력

// let number = prompt("숫자를 입력해주세요", 0);

// if..else 사용
/* if (number > 0) {
  console.log("1");
} else if (number < 0) {
  console.log("-1");
} else {
  console.log("아무것도 아닙니다.");
} */

// 삼항연산자 사용
/* let message = number > 0 ? "1" : number < 0 ? "-1" : "아무것도 아닙니다!";
console.log(message); */

// alert(message);

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = "no";

// 영화 볼거니?
let goingToWatchMovie = "yes";

// if 문(statement)

/* let movie = prompt("영화를 보았습니까?", "yes or no?");

if (movie == "yes") {
  console.log(didWatchMovie);
} else if (movie == "no") {
  console.log(goingToWatchMovie);
} else {
  console.log("잘못된 값을 입력했습니다.");
}
 */

if (didWatchMovie === "yes") {
  console.log("그거 재밌더라");
} else if (goingToWatchMovie === "yes") {
  console.log("너무 설렌다~");
} else {
  console.log("음.. 난 별로..");
}

let movieMessage = didWatchMovie.includes("yes")
  ? "그거 재밌더라"
  : goingToWatchMovie === "yes"
  ? "너무 설렌다~"
  : "난 별로..";

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식
