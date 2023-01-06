/* ---------------------------------------------------------------------- */
/* While Loop                                                             */
/* ---------------------------------------------------------------------- */

/* let i = 0;

while (i < 10) {
  console.log(++i);
} */

const frontEndDev = [
  "HTML",
  "CSS",
  "SVG",
  "JavaScript",
  "jQuery",
  "React",
  "Redux",
  // "css",
];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

/* console.log(frontEndDev[0]);
console.log(frontEndDev[1]);
console.log(frontEndDev[2]);
console.log(frontEndDev[3]);
console.log(frontEndDev[4]);
console.log(frontEndDev[5]); */

/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)

/* let i = 0;

// .length 사용시 항목을 늘리든 말든 다 포함되어 출력됨
while (i < frontEndDev.length) {
  console.log(frontEndDev[i]);
  i++;
} */

// while 문 (역순환 : 역방향)

/* let i = frontEndDev.length - 1;

while (i >= 0) {
  console.log(i, frontEndDev[i]);
  i--;
} */

// 변수 쓰지 않고 역순환 (.pop() 사용)
// .pop()은 배열의 뒤에서부터 추출
// pop()은 좀 곤란함. 배열 자체를 부신 것이기 때문.

// 전개 연산자 전개 구문 spread operator
let copyArray = [...frontEndDev];

while (frontEndDev.length) {
  console.log(frontEndDev.pop());
}

// shift() 는 배열의 앞에서부터 추출
/* while (frontEndDev.length) {
  console.log(frontEndDev.shift());
} */

// 성능 진단 : 순환 vs. 역순환
