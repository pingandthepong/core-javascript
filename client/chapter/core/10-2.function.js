/* ---------------------------------------------------------------------- */
/* Functions → Expression                                                 */
/* ---------------------------------------------------------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calcTotal(10000, 8900, 1360, 2100);
let resultY = calcTotal(21500, 3200, 9800, 4700);
let resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
/* let calculateTotal = function () {
  console.log(arguments); // 유사배열

  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  return total;
};

console.log(calculateTotal(100, 500, 300, 130, 240)); */
// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {};

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {}; // 어차피 안에 있는 함수를 호출해서 사용할 수 없기에 의미 없음. 그래서 대개 이름을 없애서 만듦

// 콜백 함수 (표현)식
let callbackFunctionExpression = function (url, resolve, reject) {
  // if (typeof url === "string" && url.includes("http") && url.includes("www")) {
  if (typeof url === "string" && url.match(/http.+www/)) {
    resolve(url);
  } else {
    reject();
  }
};

callbackFunctionExpression(
  "https://www.naver.com",
  function (url) {
    console.log(`${url}해당 페이지로 이동합니다.`);
  },
  function () {
    console.log("url 입력 정보가 올바르지 않습니다.");
  }
);

// forEach 는 내부에 이런 식으로 구현되어 있을려나요 ?
/* forEach(function(currentValue, index, array){}, thisArg)
arr.forEach(function(item, index){}) */

// 함수 선언문 vs. 함수 (표현)식
function aa() {} // 선언문
const bb = function () {}; // 표현식
// 구문의 차이, 호이스팅의 차이

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression (즉시 호출될 수 있는 함수의 표현식)
let IIFE;

(function () {
  console.log("hi~");
})();

/*
오늘날엔 이피 패턴을 많이 사용하지는 않음
var를 사용하던 시절, 전역을 보호하기 위해 사용했었음
var가 전역을 오염시키지 않으려면 함수 스코프를 이용하는 방법 한 가지만 딱 있었음
function cc(){
  var x = 1;
}
console.log(x); 함수 안에 var를 가두면 밖에서 접근 불가능 (그냥 블록 스코프는 소용 없었음)
전역을 보호하기 위해 함수를 만들고 바로 실행시킨 것 (?)

*/
