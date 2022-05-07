import { css } from "@emotion/react";
import Link from "next/link";
import tokens from "./DesignTokens";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <nav css={navStyle}>
        <Link href="/">
          <Image
            src="/poc.svg"
            width={184}
            height={29}
            alt="pinch of spice logo"
          />
        </Link>
        <ul>
          <li>Product</li>
          <li>News</li>
          <li>Company</li>
          <li>Member</li>
          <li>Contact</li>
        </ul>
      </nav>
      <section css={heroStyle}>
        <Image src="/main.jpg" width={1024} height={609} alt="eyecatch" />
        <h1>
          まるでひとつまみの
          <br />
          スパイスのように。
        </h1>
        <p>
          ピンチオブスパイス合同会社は
          <br />
          日常にいろどりを加える
          <br />
          商品を企画しています。
        </p>
      </section>
    </header>
  );
}

const navStyle = css`
  display: flex;
  justify-content: space-between;

  ul {
    display: flex;
    list-style: none;

    li {
      margin-left: 24px;
    }
  }
`;
const heroStyle = css`
  margin: 32px 0;
`;
