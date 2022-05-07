import type { NextPage } from "next";
import { css } from "@emotion/react";
import tokens from "../components/DesignTokens";
import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Contact from "../components/Contact";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pinch of Spice LLC. | ピンチオブスパイス合同会社</title>
      </Head>

      <main css={layoutStyle}>
        <Header />
        <Main />
        <Contact />
      </main>
    </>
  );
};

export default Home;

const layoutStyle = css`
  width: ${tokens.siteWidth.pc};
  margin: 0 auto;
  padding: 32px 0;
`;
