import type { NextPage } from "next";
import { css } from "@emotion/react";
import tokens from "../components/DesignTokens";
import Head from "next/head";
import Header from "../components/Header";
import Products from "../components/Products";
import News from "../components/News";
import Company from "../components/Company";
import Members from "../components/Members";
import Footer from "../components/Footer";

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
        <Footer />
      </main>
    </>
  );
};

export default Home;

const layoutStyle = css`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 32px 0 64px;

  @media (max-width: ${tokens.siteWidth.mobile}) {
    width: 100%;
    padding: 22px 0 34px;
  }
`;
