import { css } from "@emotion/react";

export default function News() {
  return (
    <>
      <section>
        <h1 id="news">News</h1>
        <ol css={newsStyle}>
          <li>
            <span>2022/04/30</span>
            <a
              href="https://camp-fire.jp/projects/view/550881"
              target="_blank"
              rel="noreferrer"
            >
              クラウドファウンディング
              CAMPFIREにて「RINDA」が目標金額を170%達成いたしました。
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
`;
