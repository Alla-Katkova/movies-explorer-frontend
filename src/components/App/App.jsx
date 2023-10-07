import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main.jsx";
import Login from "../Login/Login.jsx";
import SavedMovies from "../SavedMovies/SavedMovies.jsx";
import Profile from "../Profile/Profile.jsx";
import Register from "../Register/Register.jsx";
import Movies from "../Movies/Movies.jsx";
import NotFound from "../NotFound/NotFound";
// import Header from "../Header/Header.jsx";

function App() {
  return (
    <div className="app">
      {/*<FakeHeader />*/}
      {/* <Header /> */}
      <Routes>
        <Route path="/signin" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
