import React from "react";
import styles from "@/styles/Footer.module.scss";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__content}>
        This website is created as part of Hlsolutions program. The materials
        contained on this website are provided for general information only and
        do not constitute any form of advice. HLS assumes no responsibility for
        the accuracy of any particular statement and accepts no liability for
        any loss or damage which may arise from reliance on the information
        contained on this site.
      </p>
      <span className={styles.footer__copyright}>Copyright 2021 HLS</span>
    </footer>
  );
};
export default Footer;
