/* ---------------------------------------------------------------------- */
/* Do While Loop                                                          */
/* ---------------------------------------------------------------------- */

/* let i = 0;

do {
  console.log(i, "최초 실행");
  i++;
} while (i < 5); */

// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력

/* let count = prompt("몇 번 순환할까요?", "");

do {
  console.log(count);
  
  if (count <= 0 || !count) {
    console.log("최초실행");
    break;
  }
  
  count--;
} while (count); */

// - 사용자로부터 요청된 횟수가 0보다 작을 경우,
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정

let first = document.querySelector(".first");

/* console.log(first.nextSibling); */ // 이러면 공백 공간을 잡아버림

console.log(first.nextSibling.nextSibling); // 이렇게 해야 잡힘
// 문제는... 주속이라도 많아지면?

do {
  first = first.nextSibling;
} while (first.nodeType !== document.ELEMENT_NODE);

console.log(first);
