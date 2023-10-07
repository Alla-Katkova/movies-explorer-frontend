import "./AboutMe.css";
import Portfolio from "../Portfolio/Portfolio.jsx";
import avatar from "../../images/ava.png";

export default function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__info-container">
          <h3 className="about-me__name">Алла</h3>
          <h4 className="about-me__status">Веб-разработчик, 30 лет</h4>
          <p className="about-me__description">
            Хочу работать и развиваться в IT-сфере. Умею брать на себя инициативу, но также замечательно могу работать в команде. Стараюсь всегда найти подход к
            каждому и создать благоприятную рабочую атмосферу. Наиболее важным аспектом в жизни считаю постоянное развитие и обучение.
          </p>
          <a href="https://github.com/Alla-Katkova" className="about-me__github-link">
            Github
          </a>
        </div>
        <img className="about-me__avatar" src={avatar} alt="Аватар студента" />
      </div>
      <Portfolio />
    </section>
  );
}
