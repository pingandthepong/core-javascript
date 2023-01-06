/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* ------------------------------ Array.isArray ----------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
const arr = [10, 100, 1000, 10000];
// console.log(typeof arr); 는 정확하지 않음(object로 나옴)

/*
*** 원하는 값 정확히 뽑아내 유틸함수 만들기
- Object.prototype.toString.call([]).slice(8, -1).toLowerCase();
- 누구나 다 쓸 수 있게 .call()로 빌려씀
- Array.isArray()로 사용해도 됨! 같이 만들어본거임


*** 왜 유틸함수를 만들어서 사용하는가?
- typeof 는 오류가 컸다.
- Object의 능력을 빌려서 진짜 타입을 체크해주는 기능을 만든 것
- 지금은 유틸함수로 만들어 사용하지만, 프로젝트 시에는 아예 파일을 만들어 사용
- 타입스크립트는 받는 값이 무엇인지 정확히 알기 때문에 이런 유틸함수를 만들 필요도 없다. ㅋㅋ


*** hasOwnProperty 는 '너 그거 있어?' 인거고,
Object.prototype.toString() 은 Object의 능력으로 인해 안에 넣으면 다 문자로 반환해줌


*** 타입스크립트
- 자바스크립트의 문제점을 기반으로 나옴
- 자바스크립트를 잘 알아야 타입스크립트도 잘 사용할 수 있음
- 그래서 우리는 코어 학습을 하고 있는 것

*/

function isArray(data) {
  return (
    Object.prototype.toString.call([]).slice(8, -1).toLowerCase() === "array"
  );
}
function isNull(data) {
  return (
    Object.prototype.toString.call([]).slice(8, -1).toLowerCase() === "null"
  );
}
console.log(Array.isArray(arr));

/* 요소 순환 -------------------------------------------------------------- */

// forEach 를 이용한 요소 순환 처리

/*

*** forEach
- 어떤 것도 반환하지 않는다. 아이템 순환만 해줌
- forEach가 할 수 있는 일은 for문도 할 수 있다. forEach가 훨씬 더 편할 뿐임
- 인덱스를 받으면 몇 번쨰를 받는지 바로 나와서 좋다.(?)

*** NodeList
- 유사배열
- 유사배열임에도 forEach가 내장되어있어서 바로 돌릴 수 있음
- 진짜 배열로 만드는 방법 span.forEach(item) => {item.addEventListener('click'),function(){console.log(this)}}
*/

const user = {};

arr.forEach(function (item, index) {
  this[index] = item;
}, user);

//
const span = document.querySelectorAll("span");

span.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log((e.target.style.background = "orange"));
  });
});

/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift

// reverse
/*
arr.reverse();
console.log(arr);
*/

// splice
arr.splice(1, 0, 23, 5);
/*
console.log(arr);
*/

// sort

/*
반환값 < 0 : a가 b보다 앞에 있어야 한다.
반환값 = 0; a와 b의 순서를 바꾸지 않는다.
반환값 > 0; b가 a보다 앞에 있어야 한다.

sor 안에 repair function (= compair function)을 넣어서 보다 정밀하게 비교할 수 있다.
*/
arr.sort((a, b) => a - b);

console.log(arr);

/* 새로운 배열 반환 --------------------------------------------------------- */

// concat :
// slice : 어디부터 어디까지 도려내는 것

// map : 새로운 배열 (forEach는 돌리기만, map은 돌려서 배열을 만드는 것))

/*
// map을 사용해 arr에 2씩 곱한 값을 새로운 배열에 담아 반환하기
let newArray = arr.map((item) => item * 2);
console.log(newArray);
*/

let todo = ["밥먹기", "미용실가기", "코딩공부"];

let template = todo.map((todoList) => `<li>${todoList}</li>`);

template.forEach((item) => document.body.insertAdjacentHTML("beforeend", item));

// console.log(template);

/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf : 포함 여부 확인
console.log(arr.indexOf(5));

// lastIndexOf

// includes : 뒤에서부터 찾음
console.log(arr.includes(10));

/* 요소 찾기 -------------------------------------------------------------- */

const users = [
  { id: 1, name: "로운" },
  { id: 2, name: "승택" },
  { id: 3, name: "연주" },
];
// find 는 한 번 비교해서 결과가 true 면 하나만 나오고 그 다음 찾지 않음. 대상 하나만 찾음
const find = users.find((item, index) => item.id < 5);

console.log(find);

// findIndex
const findIndex = users.findIndex((item, index) => item.id === 3);
console.log(findIndex);

/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* 요소 걸러내기 ----------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

// filter : find와는 다르게 찾아서 계속 배열로 넣어줌
let result = arr.filter((number) => number < 100);
console.log(result);

/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

const friends = [
  {
    name: "윤보라",
    age: 28,
    job: "작꼬저",
  },
  {
    name: "이로운",
    age: 23,
    job: "배고픈 개발자",
  },
  {
    name: "오승택",
    age: 21,
    job: "물음표살인마",
  },
];

// reduce 를 이용해 친구들 나이의 총합 구하기
// (초기값을 설정하지 않으면 객체. 초기값을 숫자로 바꾸기 = ,0 추가)
let age = friends.reduce((acc, cur) => acc + cur.age, 0);
console.log(age);

let template2 = todo.reduce(
  (acc, cur, index) => acc + `<li>할 일 ${index + 1} : ${cur}</li>`,
  ""
);
console.log(template2);

// reduceRight

/* string ←→ array 변환 ------------------------------------------------- */

let str = "성찬 보경 일범 세민 형진 주현";

// split : 문자를 배열로 만들어서 내보냄 (문자 => 배열)
let nameArray = str.split(" ");
console.log(nameArray);

// join : 배열을 문자로 (배열 => 문자)
console.log(nameArray.join(" / "));
