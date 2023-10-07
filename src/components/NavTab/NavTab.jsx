import "./NavTab.css";
export default function NavTab() {
  return (
    <section>
      <nav className="navbar">
        <a className="navbar__link-button" href="#">
          О проекте
        </a>
        <a className="navbar__link-button" href="#">
          Технологии
        </a>
        <a className="navbar__link-button" href="#">
          Студент
        </a>
      </nav>
    </section>
  );
}
