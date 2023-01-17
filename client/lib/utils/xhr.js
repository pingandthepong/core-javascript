/* readyState
  
  0: uninitalized // 초기화
  1: loading // 로딩
  2: loaded // 로딩완료
  3:interative // 인터랙티브
  4:complete // 완료

*/

const xhr = new XMLHttpRequest();

// 비동기 통신 오픈
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

// 에러 체크
xhr.addEventListener("readystatechange", () => {
  if (xhr.status >= 200 && xhr.status < 400) {
    if (xhr.readyState === 4) {
      console.log("통신 성공");
    }
  } else {
    console.error("통신 실패");
  }
});

// 서버에 요청
xhr.send();
