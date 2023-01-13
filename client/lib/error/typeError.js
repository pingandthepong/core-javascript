function typeError(message) {
  throw new TypeError(message);
}
function refError(message) {
  throw new RefError(message);
}
function syntaxError(message) {
  throw new SyntaxError(message);
}
