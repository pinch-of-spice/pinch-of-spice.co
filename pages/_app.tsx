import type { AppProps } from "next/app";
import { Global, css } from "@emotion/react";
// @ts-ignore
import ress from "ress";
import tokens from "../components/DesignTokens";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

const globalStyle = css`
  ${ress}

  html,
  body {
    font-family: -apple-system, "Helvetica Neue", "游ゴシック体", YuGothic,
      "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック", "Yu Gothic",
      "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
    color: ${tokens.colors.azuki};
    background: ${tokens.colors.ivory};
  }

  h1,
  h2 {
    font-family: "Trykker", "Hiragino Mincho ProN", "Hiragino Mincho Pro",
      游明朝, "Yu Mincho", YuMincho, HGS明朝E, メイリオ, Meiryo, serif;
  }
`;
