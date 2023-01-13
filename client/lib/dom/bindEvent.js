function bindEvent(node, type, handler) {
  if (typeof node === "string") {
    node = getNode(node);
  }
  // 걸러주는 유틸함수 (정규표현식 사용)
  if (!/mouseenter|click|mousemove|mouseleave/g.test(type)) {
    typeError(
      "bindEvent 함수의 두 번째 인자는 유효한 이벤트 타입 이어야 합니다."
    );
  }

  node.addEventListener(type, handler);
  // 클로저(함수가 함수를 내뱉음)
  return () => node.removeEventListener(type, handler);
}
