// Object
// Primitives vs. Object

/* -------------------------------------------------------------------------- */
/*                    key:value 쌍으로 구성된 엔티티(entity) 데이터 구조              */
/* -------------------------------------------------------------------------- */
let cssCode = /* css */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

/* -------------------------------------------------------------------------- */
/*                    위 CSS 스타일 코드를 JavaScript 객체로 작성                    */
/* -------------------------------------------------------------------------- */
let cssMap = {
  position: "fixed",
  zIndex: 10000,
  top: "50%",
  left: "50%",
  width: "60vw",
  maxWidth: 800,
  height: "40vh",
  minHeight: 280,
  transform: "translate(-50%, -50%)",
};

/* -------------------------------------------------------------------------- */
/*                             인증 사용자 정보를 객체로 구성.                       */
/* -------------------------------------------------------------------------- */
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

// authentication = 인증
// authorization = 권한

let authUser = null;

authUser = {
  uid: "user-id-asdA12k3klf",
  name: "kindtiger",
  email: "seonbum2@gmail.com",
  isSignIn: true,
  permission: "paid",
};

/* -------------------------------------------------------------------------- */
/*                                  점(.) 표기법                                */
/* -------------------------------------------------------------------------- */
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.
// console.log(authUser.uid);
// console.log(authUser.name);
// console.log(authUser.email);
// console.log(authUser.isSignIn);
// console.log(authUser.permission);

/* -------------------------------------------------------------------------- */
/*                                 대괄호([]) 표기법                                */
/* -------------------------------------------------------------------------- */
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.
// console.log(authUser["uid"]);
// console.log(authUser["name"]);
// console.log(authUser["email"]);
// console.log(authUser["isSignIn"]);
// console.log(authUser["permission"]);

/* -------------------------------------------------------------------------- */
/*                        계산된 프로퍼티 (calcurate property)                       */
/* -------------------------------------------------------------------------- */
let calculateProperty = "phone"; // phone | tel

function createUser(computedProp = calculateProperty) {
  return {
    name: "unknown",
    email: "unknown@company.io",
    [computedProp]: "010-7169-0262",
  };
}

const user = createUser("tel");

/* -------------------------------------------------------------------------- */
/*                                프로퍼티 포함 여부 확인                               */
/* -------------------------------------------------------------------------- */

Object.prototype.SIGN = true;

for (let key in authUser) {
  if ({}.hasOwnProperty.call(authUser, key)) {
    console.log(key);
  }
}

/* -------------------------------------------------------------------------- */
/*                                   프로퍼티 나열                                  */
/* -------------------------------------------------------------------------- */
// authUser : 객체   key만 모아놓은 배열, value만 모아놓은 배열 만들기

let keyArray = Object.keys(authUser);
console.log(keyArray);

let valueArray = Object.values(authUser);
console.log(valueArray);

/* -------------------------------------------------------------------------- */
/*                  Object의 key들이 result에 들어갈 수 있게. 유틸함수 만들기                  */
/* -------------------------------------------------------------------------- */

const getPropertiesList = (object) => Object.keys(object);

/* function getPropertiesList(object) {
  let result = [];
  for (let key in object) {
    result.push(key);
  }
} */

let result = getPropertiesList(authUser);

/* -------------------------------------------------------------------------- */
/*                                프로퍼티 제거 or 삭제                               */
/* -------------------------------------------------------------------------- */

// 제거 remove = 값을 비움 , 삭제 delete = 아예 없애는 것

// 제거
// authUser['uid'] = null;

// 삭제
// delete authUser['uid'];

/* -------------------------------- 유틸함수 만들기 -------------------------------- */

/*
1. 함수 이름 정하기
2. 인수(arguments) & 인자(parameter) 정하기
3. 확인하기 (validation)
4. 리턴값 (return)
*/

/* 
function removeProperty(object, key) {
  if(!(typeof object === 'object')) {
    // throw
  }  
  object[key] = null;
}

removeProperty(authUser, "uid");
 */

/*
function deleteProperty(object, key) {
  delete object[key];
}

deleteProperty(authUser, 'uid');
*/

/* -------------------------------------------------------------------------- */
/*                                   단축 프로퍼티                                  */
/* -------------------------------------------------------------------------- */
let name = "선범";
let email = "seonbeom2@euid.dev";
let authorization = "Lv. 99";
let isLogin = true;

/* ------------------------- 위의 값을 복사해와서 새로운 객체로 만들기 ------------------------ */
/*
const student = {
  name: name,
  email: email,
  authorization: authorization,
  isLogin: isLogin,
};
*/
/* ---------------------------- 숏핸드 프로퍼티로 더 줄여보자 ---------------------------- */

const student = { name, email, authorization, isLogin };

/* -------------------------------------------------------------------------- */
/*                                 프로퍼티 이름 제한                                 */
/* -------------------------------------------------------------------------- */
/* ----------------- 예약어: class, if, switch, for, while, ... 지양! -------------- */

/* -------------------------------------------------------------------------- */
/*             객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성             */
/* -------------------------------------------------------------------------- */

// 객체의 key를 배열로 바꾸고, 객체의 갯수가 0이면 ? true : false

function isEmptyObject(object) {
  // return Object.keys(object).length === 0 ? true : false;
  return getPropertiesList(object).length === 0;
}

const empty = {};
console.log(isEmptyObject(empty));

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 430,
};

// 월급의 총합 구하기

//console.log(Object.entries(salaries));

/*
let total = 0;
for (let keyValue of Object.entries(salaries)) {
  
  
  // 옛날 방식임
  let key = keyValue[0];
  let value = keyValue[1];
  
  total += value;
}
*/

// 요즘 방식. 구조 분해 할당 destructuring assignment
let total = 0;
for (let [key, value] of Object.entries(salaries)) {
  total += value;
}

console.log(total);

/* -------------------------------------------------------------------------- */
/*                            배열 구조 분해 할당 예제                              */
/* -------------------------------------------------------------------------- */

let color = ["#ff0000", "#2b00ff", "#00ff2f"];
/*
const COLOR_RED = color[0];
const COLOR_BLUE = color[1];
const COLOR_GREEN = color[2];
*/

/* 
매번 n번째를 찾아서 할당하는건 힘들다.
이 때 필요한 게 const [red, blue, green] = color
위와 아래는 같지만, 수고를 덜 수 있다.
*/
const [red, green, blue] = color;

console.log(red);

/*
만약 하나만 갖고 오고 싶다면,
const [, , blue] = color;
console.log(blue);
*/

/* -------------------------------------------------------------------------- */
/*                               객체 구조 분해 할당 예제                           */
/* -------------------------------------------------------------------------- */

/*
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 430,
};
*/

const { John: a, Ann: b, Pete: c } = salaries;

console.log(b);

/* ---------------------------- 위의 예제를 숏핸드 프로퍼티로 ---------------------------- */

// key 값만 맞으면 됨 !
// const { John, Ann, Pete } = salaries;
