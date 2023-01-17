import styles from "./MainPage.module.css";
import BlackLogoNoBG from "../LogoImage/BlackLogoNoBG.svg";

function MainPage() {
  return (
    <div className="App">
      <img
        src={BlackLogoNoBG}
        alt="logo of company"
        className={styles.mainLogo}
      />
    </div>
  );
}

export default MainPage;