import logo from "../../images/logo.svg";

export default function HomeButton() {
  return (
    <Link to="/" className="homebutton__link">
      <img src={logo} alt="Логотип" />
    </Link>
  );
}
