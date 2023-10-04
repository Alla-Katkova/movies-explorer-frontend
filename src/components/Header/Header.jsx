import "./Header.css";
import Navigation from "../Navigation/Navigation.jsx";
import HomeButton from "../HomeButton/HomeButton.jsx";

export default function Header() {
  return (
    <header className="header">
      <HomeButton />
      <Navigation />
    </header>
  );
}
