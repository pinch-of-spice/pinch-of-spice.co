import { css } from "@emotion/react";
import tokens from "./DesignTokens";
import Image from "next/image";

export default function Products() {
  return (
    <section>
      <h1 id="product">Product</h1>
      <article css={productStyle}>
        <Image
          src="/rinda.jpg"
          width={302}
          height={302}
          alt="RINDA"
          css={{ borderRadius: "16px" }}
        />
        <div>
          <span>クラフトビネガードリンク</span>
          <h2>RINDA</h2>
          <p>
            奈良の製薬メーカーとコラボレーションしたクラフトビネガードリンクです。クラウドファウンディングでは目標金額を開始32時間で達成。総勢250人以上の支援者を集めました。
          </p>
          <ul>
            <li>
              <a
                href="https://camp-fire.jp/projects/view/550881"
                target="_blank"
                rel="noreferrer"
              >
                CAMPFIREを見る
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
                  width={32}
                  height={32}
                  alt="Instagram"
                />
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
  border-radius: 32px;
  background: ${tokens.colors.black};
  color: ${tokens.colors.white};

  > div {
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
      justify-content: space-between;

      li {
        background: rgba(196, 196, 196, 0.1);
        border-radius: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;

        &:hover {
          opacity: 0.8;
          cursor: pointer;
        }

        a {
          padding: 6px 15px;
        }

        &:last-child {
          border-radius: 50%;
          width: 48px;
          height: 48px;

          a {
            padding: 0;
          }
        }
      }
    }
  }
`;
