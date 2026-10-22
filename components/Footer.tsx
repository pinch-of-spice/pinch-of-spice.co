import { css } from "@emotion/react";
import tokens from "./DesignTokens";

export default function Footer() {
  return (
    <footer css={footerStyle}>
      <p>Copyright© Pinch of Spice LLC. All Rights Reserved</p>
    </footer>
  );
}

const footerStyle = css`
  margin-top: 64px;

  p {
    text-align: center;
    padding: 0 20px;
  }

  @media (max-width: ${tokens.siteWidth.mobile}) {
    margin-top: 34px;
  }
`;
