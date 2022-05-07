import { css } from "@emotion/react";
import Link from "next/link";
import tokens from "./DesignTokens";
import Image from "next/image";
//@ts-ignore
import { Link as Scroll } from "react-scroll";

export default function Header() {
  return (
    <header>
      <nav css={navStyle}>
        <Link href="/">
          <a>
            <Image
              src="/poc.svg"
              width={184}
              height={29}
              alt="pinch of spice logo"
            />
          </a>
        </Link>
        <ul>
          <li>
            <Scroll to="product" smooth>
              Product
            </Scroll>
          </li>
          <li>
            <Scroll to="news" smooth>
              News
            </Scroll>
          </li>
          <li>
            <Scroll to="company" smooth>
              Company
            </Scroll>
          </li>
          <li>
            <Scroll to="member" smooth>
              Member
            </Scroll>
          </li>
          <li>
            <Scroll to="contact" smooth>
              Contact
            </Scroll>
          </li>
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

      a {
        cursor: pointer;
      }
    }
  }
`;
const heroStyle = css`
  margin: 32px 0;
`;
