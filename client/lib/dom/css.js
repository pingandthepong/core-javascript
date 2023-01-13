/* -------------------------------------------------------------------------- */
// element.classList.add('') 유틸함수
function addClass(node, className) {
  //validation
  if (typeof node === "string") node = getNode(node);

  if (typeof className !== "string") {
    typeError("addClass 함수의 두 번쨰 인자는 문자 타입이어야 합니다.");
  }
  node.classList.add(className);
}

// addClass(".first", "hello");
// addClass(".first", 123);

/* -------------------------------------------------------------------------- */
// element.classList.remove('') 유틸함수
function removeClass(node, className) {
  //validation
  if (typeof node === "string") node = getNode(node);

  if (typeof className !== "string") {
    typeError("addClass 함수의 두 번쨰 인자는 문자 타입이어야 합니다.");
  }

  // 인자 미전달시 가진 모든 class 제거
  if (!className) {
    node.className = "";
    return;
  }
  node.classList.remove(className);
}

//removeClass(".first", "hello");

/* -------------------------------------------------------------------------- */
function toggleClass(node, className) {
  //validation
  if (typeof node === "string") node = getNode(node);

  if (typeof className !== "string") {
    typeError("addClass 함수의 두 번쨰 인자는 문자 타입이어야 합니다.");
  }

  node.classList.toggle(className);
}

//toggleClass(".first", "is-active");

// getComputedStyle 유틸함수
function getCss(node, prop) {
  //validation
  if (typeof node === "string") node = getNode(node);

  if (!(prop in document.body.style)) {
    syntaxError(
      "getCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다."
    );
  }

  return getComputedStyle(node)[prop];
}

// setCss 유틸함수
// 대상에게 원하는 css 속성을 추가 / 한 다음에 그 값을 받아서 뭔가를 처리하지 않으니, return X
function setCss(node, prop, value) {
  //validation
  if (typeof node === "string") node = getNode(node);

  if (!(prop in document.body.style)) {
    syntaxError(
      "setCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다."
    );
  }
  if (!value) {
    syntaxError("setCss 함수의 세 번재 인자는 필수값 입니다.");
  }
  node.style[prop] = value;
}

// setCss(".first", "color", "dodgerblue");

/* -------------------------------------------------------------------------- */
// css함수
// function css(node, prop, value) {
//   // if (!value) return getCss(node, prop);
//   // else setCss(node, prop, value);
// }
const css = (node, prop, value) => {
  return !value ? getCss(node, prop) : setCss(node, prop, value);
};

//css(".first", "font-size", "100px"); //set
// css(".first", "font-size"); //get
