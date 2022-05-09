import { css } from "@emotion/react";

export default function News() {
  return (
    <>
      <section>
        <h1 id="news">News</h1>
        <ol css={newsStyle}>
          <li>
            <span>2022/04/30</span>
            <div>
              <a
                href="https://camp-fire.jp/projects/view/550881"
                target="_blank"
                rel="noreferrer"
              >
                クラウドファウンディング
                CAMPFIREにて「RINDA」が目標金額を170%達成いたしました。
              </a>
            </div>
          </li>
        </ol>
      </section>
    </>
  );
}

const newsStyle = css`
  width: 760px;
  margin: 0 auto;

  > li {
    span {
      margin-left: 35px;
    }

    + li {
      margin-top: 16px;
    }
  }
`;
