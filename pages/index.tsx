import type { NextPage } from "next";
import { css } from "@emotion/react";
import tokens from "../components/DesignTokens";
import Head from "next/head";
import Header from "../components/Header";
import Products from "../components/Products";
import News from "../components/News";
import Company from "../components/Company";
import Members from "../components/Members";
import Contact from "../components/Contact";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pinch of Spice LLC. | ピンチオブスパイス</title>
      </Head>

      <main css={layoutStyle}>
        <Header />
        <Products />
        <News />
        <Company />
        <Members />
        <Contact />
      </main>
    </>
  );
};

export default Home;

const layoutStyle = css`
  width: ${tokens.siteWidth.pc};
  margin: 0 auto;
  padding: 32px 0 64px;
`;
