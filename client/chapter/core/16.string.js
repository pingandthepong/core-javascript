/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */

let message = "Less is more.";
// console.log(message);

/* for ( of message) {
  console.log(key);
} */

// length 프로퍼티
let stringTotalLength = message.length;
console.log("stringTotalLength : ", stringTotalLength);

// 특정 인덱스의 글자 추출
let extractCharacter = message[0];
console.log("extractCharacter : ", extractCharacter);

// 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;

/* message = "more" + message[5];
console.log(message); */

// 부분 문자열 추출
let slice = message.slice(8, -1); // 점까지 나오게 하려면 slice(8);
console.log("slice : ", slice);

let subString = message.substring(-1, 5);
console.log("subString : ", subString);

// substr은 없어짐
let subStr;

/* -------------------------------------------------------------------------- */
/* ---------------------------- 문자열 포함 여부 확인 ---------------------------- */
/* -------------------------------------------------------------------------- */

// indexOf, lastIndexOf 모두, 없는 단어면 -1 반환, 해당 문자가 여러개 들어있을 경우 가장 앞에 있는 인덱스를 반환

let indexOf = message.indexOf("i");
console.log("indexOf : ", indexOf);

// 순서는 안에서부터인데, 뒤에서부터 찾음 (잘 안쓰임)
let lastIndexOf = message.lastIndexOf("e");
console.log("lastIndexOf : ", lastIndexOf);

// 이 문자를 포함하고 있는지 물어봄 (조건문에서 많이 쓰임)
let includes = message.includes("Less");
console.log("includes : ", includes);

// 첫글자가 이 문자가 담겨있는지
let startsWith = message.startsWith("L");
console.log("startsWith : ", startsWith);

// 마지막 글자
let endsWith = message.endsWith(".");
console.log("endsWith : ", endsWith);

// 공백 잘라내기 (왼쪽)
let trimLeft = message.trimLeft();
console.log("trimLeft : ", trimLeft);

//
let trimRight;

// 공백 잘라내기 (띄어쓰기는 안없어짐! 띄어쓰기 없애려면 정규표현식 써야함)
let trim = message.trim();
console.log("trim : ", trim);

// 텍스트 반복
let repeat = message.repeat(3);
console.log("repeat : ", repeat);

// 대소문자 변환
let toLowerCase = message.toLowerCase();
console.log("toLowerCase : ", toLowerCase);

let toUpperCase = message.toUpperCase();
console.log("toUpperCase : ", toUpperCase);

// 텍스트 이름 변환 유틸리티 함수
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) =>
    $1
      .trim()
      .replace(/(-|_)+/, "")
      .toUpperCase()
  );
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}

// let toCamelCase;
// let toPascalCase;

toCamelCase("less-is-more");
toPascalCase("less-is-more");
