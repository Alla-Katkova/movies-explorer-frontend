import { clearLocalStorage, getJwtToken } from "./localStorage";

const BASE_URL = "https://api.movies.explorer.katko.nomoredomainsicu.ru";
let headers = {
  "Content-Type": "application/json",
};

async function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    const response = await res.json();
    const errorMessage = response.message || `Ошибка: ${res.status}`;
    return Promise.reject({
      status: res.status,
      message: errorMessage,
    });
  }
}

export function logout() {
  return fetch(BASE_URL + "/signout", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getJwtToken()}`,
      ...headers,
    },
  })
    .then(checkResponse)
    .then(() => {
      clearLocalStorage();
    });
}

export function signup(userDetails) {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(userDetails),
  })
    .then(checkResponse)
    .catch((err) => {
      switch (err.status) {
        case 409:
          throw new Error("Пользователь с таким email уже существует");
        default:
          throw new Error("При регистрации пользователя произошла ошибка");
      }
    });
}

export function login(email, password) {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then(checkResponse)
    .then((data) => {
      if (data.token) {
        return data.token;
      } else {
        throw new Error("При авторизации произошла ошибка. Токен не передан или передан не в том формате");
      }
    })
    .catch((err) => {
      switch (err.status) {
        case 400:
          throw new Error("Вы ввели неверный логин или пароль.");
        default:
          throw new Error("При авторизации произошла ошибка.");
      }
    });
}

export function getUserDetails() {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${getJwtToken()}`,
      ...headers,
    },
  }).then(checkResponse);
}

// TODO исправить остальные функции по образцу этой
export function editUserDetails(updatedUserDetails) {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${getJwtToken()}`,
      ...headers,
    },
    body: JSON.stringify(updatedUserDetails),
  })
    .then(checkResponse)
    .catch((err) => {
      switch (err.status) {
        case 409:
          throw new Error("Пользователь с таким email уже существует");
        default:
          throw new Error("При обновлении профиля произошла ошибка");
      }
    });
}

function tranformSavedMoviesForUi(movies) {
  return movies.map((movie) => ({
    ...movie,
    id: movie.movieId,
  }));
}

export function fetchSavedMovies() {
  console.log("request for fetchSavedMovies");
  return fetch(`${BASE_URL}/movies`, {
    headers: {
      Authorization: `Bearer ${getJwtToken()}`,
      ...headers,
    },
  })
    .then(checkResponse)
    .then((data) => tranformSavedMoviesForUi(data))
    .catch((err) => {
      console.error("Error fetching saved movies:", err.message);
      throw err; // re-throwing the error to be caught by callers if necessary
    });
}

// сохранение фильма
export function saveMovie(movie) {
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${getJwtToken()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      movieId: movie.idMoviesDb, //важно!
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: movie.image,
      trailerLink: movie.trailerLink,
      thumbnail: movie.image,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    }),
  }).then(checkResponse);
}

// удаление фильма из сохранённых
export function deleteMovie(movieId) {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${getJwtToken()}`,
    },
  }).then(checkResponse);
}
