import logo from "../../images/logo.svg";
import "./HomeButton.css";

export default function HomeButton() {
  return (
    <Link to="/" className="homebutton__link">
      <img src={logo} alt="Логотип" />
    </Link>
  );
}
