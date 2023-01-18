import styles from "./Contact.module.css";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w8vwxgk",
        "template_u0zuym2",
        form.current,
        "qpmSdzPgHhjJyv3vt"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={styles.contactSection}>
      <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
        <label className={styles.formLabel}>Imię</label>
        <input
          type="text"
          name="user_name"
          className={`${styles.nameInput} ${styles.inputStyle}`}
        />
        <label className={styles.formLabel}>E-mail</label>
        <input
          type="email"
          name="user_email"
          className={`${styles.emailInput} ${styles.inputStyle}`}
        />
        <label className={styles.formLabel}>Wiadomość</label>
        <textarea
          name="message"
          className={`${styles.textarealInput} ${styles.inputStyle}`}
        />
        <input type="submit" value="Wyślij" className={styles.sendButton} />
      </form>
      <article className={styles.contactInformation}>
        <p className={styles.footerTitle}>RW FINANCE</p>
        <p>
          ul. Targowa 9, pokój 2.12 <br /> 66-400 Gorzów Wielkopolski <br />
          e-mail: biuro@rwfinance.pl <br /> tel. +48 791 422 959 / 511 903 003
        </p>
      </article>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2416.344561496972!2d15.242614615513654!3d52.725974528696845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47071fbecedc3359%3A0x777b9a49b32e1636!2sTargowa%209%2C%2066-400%20Gorz%C3%B3w%20Wielkopolski!5e0!3m2!1spl!2spl!4v1674054296121!5m2!1spl!2spl"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className={styles.mapGoogle}
      ></iframe>
    </div>
  );
};

export default Contact;
