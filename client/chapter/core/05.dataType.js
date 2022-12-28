/* ---------------------------------------------------------------------- */
/* Data Types                                                             */
/* ---------------------------------------------------------------------- */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
console.log(null);
console.log(typeof null);

// 2. 값이 할당되지 않은 상태
console.log(undefined);
console.log(typeof undefined);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
let message1 = "hello";
let message2 = "hello";
let message3 = `hello`;
console.log(message1);
console.log(message2);
console.log(message3);
console.log(typeof message3);

let nickName = "tiger";
let message4 = `안녕 내 이름은 ${nickName}야`;
console.log(message4);

let templateTest = "김주현";
let templateTestMessage = `내 이름은 ${templateTest}`;
console.log(templateTestMessage);

// 4. 정수, 부동 소수점 숫자(길이 제약)
let number = 100.123;

console.log(`number : `, typeof number);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)

console.log(12913n + 10n);
console.log(typeof 12913n);

// 6. 참(true, yes) 또는 거짓(false, no)
console.log(`true: `, typeof true);
console.log(`false: `, typeof false);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
console.log(typeof {});

// 8. 고유한 식별자(unique identifier)
console.log(typeof Symbol("uid"));
console.log(typeof Math);

const fuc = function () {};
console.log(typeof fuc);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류 : null이 object로 뜨는 문제

// Object
// 객체 리터럴 방식
const user = {
  name: "tiger",
  age: 27,
};

console.log(user.name);
console.log(user.age);

// Array
// 배열 리터럴 방식
let list = [10, 100, 1000, 1, 2, 3];

// function 함수 = 상자 안의 셈수
function sum(a, b) {
  return a + b;
}

console.log(sum(3, 7));

// 어떤 붕어빵 좋아하세요?
function carpBread(data) {
  return `${data} 맛 붕어빵입니다.`;
}
console.log(carpBread("팥"));
console.log(carpBread("크림"));
console.log(carpBread("민트"));

// this
