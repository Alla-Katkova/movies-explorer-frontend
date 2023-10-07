import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__container">
        <p className="footer__year">© 2023</p>
        <ul className="footer__list">
          <li className="footer__item">
            <a className="footer__item-link" href="https://practicum.yandex.ru/">
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__item-link" href="https://github.com/Alla-Katkova">
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
