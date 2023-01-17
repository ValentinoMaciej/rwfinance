import styles from "./Footer.module.css";
import WhiteLogoNoBG from "../LogoImage/WhiteLogoNoBG.svg";

function Footer() {
  return (
    <nav className={styles.navBar}>
      <img
        src={WhiteLogoNoBG}
        alt="logo of company"
        className={styles.navLogo}
      />
      <article className={styles.footerOption}>
        <p>RW Finance</p>
        <p>
          ul. Targowa 9, pokój 2.12 <br /> 66-400 Gorzów Wielkopolski <br />
          e-mail: biuro@rwfinance.pl <br /> tel. +48 791 422 959 / 511 903 003
        </p>
      </article>
      <button className={styles.contactUsButton}>
        <a href="#contact">Napisz do nas !</a>
      </button>
    </nav>
  );
}

export default Footer;
