// 함수형 프로그래밍으로 하기
// (함수를 위주로 값이 나오고, 돌아갈 수 있도록)

/* eslint no-undef: 'warn' */
/* eslint no-unused-vars: 'off */

/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                               1. 인풋 밸류값 가져오기                               */
/* -------------------------------------------------------------------------- */
const firstInput = getNode("#firstNumber");
// 콘솔에 firstInput.value 찍어서 확인 가능
const secondInput = getNode("#secondNumber");

/* -------------------------------------------------------------------------- */
/*                                2. 이벤트 핸들러 연결                               */
/* -------------------------------------------------------------------------- */
const done = getNode("#done");
const result = getNode(".result");
/* -------------------------------------------------------------------------- */
/*                               3. 이벤트 기본동작 차단                               */
/* -------------------------------------------------------------------------- */

function getInputValue(node) {
  if (typeof node === "string") node = getNode(node);
  // $0.tagName으로 콘솔에 찍었을 때(태그네임 조회시) 대문자가 나오므로 대문자로 표기해야 함(INPUT)
  if (node.tagName !== "INPUT")
    // 원래 referenceError는 throw new Error 던져줘야해서, 유틸함수로 만든 refError 사용
    refError("getInputValue 함수는 INPUT ELEMENT만 허용합니다.");
  return node.value;
}

/* -------------------------------------------------------------------------- */

// 더하기 함수
const sum = (valueA, valueB) => valueA + valueB;

// function sum (valueA, valueB) {
//   return valueA + valueB
// }

/* -------------------------------------------------------------------------- */

// result에 원래 자리하던 - 하이픈 제거하기
// getNode(".result").textContent = "";

// 유틸함수로 만들어버리기 clear contents

function clearContents(node) {
  if (typeof node === "string") node = getNode(node);
  node.textContent = "";
}

/* -------------------------------------------------------------------------- */

// 두 밸류(수)의 합 더해주기

// 화면에 결과 출력

// input submit으로 인한 새로고침 일어나지 않도록 preventDefault 설정 (WebAPI - DOM - 브라우저 기본 동작 참고)
// preventDefaul = 요소의 액션을 막아줌
// a태그나 button 태그에는 새 창이 열리거나 새로고침 되거나 그런 기본 효과들이 있고, 그것들을 막아주는 게 preventDefault 예요. 근데 input에는 그런 기본효과가 없어서 안넣어 주는 거
// input은 값을 입력받는 역할만 해서 그래요 a 태그나 submit 처럼 페이지를 이동하거나 새로고침 하는 역할이 없어서
// done 버튼도 input 태그로 되어있는데 type이 submit 이라 새로고침이 발생하는데 그걸 preventDefault로 막아준거
function handler(e) {
  e.preventDefault();

  // +로 숫자로 형변환해서 받기
  // let firstValue = +getInputValue(firstInput);
  // let secondValue = +getInputValue(secondInput);
  // INPUT으로 받는 모든 것들은 모두 string type
  // console.log(typeof firstValue, typeof secondValue);
  // 숫자로 형변환 필요 (받을 때 숫자로 변환해주거나, 받은걸 변환해주거나.)
  // console.log(firstValue, secondValue);

  // 더하기 함수를 이용해 계산
  // let total = sum(firstValue, secondValue);
  // console.log(total);

  // result에 원래 자리하던 - 하이픈 제거 출력
  // clearContents(result);

  // 값을 밑에 뿌려주기 insert유틸함수 사용
  // insertLast(result에 total을 뿌려주겠다!)
  // insertLast(result, total);
}

// 이벤트 핸들러 (라이브계산기)
function inputHandler() {
  let firstValue = +getInputValue(firstInput);
  let secondValue = +getInputValue(secondInput);
  let total = sum(firstValue, secondValue);

  clearContents(result);
  insertLast(result, total);
}

done.addEventListener("click", handler);

firstInput.addEventListener("change", inputHandler);
secondInput.addEventListener("change", inputHandler);
