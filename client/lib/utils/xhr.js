/* readyState
  
  0: uninitalized // 초기화
  1: loading // 로딩
  2: loaded // 로딩완료
  3:interative // 인터랙티브
  4:complete // 완료

*/

// xhr Data 함수 만들기 method, url
export function xhrData({
  url = "",
  method = "GET",
  body = null,
  onSuccess = null,
  onFail = null,
  headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
} = {}) {
  // 객체 구조 분해 할당
  //const { method, url, body } = options;
  const xhr = new XMLHttpRequest();

  // 비동기 통신 오픈
  xhr.open(method, url);

  // console.log(Object.entries(headers));

  // Object.entries => Static Method. 객체의 프로퍼티를 [키, 값] 으로 반환
  // Object.entries(headers).forEach(([key, value]) => {
  //   xhr.setRequestHeader(key, value); // setRequestHeader = 키, 값 을 받아서 헤더값에 추가 , 헤더를 리퀘스트할 때 세팅하는 내장함수
  // });

  xhr.addEventListener("readystatechange", () => {
    // 객체 구조 분해 할당
    const { status, readyState, response } = xhr;

    if (status >= 200 && status < 400) {
      if (readyState === 4) {
        console.log("통신 성공");
        onSuccess(JSON.parse(response));
      }
    } else {
      onFail("통신 실패");
    }
  });

  // 서버에 요청 (문자화 시켜서 던져야해서 stringify())
  xhr.send(JSON.stringify(body));
}

// xhrData({
//   url: "https://jsonplaceholder.typicode.com/users",

//   // 성공했을 때 결과물 출력
//   onSuccess: (result) => {
//     console.log(result);
//   },

//   // 실패했을 때 결과물 출력
//   onFail: (err) => {
//     console.error(err);
//   },
// });

xhrData.get = (url, onSuccess, onFail) => {
  xhrData({
    url,
    onSuccess,
    onFail,
  });
};

xhrData.post = (url, body, onSuccess, onFail) => {
  xhrData({
    method: "POST",
    body,
    url,
    onSuccess,
    onFail,
  });
};

xhrData.put = (url, body, onSuccess, onFail) => {
  xhrData({
    method: "PUT",
    body,
    url,
    onSuccess,
    onFail,
  });
};

xhrData.delete = (url, body, onSuccess, onFail) => {
  xhrData({
    method: "DELETE",
    url,
    onSuccess,
    onFail,
  });
};

// xhrData.get(
//   "https://jsonplaceholder.typicode.com/users",
//   (result) => {
//     console.log(result);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// xhrData.post(
//   "https://jsonplaceholder.typicode.com/users",
//   (result) => {
//     console.log(result);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// xhrData.delete(
//   "https://jsonplaceholder.typicode.com/users/3",
//   (res) => {
//     console.log(res);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

// xhrData("POST", "https://jsonplaceholder.typicode.com/users", {
//   name: "Ervin Howell",
//   username: "Antonette",
//   email: "Shanna@melissa.tv",
//   address: {
//     street: "Victor Plains",
//     suite: "Suite 879",
//     city: "Wisokyburgh",
//     zipcode: "90566-7771",
//     geo: {
//       lat: "-43.9509",
//       lng: "-34.4618",
//     },
//   },
//   phone: "010-692-6593 x09125",
//   website: "anastasia.net",
//   company: {
//     name: "Deckow-Crist",
//     catchPhrase: "Proactive didactic contingency",
//     bs: "synergize scalable supply-chains",
//   },
// });
