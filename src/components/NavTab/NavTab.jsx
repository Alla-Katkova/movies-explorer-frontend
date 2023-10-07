import "./NavTab.css";
export default function NavTab() {
  return (
    <section>
      <nav className="navbar">
        <a className="navbar__link-button" href="#about">
          О проекте
        </a>
        <a className="navbar__link-button" href="#techs">
          Технологии
        </a>
        <a className="navbar__link-button" href="#about-me">
          Студент
        </a>
      </nav>
    </section>
  );
}
