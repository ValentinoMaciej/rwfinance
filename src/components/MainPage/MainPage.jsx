import styles from "./MainPage.module.css";
import WhiteLogoNoBG from "../LogoImage/WhiteLogoNoBG.svg";
import carImage from "../MainPage/SectionImage/carImage.webp";
import familyImage from "../MainPage/SectionImage/familyImage.webp";
import houseImage from "../MainPage/SectionImage/houseImage.webp";
import doctorImage from "../MainPage/SectionImage/doctorImage.webp";
import Contact from "../Contact/Contact";

function MainPage() {
  return (
    <>
      <section>
        <div className={styles.mainSection}>
          <img
            src={WhiteLogoNoBG}
            alt="logo of company"
            className={styles.mainLogo}
          />
          <p>RW Finance - Ty oczekujesz,</p>
          <p> my spełniamy oczekiwania !</p>
        </div>
      </section>
      <section className={styles.articlesSection}>
        <p className={styles.articleTitle}>
          Ty zlecasz zadanie - my je wykonujemy.
        </p>
        <div className={styles.mainArticle}>
          <div className={styles.divFlex}>
            <article className={styles.articleStyling}>
              <p className={styles.pTitle}>
                Ubezpieczenia - najlepiej i najtaniej
              </p>
              <p>
                W naszej ofercie znajdują się największe i <br /> najlepsze
                Towarzystwa Ubezpieczeniowe - Ty
                <br /> chcesz najlepszą ofertę - my ją Tobie
                <br />
                przedstawiamy!
              </p>
            </article>

            <article className={styles.articleStyling}>
              <p className={styles.pTitle}>Kredyty - spełnij swoje marzenia</p>
              <p>
                Współpracujemy od lat z Bankami w Polsce
                <br /> - nie trać czasu na bieganie po Bankach - my
                <br /> przedstawimy Ci ofertę najlepszych z nich.
              </p>
            </article>
            <article className={styles.articleStyling}>
              <p className={styles.pTitle}>Leasingi - auta z salonu od ręki</p>
              <p>
                Czekasz na auto ? U nas auto prosto z salonu,
                <br /> zarówno leasingi jak i najem
                <br /> długoterminowy. Duży wybór marek
                <br /> samochodów na korzystnych rabatach.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className={styles.gallerySection}>
        <p className={styles.galleryTitle}>
          Zadbaj o siebie, rodzinę i swoją przyszłość !
        </p>
        <div className={styles.gallery}>
          <figure className={styles.pic1}>
            <img src={carImage} alt="cars" className={styles.sectionImages} />
          </figure>
          <figure className={styles.pic2}>
            <img
              src={familyImage}
              alt="father holding kids"
              className={styles.sectionImages}
            />
          </figure>
          <figure className={styles.pic3}>
            <img
              src={houseImage}
              alt="house on fire"
              className={styles.sectionImages}
            />
          </figure>
          <figure className={styles.pic4}>
            <img
              src={doctorImage}
              alt="doctors instrument"
              className={styles.sectionImages}
            />
          </figure>
        </div>
      </section>
    </>
  );
}

export default MainPage;
