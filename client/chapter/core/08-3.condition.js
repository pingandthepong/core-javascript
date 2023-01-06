/* ---------------------------------------------------------------------- */
/* Switch                                                                 */
/* ---------------------------------------------------------------------- */

/* const MORNING = "아침",
  LUNCH = "점심",
  DINNER = "저녁",
  NIGHT = "밤",
  LATE_NIGHT = "심야",
  DAWN = "새벽";

let thisTime = DAWN; */

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

/* switch (thisTime) {
  case MORNING:
    console.log("디스코드 ON");
    break;

  case LUNCH:
    console.log("식사를 한다.");
    break;

  case DINNER:
    console.log("저녁을 먹고 씻는다.");
    break;

  case NIGHT:
    console.log("스터디를 한다.");
    break;

  case LATE_NIGHT:
  case DAWN:
    console.log("꿈 속에서 배웠던 코드를 생각한다.");
    break;
} */

/* switch문 → if문 변환 --------------------------------------------------- */

/* if (thisTime === MORNING) {
  console.log("디스코드 ON");
} else if (thisTime === LUNCH) {
  console.log("식사를 한다.");
} else if (thisTime === DINNER) {
  console.log("저녁을 먹고 씻는다.");
} else if (thisTime === NIGHT) {
  console.log("스터디를 한다.");
} else if (thisTime === LATE_NIGHT || thisTime === DAWN) {
  console.log("꿈 속에서 배웠던 코드를 생각한다.");
} */

/* switch vs. if -------------------------------------------------------- */

// 0~6까지의 값을 받는다.

// let number = +prompt("0부터 6 중에 무슨 숫자를 고르시겠어요?", "");

/* switch (number) {
  case 0:
    console.log("일요일을 좋아하시는군요!");
    break;
  case 1:
    console.log("월요일을 좋아하시는군요!");
    break;
  case 2:
    console.log("화요일을 좋아하시는군요!");
    break;
  case 3:
    console.log("수요일을 좋아하시는군요!");
    break;
  case 4:
    console.log("목요일을 좋아하시는군요!");
    break;
  case 5:
    console.log("금요일을 좋아하시는군요!");
    break;
  case 6:
    console.log("토요일을 좋아하시는군요!");
    break;
  default:
    alert("취소되었습니다.");
} */

function getRandom(n) {
  return Math.round(Math.random() * n);
}

function getDay(dayValue) {
  switch (dayValue) {
    case 0:
      return "일요일을 좋아하시는군요!";
    case 1:
      return "월요일을 좋아하시는군요!";
    case 2:
      return "화요일을 좋아하시는군요!";

    case 3:
      return "수요일을 좋아하시는군요!";

    case 4:
      return "목요일을 좋아하시는군요!";

    case 5:
      return "금요일을 좋아하시는군요!";

    case 6:
      return "토요일을 좋아하시는군요!";

    default:
      return "취소되었습니다.";
  }
}

let result = getDay(getRandom(6));
console.log(result);

// Math.round(Math.random() * 6);
