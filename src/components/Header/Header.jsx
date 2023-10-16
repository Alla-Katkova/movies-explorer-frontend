import "./Header.css";
import Navigation from "../Navigation/Navigation.jsx";
import HomeButton from "../HomeButton/HomeButton.jsx";

export default function Header({ isLoggedIn }) {
  return (
    <header className="header">
      <div className="header__container">
        <HomeButton />
        <Navigation isLoggedIn={isLoggedIn} />
      </div>
    </header>
  );
}
