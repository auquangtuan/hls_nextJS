import React from "react";
import styles from "@/styles/ThisJoke.module.scss";
const ThisJoke = ({ content }) => {
  return <p className={styles.ThisJoke}>{content}</p>;
};

export default ThisJoke;
