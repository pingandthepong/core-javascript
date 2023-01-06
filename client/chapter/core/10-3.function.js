/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */

let arr = [1, 2, 3, 4];
function sum(...args) {
  console.log(args);
}

const calculateTotal = (priceA, priceB, ...args) => {
  let total = 0;
  args.forEach(function (item, index) {
    total += item;
  });
  console.log();
  return;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
// let resultY = calculateTotal(21500, 3200, 9800, 4700);
// let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식

/* let calcAllMoney = (a, b, c, d) => {
  return a + b + c + d;
}; */
let calcAllMoney = (a, b, c, d) => a + b + c + d;

// 화살표 함수와 this
function normalFunction() {
  console.log("일반함수 : ", this);
}
const arrowFunction = () => {
  console.log("화살표함수 : ", this);
};

normalFunction();
arrowFunction();

const user = {
  name: "tiger",
  age: 32,
  address: "서울시 중랑구 면목동",
  grades: [80, 90, 100],
  totalGrades: () => {
    console.log(this);
  },
};

user.totalGrades();

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = (numeric, powerCount) => {
  let result = 1;
  for (let i = 0; i < powerCount; i++) {
    result *= numeric;
  }

  return result;
};

console.log(pow(2, 53));

let powerExpression = (numeric, powerCount) =>
  Array(powerCount)
    .fill(null)
    .reduce((acc) => acc * numeric, 1);

// repeat(text: string, repeatCount: number): string;
let repeat = (text, repeatCount) => {
  // validation
  /*   if (!repeatCount) {
    throw new Error("숫자 좀 넣어라");
  } */
  let result = "";

  for (let i = 0; i < repeatCount; i++) {
    result += text;
  }
  return result;
};

// repeat('안녕',3)

let repeatExpression = (text, repeatCount) =>
  Array(repeatCount)
    .fill(null)
    .reduce((acc) => acc + text, "");

// 실제로 이렇게 실무에서 쓰는 경우 없음. 이렇게 만들어도 된다는걸 보여주려고 한 것
