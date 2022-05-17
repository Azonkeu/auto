import React from "react";
import styles from "../../styles/footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <a href="/" className={styles.aut}>
        © 2022 Automarket Nigeria Ltd. All rights reserved.
      </a>
      <a href="/" className={styles.careers}>
        Careers
      </a>
      <a href="/" className={styles.terms}>
        Terms of Use
      </a>
      <a href="/" className={styles.terms}>
        Privacy Policy
      </a>
      <a href="/" className={styles.terms}>
        Cookie Policy
      </a>
      <span className={styles.spa}></span>
      <div className={styles.icon}>
        <a href="/" className={styles.img}>
          <img
            src="/facebook-bran.svg"
            alt="facebook icon"
            className={styles.image}
          />
        </a>
        <a href="/" className={styles.img}>
          <img
            src="/instagram-square-brands.svg"
            alt="Instagram icon"
            className={styles.image}
          />
        </a>
        <a href="/" className={styles.img}>
          <img
            src="/twitter-brands.svg"
            alt="Twitter icon"
            className={styles.image}
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
