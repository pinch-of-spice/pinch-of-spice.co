import { css } from "@emotion/react";
import tokens from "../components/DesignTokens";

export default function News() {
  return (
    <>
      <section>
        <h1 id="news">News</h1>
        <ol css={newsStyle}>
          <li>
            <span>2023/04/15~16</span>
            <a
              href="https://www.featuredprojects.jp/"
              target="_blank"
              rel="noreferrer"
            >
              ポップアップストア「「KRAFTS&Co.
              GARAGE」（東京都目黒区）内のカフェにてRINDAの提供が決定しました。
            </a>
          </li>
          <li>
            <span>2023/04/08~09</span>
            <a
              href="https://www.featuredprojects.jp/"
              target="_blank"
              rel="noreferrer"
            >
              イベント「Featured Projects
              2023」（東京都港区）にてRINDAの出店が決定しました。
            </a>
          </li>
          <li>
            <span>2022/08/25</span>
            <a
              href="https://smartbank.connpass.com/event/254271/"
              target="_blank"
              rel="noreferrer"
            >
              スマートバンク社主催「DESIGN HOOKS
              #1」にて、RINDAのデザインについて倉光と出口が話しました。
            </a>
          </li>
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
