import styles from "./Copyright.module.css";

function Copyright() {
  return (
    <div className={styles.copyright}>
      <p className={styles.copyrightParagraph}>
        © Copyright 2023. All Rights Reserved. MAWALTRADE Maciej Walentynowicz
      </p>
    </div>
  );
}

export default Copyright;
