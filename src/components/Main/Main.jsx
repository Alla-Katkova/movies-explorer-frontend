import Header from "../Header/Header.jsx";
import Promo from "../Promo/Promo.jsx";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs.jsx";
import AboutMe from "../AboutMe/AboutMe.jsx";
import Footer from "../Footer/Footer.jsx";

export default function Main({ isLoggedIn }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
      <Footer />
    </>
  );
}
