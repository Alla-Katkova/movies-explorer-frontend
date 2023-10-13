import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main.jsx";
import Login from "../Login/Login.jsx";
import SavedMovies from "../SavedMovies/SavedMovies.jsx";
import Profile from "../Profile/Profile.jsx";
import Register from "../Register/Register.jsx";
import Movies from "../Movies/Movies.jsx";
import NotFound from "../NotFound/NotFound";
import { login } from "../../utils/LoginApi";
import { logout, signup } from "../../utils/MainApi";
import { useState } from "react";
import { initCache, initJwt, isJwtTokenExist } from "../../utils/localStorage";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  //критерий залогиненности - это наличие жвт токена, проверяемое функцией isJwtTokenExist
  const [isLoggedIn, setIsLoggedIn] = useState(isJwtTokenExist());

  function handleLogin(values) {
    return login(values.email, values.password).then((token) => {
      initJwt(token);
      initCache();
      setIsLoggedIn(true);
    });
  }

  function handleLogout() {
    logout().then(() => setIsLoggedIn(false));
  }

  function handleRegister(userDetails) {
    return signup(userDetails).then(() => {
      return handleLogin({ email: userDetails.email, password: userDetails.password });
    });
  }

  return (
    <div className="app">
      <pre>Is logged in: {JSON.stringify(isLoggedIn)}</pre>
      <Routes>
        <Route path="/" element={<Main isLoggedIn={isLoggedIn} />} />
        <Route
          path="/movies"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Movies />
            </ProtectedRoute>
          }
        />
        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <SavedMovies />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Profile handleLogout={handleLogout} />
            </ProtectedRoute>
          }
        />

        <Route path="/signin" element={<Login handleLogin={handleLogin} isLoggedIn={isLoggedIn} />} />
        <Route path="/signup" element={<Register handleRegister={handleRegister} isLoggedIn={isLoggedIn} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
