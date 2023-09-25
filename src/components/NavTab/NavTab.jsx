import "./NavTab.css";
export default function NavTab() {
  return (
    <section>
      <nav className="navbar">
        <a className="navbar__link-button">О проекте</a>
        <a className="navbar__link-button">Технологии</a>
        <a className="navbar__link-button">Студент</a>
      </nav>
    </section>
  );
}
