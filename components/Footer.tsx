import { css } from "@emotion/react";
import tokens from "./DesignTokens";

export default function Footer() {
  return (
    <footer css={footerStyle}>
      <p>
        お問い合わせは
        <a
          href="https://www.instagram.com/rinda.today"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        にお願いします。
      </p>
      <p>Copyright© Pinch of Spice LLC. All Rights Reserved</p>
    </footer>
  );
}

const footerStyle = css`
  margin-top: 64px;

  p {
    text-align: center;
    padding: 0 20px;

    + p {
      margin-top: 16px;
    }
  }

  a {
    text-decoration: underline;
    text-underline-offset: 0.2em;

    &:hover {
      color: ${tokens.colors.red};
    }
  }

  @media (max-width: ${tokens.siteWidth.mobile}) {
    margin-top: 34px;
  }
`;
