/* ---------------------------------------------------------------------- */
/* DOM traversal                                                          */
/* ---------------------------------------------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

/* -------------------------------------------------------------------------- */

// let first = document.querySelector(".first");

// 배열 구조분해 할당 사용
let [first, second] = document.querySelectorAll("span");
// console.log(second);

// getNode 함수 만들기. 대상을 넣으면 대상을 돔에서 찾아서 리턴하도록
//

console.log(getNode(".first"));
console.log(getNode(".second"));

console.log(getNodes(".first"));
console.log(getNodes(".second"));

/* 문서 대상 확인 */
// - matches : 선택자 안에 class | id를 갖고 있는 대상이 있는지 확인
// (안에 매칭되어 있는게 맞는지 확인)

// 웃기지만 굳이 해보자면,, 이렇게 할 수 있다.
console.log(getNode(".first").matches(".first"));
console.log(getNode(".first").matches(".second"));

// - contains : 선택자의 자식들 중에 해당 element가 있는지 확인
// (부모 안에 자식이 있는지 확인)
console.log(getNode("h1").contains(getNode(".first")));

/* -------------------------------------------------------------------------- */

let first = getNode(".first");

let clicked = false;
document.addEventListener("click", () => {
  if (first.classList.contains("first") && !clicked) {
    first.classList.add("is-active");
  } else {
    first.classList.remove("is-active");
  }
  clicked = !clicked;
});
