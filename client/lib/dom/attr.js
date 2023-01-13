/* -------------------------------------------------------------------------- */
/* -------------------------------- 유틸 함수 만들기 ------------------------------- */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
// get 함수 만들기

function getAttr(node, prop) {
  if (typeof node === "string") {
    node = getNode(node);
  }

  return node.getAttribute(prop);
}

// 호출부
// getAttr(".first", "class");
// console.log(getAttr(".first", "id"));
// console.assert(getAttr(".first", "class") === "first");

// const second = getNode(".second"); // 이렇게... 바로 넣을 수도 있다...?
// getAttr(second, "class");

/* -------------------------------------------------------------------------- */
// set 함수 만들기

function setAttr(node, prop, value) {
  // validation
  if (typeof node === "string") {
    node = getNode(node);
  }

  if (typeof prop !== "string") {
    throw new TypeError("setAttr 함수의 두 번째 인자는 string이어야 합니다.");
  }

  if (!value) {
    throw new SyntaxError("setAttr 함수의 세 번째 인자는 필수값입니다.");
  }

  node.setAttribute(prop, value);
  // 내뱉는 게 아니라, setting만 해주면 되니까 return 없어도 됨
}

// 호출부
// setAttr(".first", "data-value", "hello");

// attr 유틸 함수 만들기
function attr(node, prop, value) {
  if (!value) {
    return getAttr(node, prop);
  } else {
    setAttr(node, prop, value);
  }

  // 방법2. return !value ? getAttr(node, prop) : setAttr(node, prop, value);
  // 방법3. const attr = (node, prop, value) => !value ? getAttr(node,prop) : setAttr(node, prop, value);
}

// console.log(attr(".first", "id", "container"));

/* -------------------------------------------------------------------------- */
// common 함수 만들기
