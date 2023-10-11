import Hamburger from "../Hamburger/Hamburger";
import { useState } from "react";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import DesktopMenu from "../DesktopMenu/DesktopMenu";
import LoggedOutUserMenu from "../LoggedOutUserMenu/LoggedOutUserMenu";

export default function Navigation() {
  const loggedIn = true;
  const [isHamburgerMenuOpened, setIsHamburgerMenuOpened] = useState(false);
  const onClickBurger = () => {
    setIsHamburgerMenuOpened(true);
  };
  if (isHamburgerMenuOpened) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }
  const navigationStateClass = isHamburgerMenuOpened ? "navigation_state_on" : "navigation_state_off";
  return (
    <>
      {loggedIn ? (
        <>
          <Hamburger isBurgerOpened={isHamburgerMenuOpened} onClickBurger={onClickBurger} />
          <HamburgerMenu isOpened={isHamburgerMenuOpened} setIsOpened={setIsHamburgerMenuOpened} />
          <DesktopMenu />
        </>
      ) : (
        <LoggedOutUserMenu />
      )}
    </>
  );
}
