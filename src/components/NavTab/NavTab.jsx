import "./NavTab.css";

export default function NavTab() {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <a
            className="navbar__link-button"
            href="#about"
          >
            О проекте
          </a>
        </li>
        <li>
          <a
            className="navbar__link-button"
            href="#techs"
          >
            Технологии
          </a>
        </li>
        <li>
          <a
            className="navbar__link-button"
            href="#about-me"
          >
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
}
