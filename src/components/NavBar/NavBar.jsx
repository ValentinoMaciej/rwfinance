import styles from "./NavBar.module.css";
import WhiteLogoNoBG from "../LogoImage/WhiteLogoNoBG.svg";

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
          <a href="#menu">Menu Główne</a>
        </li>
        <li>
          <a href="#offer">Oferta</a>
        </li>
        <li>
          <a href="#contact">Kontakt</a>
        </li>
      </ul>
      <button className={styles.contactUsButton}>
        <a href="#contact">Napisz do nas !</a>
      </button>
    </nav>
  );
}

export default NavBar;
