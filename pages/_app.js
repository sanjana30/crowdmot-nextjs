import Head from "next/head";
import React, {Component} from 'react'
import GlobalStyles from "../components/GlobalStyles.js";

export default ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>CrowdMOT</title>
      </Head>
      <GlobalStyles>
        <Component {...pageProps} />
      </GlobalStyles>
    </>
  );
};