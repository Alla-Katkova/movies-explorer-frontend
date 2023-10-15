import Hamburger from "../Hamburger/Hamburger";
import { useState } from "react";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import DesktopMenu from "../DesktopMenu/DesktopMenu";
import LoggedOutUserMenu from "../LoggedOutUserMenu/LoggedOutUserMenu";

export default function Navigation({ isLoggedIn }) {
  const [isHamburgerMenuOpened, setIsHamburgerMenuOpened] = useState(false);
  const onClickBurger = () => {
    setIsHamburgerMenuOpened(true);
  };
  if (isHamburgerMenuOpened) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }
  return (
    <>
      {isLoggedIn ? (
        <>
          <Hamburger
            isBurgerOpened={isHamburgerMenuOpened}
            onClickBurger={onClickBurger}
          />
          <HamburgerMenu
            isOpened={isHamburgerMenuOpened}
            setIsOpened={setIsHamburgerMenuOpened}
          />
          <DesktopMenu />
        </>
      ) : (
        <LoggedOutUserMenu />
      )}
    </>
  );
}
