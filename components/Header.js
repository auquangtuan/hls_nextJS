import React from "react";
import Image from 'next/image'
import logo from "../public/logo.png";
import avatar from "../public/avatar.png";
import styles from "@/styles/Header.module.scss";
import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter()
  return (
    <header className={styles.header}>
      <Image className={styles.logo} src={logo} alt="logo" onClick={()=>router.push("/")}/>
      <div className={styles.header__right}>
        <div className={styles.header__right__info}>
          <span className={styles.header__right__info__handicrafted}>
            Handicrafted by
          </span>
          <span className={styles.header__right__info__name}>Jim HLS</span>
        </div>
        <Image
          className={styles.header__right__avatar}
          src={avatar}
          alt="avatar"
        />
      </div>
    </header>
  );
};

export default Header;
