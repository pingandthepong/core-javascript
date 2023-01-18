const defaultOptions = {
  method: "GET",
  mode: "cors",
  body: null,
  cache: "no-cache",
  credential: "same-origin",
  redirect: "follow",
  referrerPolicy: "no-reffere",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
};

// fetch 쓸거임
const tiger = async (options = {}) => {
  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: { ...defaultOptions.headers, ...options.headers },
  };

  let response = await fetch("https://jsonplaceholder.typicode.com/users/1", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    response.data = await response.json();
  }
  // console.log(response);
  return response;
};
// console.log(await tiger());

tiger({});
