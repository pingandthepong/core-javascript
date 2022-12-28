/* --------------------------------------------------------------------- */
/* Variables                                                             */
/* --------------------------------------------------------------------- */

// let name = "John";
// let admin = alert(name);

let admin;
let name;

name = "John";
admin = name;
console.log(admin);

let ourPlanetName = "Earth";
let currentUserName = "John";

/* 다음 내용을 분석한 후, 프로그래밍 할 수 있도록 변수와 상수를 작성해봅니다. ----------- */

// - 갯수 별 상품 가격 계산하기
let calcProductQuantity;

// - 구매 제품 가격의 총 합
let totalProductPrice;

// - 1년 기준 일(day)자 수
const DAY_PER_YEAR = 365;

// - 구매 결제 여부
let isPayment = false;
let hasClassName = true;

// - 구매 결제 내역
let paymentHistory;

// - 브랜드 접두사
const BRAND_PREFIX = "EUID";

// - 오늘의 운세
let fortuneOfToday;

// - 상품 정보
const productInformation = "";

/* variables ----------------------------------------------------------- */

/* constant variables -------------------------------------------------- */

/*
 Lexical
 Environment
*/

var nickName = "tiger";
let nickName2 = "tiger"; // Temporal Dead Zone (TDZ)
