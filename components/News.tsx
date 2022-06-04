import { css } from "@emotion/react";
import tokens from "../components/DesignTokens";

export default function News() {
  return (
    <>
      <section>
        <h1 id="news">News</h1>
        <ol css={newsStyle}>
          <li>
            <span>2022/06/01</span>
            <a
              href="https://www.sendenkaigi.com/books/back-number-brain/detail.php?id=27849"
              target="_blank"
              rel="noreferrer"
            >
              月間ブレーン7月号「今月のブックマーク」にて、RINDAが掲載されました。
            </a>
          </li>
          <li>
            <span>2022/04/30</span>
            <a
              href="https://camp-fire.jp/projects/view/550881"
              target="_blank"
              rel="noreferrer"
            >
              クラウドファウンディング
              「CAMPFIRE」にて、RINDAが目標金額を170%達成いたしました。
            </a>
          </li>
          <li>
            <span>2022/03/18</span>
            <a
              href="https://resize.fm/ep/72-vinegar-drink-rinda"
              target="_blank"
              rel="noreferrer"
            >
              ポッドキャスト「resize.fm」にて、RINDAのデザインについて出口と倉光が話しました。
            </a>
          </li>
        </ol>
      </section>
    </>
  );
}

const newsStyle = css`
  margin: 0 auto;

  > li {
    span {
      margin-right: 40px;
      opacity: 0.6;
    }

    + li {
      margin-top: 16px;
    }
  }

  a {
    &:hover {
      text-decoration: underline;
    }
  }
  @media (max-width: ${tokens.siteWidth.mobile}) {
    > li {
      span {
        display: block;
        margin-bottom: 4px;
      }
    }
  }
`;
