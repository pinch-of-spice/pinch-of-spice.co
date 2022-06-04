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
              width={185}
              height={35}
              alt="pinch of spice logo"
              priority
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
        <div>
          <Image
            src="/copy.png"
            width={216}
            height={216}
            alt="まるでひとつまみのスパイスのように"
          />
        </div>
        <Scroll to="product" smooth css={downStyle}>
          <Image src="/down.svg" width={38} height={19} alt="scroll down" />
        </Scroll>
      </section>
      <p css={{ textAlign: "center" }}>
        ピンチオブスパイスは、日常にいろどりを加える商品を企画しています。
      </p>
    </header>
  );
}

const navStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;

  ul {
    display: flex;

    li {
      margin-left: 24px;

      a {
        cursor: pointer;
        display: block;
        position: relative;

        &::after {
          position: absolute;
          display: block;
          margin: 4px auto 0;
          width: 100%;
          height: 1px;
          background: ${tokens.colors.red};
          content: "";
          opacity: 0;
          transition: opacity 0.5s ease-out;
        }

        &:hover {
          color: ${tokens.colors.red};

          &::after {
            opacity: 1;
          }
        }
      }
    }
  }

  @media (max-width: ${tokens.siteWidth.mobile}) {
    padding: 0 10px;

    ul {
      display: none;
    }
  }
`;

const heroStyle = css`
  margin: 24px 0;
  position: relative;
  background-image: url("/main.jpg");
  background-size: cover;
  height: 0;
  padding-top: calc(609 / 1024 * 100%);

  > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (max-width: ${tokens.siteWidth.mobile}) {
    background-image: url("/main_sp.jpg");
    padding-top: calc(493 / 375 * 100%);

    > div {
      width: 160px;
      height: 160px;
    }
  }
`;

const downStyle = css`
  position: absolute;
  left: 50%;
  bottom: 40px;
  transform: translateX(-50%);
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
