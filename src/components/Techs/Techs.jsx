import "./Techs.css";

export default function Techs() {
  return (
    <section
      className="techs"
      id="techs"
    >
      <h2 className="techs__title">Технологии</h2>
      <div className="techs__container">
        <h3 className="techs__podtitle">7 технологий</h3>
        <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="techs__list">
          <li className="techs__list-item">
            <p className="techs__list-caption">HTML</p>
          </li>
          <li className="techs__list-item">
            <p className="techs__list-caption">CSS</p>
          </li>
          <li className="techs__list-item">
            <p className="techs__list-caption">JS</p>
          </li>
          <li className="techs__list-item">
            <p className="techs__list-caption">React</p>
          </li>
          <li className="techs__list-item">
            <p className="techs__list-caption">Git</p>
          </li>
          <li className="techs__list-item">
            <p className="techs__list-caption">Express.js</p>
          </li>
          <li className="techs__list-item">
            <p className="techs__list-caption">mongoDB</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
