function wait(delay) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

function request(url, method = 'GET', data = null) {
  const options = { method };

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    };
  }

  return wait(300)
    .then(() => fetch(url))
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    });
}

export const client = {
  get: (url) => request(url),
};
