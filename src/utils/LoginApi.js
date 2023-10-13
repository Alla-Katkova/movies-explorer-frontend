const LOGIN_API_URL = "https://api.movies.explorer.katko.nomoredomainsicu.ru/signin";

export function login(email, password) {
  return fetch(LOGIN_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      if (data.token) {
        return data.token;
      } else {
        throw new Error("Invalid response from server");
      }
    })
    .catch((error) => {
      throw new Error(`Error logging in: ${error.message}`);
    });
}
