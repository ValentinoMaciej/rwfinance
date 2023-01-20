import styles from "./Footer.module.css";
import WhiteLogoNoBG from "../LogoImage/WhiteLogoNoBG.svg";
import instagramLogo from "../Footer/FooterImages/instagramLogo.svg";
import linkedinLogo from "../Footer/FooterImages/linkedinLogo.svg";
import Copyright from "./Copyright/Copyright";

function Footer() {
  return (
    <>
      <nav className={styles.footer}>
        <img
          src={WhiteLogoNoBG}
          alt="logo of company"
          className={styles.footercompanyLogo}
        />
        <article className={styles.footerOption}>
          <p className={styles.footerTitle}>RW FINANCE</p>
          <p>
            ul. Targowa 9, pokój 2.12 <br /> 66-400 Gorzów Wielkopolski <br />
            e-mail: biuro@rwfinance.pl <br /> tel. +48 791 422 959 / 511 903 003
          </p>
        </article>
        <div className={styles.logos}>
          <a href="https://www.instagram.com/rwfinance_/">
            <img
              src={instagramLogo}
              alt="logo of instagram"
              className={styles.footerLogo}
            />
          </a>
          <a href="https://www.linkedin.com/company/rwfinance1/">
            <img
              src={linkedinLogo}
              alt="logo of linkedin"
              className={styles.footerLogo}
            />
          </a>
        </div>
      </nav>
      <Copyright />
    </>
  );
}

export default Footer;
