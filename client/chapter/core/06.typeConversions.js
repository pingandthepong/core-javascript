/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number → '2022'
const YEAR = 2022;
console.log(typeof YEAR);
console.log(typeof String(YEAR));

// undefined → 'undefined'
console.log(String(undefined));

// null → 'null'
let days = null;
console.log(String(null));

// boolean → 'true'
let isKind = true;
console.log(String(isKind));
console.log(isKind + "");

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined → NaN
console.log(Number(undefined));

// null → 0
let money = null;
console.log(Number(money));

// boolean → true : 1 / false : 0
let cutie = true;
console.log(Number(cutie));
console.log(cutie * 1);
console.log(cutie / 1);
console.log(+cutie);

// string 숫자형 문자. 숫자처럼 생겼지만 문자 →
let num = "123";
console.log(num * 1);

// numeric string
let width = "320px";
console.log(parseInt(width, 10)); // Int는 정수만
console.log(parseFloat(width, 10)); // Float은 부동소수점까지

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

console.log(Boolean(null));
console.log(Boolean(""));
console.log(Boolean(" "));
console.log(Boolean(0));
console.log(Boolean("0"));

console.log(!!null);
console.log(!!" ");
