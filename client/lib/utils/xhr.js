/* readyState
  
  0: uninitalized // 초기화
  1: loading // 로딩
  2: loaded // 로딩완료
  3:interative // 인터랙티브
  4:complete // 완료

*/

// xhr Data 함수 만들기 method, url
function xhrData(method, url, body) {
  const xhr = new XMLHttpRequest();

  // 비동기 통신 오픈
  xhr.open(method, url);

  xhr.addEventListener("readystatechange", () => {
    // 객체 구조 분해 할당
    const { status, readyState, response } = xhr;

    if (status >= 200 && status < 400) {
      if (readyState === 4) {
        console.log("통신 성공");
        console.log(JSON.parse(response));
      }
    } else {
      console.error("통신 실패");
    }
  });

  // 서버에 요청 (문자화 시켜서 던져야해서 stringify())
  xhr.send(JSON.stringify(body));
}

xhrData("POST", "https://jsonplaceholder.typicode.com/users", {
  name: "Ervin Howell",
  username: "Antonette",
  email: "Shanna@melissa.tv",
  address: {
    street: "Victor Plains",
    suite: "Suite 879",
    city: "Wisokyburgh",
    zipcode: "90566-7771",
    geo: {
      lat: "-43.9509",
      lng: "-34.4618",
    },
  },
  phone: "010-692-6593 x09125",
  website: "anastasia.net",
  company: {
    name: "Deckow-Crist",
    catchPhrase: "Proactive didactic contingency",
    bs: "synergize scalable supply-chains",
  },
});
