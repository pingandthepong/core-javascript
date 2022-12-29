/* ---------------------------------------------------------------------- */
/* Operators                                                              */
/* ---------------------------------------------------------------------- */

// + 방법
/* let firstValue = prompt("덧셈할 첫 번째 숫자 입력", 1);
let secondValue = prompt("덧셈할 두 번째 숫자", 2);
console.log(+firstValue + +secondValue); */

// Number() 방법
/* let firstValue = Number(prompt("덧셈할 첫 번째 숫자 입력", 1));
let secondValue = +prompt("덧셈할 두 번째 숫자", 2);
console.log(firstValue + secondValue); */

// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상

let a = "10";
let b = "30";

// 단항 연산자
let unary = +a;
console.log(unary);

// 이항 연산자
let binary = a + b;
console.log(binary);

// 삼항 연산자
let ternary = Math.random() > 0.5 ? "big" : "small";
// 돌아가는 환경에서 random하게 돌아가는 것
console.log(ternary);

if (Math.random() > 0.5) {
  ternary = "big";
} else {
  ternary = "small";
}

// 산술 연산자: 덧셈
let addition = +a + +b;
console.log(addition);

// 산술 연산자: 뺄셈
let subtraction = a - b;
console.log(subtraction);

// 산술 연산자: 곱셈
let multiplication = a * b;
console.log(multiplication);

// 산술 연산자: 나눗셈
let division = a / b;
console.log(division);

// 산술 연산자: 나머지
let remainder = a % b;
console.log(remainder);

// 산술 연산자: 거듭 제곱
let power = a ** 2;
console.log(power);

// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = "9" * "3";
console.log(coercionTypeConversion);

// 대부분의 연산자는 기본 값으로만 작동합니다.
let onlyWorkDefaultValues = [1, 2, 3] + [4, 5, 6];
console.log(onlyWorkDefaultValues);

let newArray = [1, 2, 3].concat([4, 5, 6]);
console.log(newArray);

// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)

// 선,후 증감 연산자
// ++, --
let number = 100;

number++; // 100
++number; // 102
console.log(number);

// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count = 10;
let total = (count % 4) * (count /= 2) + count ** 3; // 2 * 5 + 125
console.log(total);
