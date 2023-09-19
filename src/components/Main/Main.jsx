import Promo from "../Promo/Promo.jsx";
import NavTab from "../NavTab/NavTab.jsx";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs.jsx";
import AboutMe from "../AboutMe/AboutMe.jsx";
import Portfolio from "../Portfolio/Portfolio";

export default function Main({}) {
  return (
    <main>
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  );
}
