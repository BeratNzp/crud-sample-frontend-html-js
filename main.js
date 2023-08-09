function request(method, url, data) {
  const selectedMethodString = ["POST", "GET", "PUT", "DELETE"].includes(method) ? method : "GET";
  return fetch(url, {
    method: selectedMethodString,
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
}
