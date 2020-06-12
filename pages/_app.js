import Head from "next/head";
import React, {Component} from 'react'
import GlobalStyles from "../components/GlobalStyles.js";

export default ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>CrowdMOT</title>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Arvo&display=swap" rel="stylesheet"/>
      </Head>
      <GlobalStyles>
        <Component {...pageProps} />
      </GlobalStyles>
    </>
  );
};