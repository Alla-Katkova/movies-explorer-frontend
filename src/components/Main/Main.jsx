import Promo from "../Promo/Promo.jsx";

import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs.jsx";
import AboutMe from "../AboutMe/AboutMe.jsx";
import Portfolio from "../Portfolio/Portfolio";

export default function Main({}) {
  return (
    <main>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  );
}
