import styles from "./Offer.module.css";
import BlackLogoNoBG from "../LogoImage/BlackLogoNoBG.svg";
import bankLogo from "./OfferImages/bankLogo.webp";
import insuranceLogo from "./OfferImages/insuranceLogo.webp";
import carImage from "./OfferImages/carImage.webp";

function Offer() {
  return (
    <>
      <section>
        <div className={styles.mainSection}>
          <img
            src={BlackLogoNoBG}
            alt="logo of company"
            className={styles.mainLogo}
          />
          <p>Co oferujemy ?</p>
        </div>
      </section>
      <section className={styles.articlesSection}>
        <h1 className={styles.offerTitle}>
          Jesteśmy multiagentami ubezpieczeniowo - finansowymi - Ty <br />{" "}
          zgłaszasz się do nas z problemem, my go rozwiązujemy !
        </h1>
        <article className={styles.gridContainer}>
          <img
            src={insuranceLogo}
            alt="insurance companies logos"
            className={`${styles.sectionImages} ${styles.insuranceLogo}`}
          />
          <article className={`${styles.articles} ${styles.insuranceArticle}`}>
            <h3>Najwięszy, najlepszy i najtańszy wybór ubezpieczeń.</h3>
            <p>
              W swojej ofercie posiadamy jedynie renomowane i uznane <br />{" "}
              Towarzystwa Ubezpieczeniowe. W ofercie mamy <br /> przedstawicieli
              Polskich jak i zagranicznych a także jako <br /> nieliczni
              światowego lidera ubezpieczeń na życie,
              <br /> posiadającego filie na całej kuli ziemskiej - Towarzystwo
              <br />
              Ubezpieczeniowe PRUDENTIAL.
            </p>
          </article>

          <article className={`${styles.articles} ${styles.bankArticle}`}>
            <h3>U nas oferty wszystkich Banków w jednym miejscu !</h3>
            <p>
              Zamiast chodzić po Bankach za ofertą kredytu, leasingu czy
              <br />
              hipoteki - zostaw to nam. W swojej ofercie posiadamy
              <br /> wszystkie Banki w Polsce - dlatego też specjalnie dla
              Ciebie
              <br /> przygotujemy najkorzystniejszą ofertę. Ty czas wolny
              spędzisz
              <br /> z rodziną i przyjaciółmi a my w tym czasie będziemy dla
              Ciebie
              <br /> ciężko pracować !
            </p>
          </article>
          <img
            src={bankLogo}
            alt="bank logos"
            className={`${styles.sectionImages} ${styles.bankLogo}`}
          />

          <img
            src={carImage}
            alt="car logos"
            className={`${styles.sectionImages} ${styles.carImage}`}
          />
          <article className={`${styles.articles} ${styles.carArticle}`}>
            <h3>Poczuj zapach szczęścia w nowym aucie.</h3>
            <p>
              Masz dość jeżdżenia po mechanikach ze swoim używanym
              <br /> samochodem ? Wymień samochód na nowy wraz z<br /> RW
              Finance. W naszej ofercie znajdziesz pełną gamę <br />
              samochodów osobowych i nie tylko, w atrakcyjnych formach
              <br /> finansowania - leasing, kredyt lub najem długoterminowy.
            </p>
          </article>
        </article>
      </section>
    </>
  );
}

export default Offer;
