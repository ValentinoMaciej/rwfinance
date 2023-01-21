import styles from "./NavBar.module.css";
import WhiteLogoNoBG from "../LogoImage/WhiteLogoNoBG.svg";
import { NavLink } from "react-router-dom";
import hamburgerMenu from "./NavBarImages/hamburgerMenu.svg";

function NavBar() {
  return (
    <nav className={styles.navBar}>
      <img
        src={WhiteLogoNoBG}
        alt="logo of company"
        className={styles.navLogo}
      />

      <ul className={styles.navigateOption}>
        <li>
          <NavLink to="/">Menu Główne</NavLink>
        </li>
        <li>
          <NavLink to="/oferta">Oferta</NavLink>
        </li>
        <li>
          <NavLink to="/kontakt">Kontakt</NavLink>
        </li>
      </ul>
      <button className={styles.contactUsButton}>
        <NavLink to="/kontakt">Napisz do nas !</NavLink>
      </button>
      <input
        type="checkbox"
        id="hamburgerInput"
        className={`${styles.burgerShower} ${styles.hamburgerInput}`}
      />
      <label className={styles.hamburgerMenu} for="hamburgerInput">
        <nav className={styles.sidebarMenu}>
          <img
            src={WhiteLogoNoBG}
            alt="logo of company"
            className={styles.navLogo}
          />
          <ul className={styles.navigateOptionMobile}>
            <li className={styles.listStyle}>
              <NavLink to="/">Menu Główne</NavLink>
            </li>
            <li className={styles.listStyle}>
              <NavLink to="/oferta">Oferta</NavLink>
            </li>
            <li className={styles.listStyle}>
              <NavLink to="/kontakt">Kontakt</NavLink>
            </li>
          </ul>
        </nav>
      </label>
    </nav>
  );
}

export default NavBar;
