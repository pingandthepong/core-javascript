/* ---------------------------------------------------------------------- */
/* Event bubbling & capturing                                             */
/* ---------------------------------------------------------------------- */

/* 버블링 ----------------------------------------------------------------- */

const visual = getNode(".visual");
const news = getNode(".news");
const desc = getNode(".desc");

visual.addEventListener("click", function (e) {
  console.log("target: ", e.target); // 클릭한 대상 확인해줌
  console.log("currentTarget: ", e.currentTarget); // 제일 처음 만나는 애
  console.log("%c visual", "background:dodgerblue");

  css(".pop", "display", "block");
});

getNode(".pop").addEventListener("click", (e) => {
  e.stopPropagation(); // 이걸 넣어줘야 기능이 작동함
  css(".pop", "display", "none");
});

// news.addEventListener("click", function () {
//   console.log("%c news", "background:orange");
// });
// desc.addEventListener("click", function (e) {
//   e.stopPropagation();
//   console.log("%c desc", "background:hotpink");
// });

/* 캡처링 ----------------------------------------------------------------- */
