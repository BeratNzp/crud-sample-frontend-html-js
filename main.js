function request(method, url, data) {
    if (method != "POST" || method != "GET" || method != "PUT" || method != "DELETE") {
        method = "GET"
    }
    return fetch(url, { 
      method: method,
      headers: {
        "Content-Type": "application/json"
      },
      body: data
    })
    .then(response => response.json())
    .catch(error => {
      console.error("POST request failed:", error);
    });
  }