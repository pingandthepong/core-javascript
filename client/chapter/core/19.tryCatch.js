/*

에러를 잡아줌. 런타임 중에만 작동
!!! 비동기통신시 사용 !!!

try { 코드 } catch (err) { 에러 핸들링 }

1. try {코드} 실행
2. 에러가 없다면, 코드 다 실행되고 catch 건너뜀
3. 에러가 있다면, 발견 즉시 바로 catch문으로 넘어감
4. catch의 (err)는 무슨 일이 일어났는지(try문에서 발생한 에러)에 대한 설명이 담긴 에러 객체를 포함함
5. try문 안에서 발생한 에러는 catch에서 잡아줘서 스크립트 자체는 문제 없이 실행됨!!!!!
6. 

*/

/*
try {
  user.name;
  console.log("시도합니다.");
} catch (err) {
  console.log(err);
  console.log(err.name);
  console.log(err.message);
  console.log(err.stack);
}
*/

/* ---------------------------------------------------------------------- */
/* Try Catch                                                              */
/* ---------------------------------------------------------------------- */

// try ... catch 동작 알고리즘
// 1. try { ... } 코드 실행
// 2-1. 오류가 발생하지 않은 경우, 내부 코드가 실행 됨 (catch 블록 무시)
// 2-2. 오류가 발생했다면, try 코드 중단 catch 블록으로 흐름이 넘어 감

// JavaScript 엔진은 코드를 읽고 난 후 코드를 실행
// 그러므로 try ... catch 문은 유효한 코드에서만 오류를 처리할 수 있음
// 이러한 오류 유형을 "런타임 오류" 또는 "예외(exception)"라고 부름

// try ... catch는 동기적으로 동작하므로 비동기 처리 과정 내부에서 사용해야 함

// 오류 객체(Error Object)
// - name, message, stack 정보 제공

// 직접 오류 객체 생성
// throw 연산자는 오류 객체를 생성할 때 사용 됨
// 생성 가능한 오류 객체
// - Error
// - TypeError
// - SyntaxError
// - ReferenceError

// finally 절
// 오류가 있던, 없던 상관없이 항상 실행
// try ... catch를 빠져나가는 어떠한 경우에도 항상 실행

let data = JSON.stringify({
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
});

// console.log(data);

// 만약 에러가 try 밖에서 터졌다면 브라우저는 아예 멈춘다. try 안에 넣으면 이 안에서만 에러를 잡는다. 사용자 입장에서는 사이트가 죽지 않으니 다른 일을 할 수 있다.
try {
  let user = JSON.parse(data);
  console.log(user.value);

  if (!user.value) {
    throw new ReferenceError("해당 키값은 존재하지 않습니다.");
  }
} catch (err) {
  console.log("JSON Error : " + err.message);
} finally {
  console.log("에러를 전달하든 말든 어찌됐든 실행하는 finally~");
}
