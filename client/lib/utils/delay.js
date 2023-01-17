import { getNode } from "../dom/getNode.js";

const first = getNode(".first");

first.style.top = "-100px";
first.style.transform = "rotate(360deg)";
// 콜백이 필요해진 시점
first.style.top = "0px";
