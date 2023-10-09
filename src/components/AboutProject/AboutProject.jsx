import "./AboutProject.css";
export default function AboutProject({}) {
  return (
    <section className="about" id="about">
      <h2 className="about__title">О проекте</h2>
      <div className="about__container">
        <div className="about__summary-phase">
          <h3 className="about__summary-title">Дипломный проект включал 5 этапов</h3>
          <p className="about__summary-subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about__summary-weeks">
          <h3 className="about__summary-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about__summary-subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="progressline">
        <figure className="progressline__backend">
          <div className="progressline__line progressline__line_type_green">1 неделя</div>
          <figcaption className="progressline__text">Back-end</figcaption>
        </figure>
        <figure className="progressline__frontend">
          <div className="progressline__line progressline__line_type_grey">4 недели</div>
          <figcaption className="progressline__text">Front-end</figcaption>
        </figure>
      </div>
    </section>
  );
}
