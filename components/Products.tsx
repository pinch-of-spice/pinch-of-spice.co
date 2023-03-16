import { css } from "@emotion/react";
import tokens from "./DesignTokens";
import Image from "next/image";

export default function Products() {
  return (
    <section>
      <h1 id="product">Product</h1>
      <article css={productStyle}>
        <div>
          <Image
            src="/rinda.jpg"
            width={432}
            height={432}
            alt="RINDA"
            loading={"eager"}
            layout="responsive"
            objectFit={"cover"}
            priority
          />
        </div>
        <div css={productDescriptionStyle}>
          <span>クラフトビネガードリンク</span>
          <h2>RINDA</h2>
          <p>
            奈良の製薬メーカーとコラボレーションしたクラフトビネガードリンクです。クラウドファウンディングでは目標金額を開始32時間で達成。総勢250人以上の支援者を集めました。
          </p>
          <ul>
            <li>
              <a href="https://rinda.today/" target="_blank" rel="noreferrer">
                販売サイトを見る
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/rinda.today"
                target="_blank"
                rel="noreferrer"
                css={{ height: "32px" }}
              >
                <Image
                  src="/instagram.svg"
                  width={26}
                  height={26}
                  alt="Instagram"
                />
              </a>
            </li>
            <li>
              <a
                href="https://camp-fire.jp/projects/view/550881"
                target="_blank"
                rel="noreferrer"
                css={{ height: "32px" }}
              >
                <Image src="/web.svg" width={32} height={32} alt="Campfire" />
              </a>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
}

const productStyle = css`
  display: flex;
  padding: 24px;
  background: rgba(94, 2, 2, 1);
  box-shadow: 8px 8px 0px #e4d3d0;
  color: ${tokens.colors.white};

  > div {
    width: 302px;
  }

  @media (max-width: ${tokens.siteWidth.mobile}) {
    flex-direction: column;
    border-radius: 0;

    > div {
      width: 100%;
    }
  }
`;

const productDescriptionStyle = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 24px;

  h2 {
    margin: 12px 0 28px;
    font-size: 36px;
  }

  p {
    line-height: 1.8;
    text-align: justify;
  }

  ul {
    margin-top: auto;
    display: flex;
    justify-content: flex-end;

    li {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      transition: background 0.3s ease-out;

      &:hover {
        background: rgba(255, 255, 255, 0.12);
        cursor: pointer;
      }

      a {
        padding: 6px 15px;
      }

      &:nth-child(1) {
        margin-right: auto;
      }

      &:nth-child(2),
      &:nth-child(3) {
        border-radius: 50%;
        width: 48px;
        height: 48px;
        margin-left: 10px;

        a {
          padding: 0;
          display: flex;
          align-items: center;
        }
      }
    }
  }

  @media (max-width: ${tokens.siteWidth.mobile}) {
    margin-left: 0;
    margin-top: 20px;

    h2 {
      margin: 6px 0 14px;
    }

    ul {
      margin-top: 24px;
    }
  }
`;
