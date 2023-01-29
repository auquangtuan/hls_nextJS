import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import styles from "@/styles/Layout.module.scss";
import Head from "next/head";
const Layout = ({ children }) => {
  return (
    <>
    <Head>
      <title>Joke TEST HLS</title>
      <meta name="keywords" content="hls"></meta>
    </Head>
    <div className={styles.HomePage}>
      <Header />
      {children}
      <Footer />
    </div>
    </>
  );
};

export default Layout;
