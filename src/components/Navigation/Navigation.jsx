import "./Navigation.css";

export default function Navigation() {
  const loggedIn = true;
  return (
    <>
      {loggedIn ? (
        <nav
          className="navigation"
          // className={`navigation navigation_state_${isBurgerOpened ? "opened" : "closed"}`}
          // onClick={isBurgerOpened ? onClickBurger : undefined}
        >
          {/* <Hamburger isBurgerOpened={isBurgerOpened} onClickBurger={onClickBurger} /> */}
          <ul
            className="navigation__list"
            // className={`navigation__list navigation__list_logged navigation__list_state_${isBurgerOpened ? "opened" : "closed"}`}
            // onClick={handleClickOverlay}
          >
            {/* {isBurgerOpened && (
              <li className="navigation__item">
                <Link exact to="/" className="navigation__link" >
                  Главная
                </Link>
              </li>
            )} */}
            <li className="navigation__item">
              <NavLink to="/movies" className="navigation__link" activeClassName={activeLink}>
                Фильмы
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink to="/saved-movies" className="navigation__link" activeClassName={activeLink}>
                Сохранённые фильмы
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink to="/profile" className="navigation__link navigation__link_type_account" activeClassName={activeLink}>
                Аккаунт
              </NavLink>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="navigation">
          <ul className="navigation__list">
            <li>
              <Link to="/signup" className="navigation__link navigation__link_landing">
                Регистрация
              </Link>
            </li>
            <li>
              <Link to="/signin" className="navigation__link navigation__link_landing navigation__link_signin">
                Войти
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
