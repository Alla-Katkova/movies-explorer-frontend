import "./Hamburger.css";

export default function Hamburger({ isBurgerOpened, onClickBurger }) {
  function handleOnClickBurger() {
    onClickBurger();
  }

  return (
    <button
      type="button"
      onClick={handleOnClickBurger}
      className="hamburger-button"
    ></button>
  );
}
