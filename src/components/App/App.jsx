import { Route, Routes } from "react-router-dom";
import "./App.css";
import FakeHeader from "../FakeHeader/FakeHeader.jsx";
import Main from "../Main/Main.jsx";
import Login from "../Login/Login.jsx";
import SavedMovies from "../SavedMovies/SavedMovies.jsx";
import Profile from "../Profile/Profile.jsx";
import Register from "../Register/Register.jsx";
import Movies from "../Movies/Movies.jsx";

function App() {
  return (
    <div className="App">
      <FakeHeader />
      <Routes>
        <Route path="/signin" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
