import style from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <>
      <nav className={style["menu"]}>
        <div className={style["menu__logo"]}>
          <img src="./icons/logo.png" alt="TUDUM icon as the website's logo" />
          <h1>TUDUM</h1>
        </div>
        <ul className={style["menu__item"]}>
          <li>Link 1</li>
          <li>Link 2</li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
