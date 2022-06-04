import { css } from "@emotion/react";
import tokens from "./DesignTokens";
import Image from "next/image";

export default function Members() {
  return (
    <section>
      <h1 id="member">Members</h1>
      <ul css={memberStyle}>
        <li>
          <div css={memberCaptionStyle}>
            <Image
              src="/members/hayashida.jpg"
              width={200}
              height={200}
              alt="Koichi Hayashida"
              loading={"eager"}
              layout="responsive"
            />
            <h2>林田 幸一</h2>
            <span>Koichi Hayashida, Product Manager</span>
          </div>
          <p>
            クックパッド株式会社でのWEBディレクター、子会社での新規事業開発担当を経て、株式会社リクルートコミュニケーションズ(現：株式会社リクルート)で新規事業開発および国内・海外事業の戦略策定に従事。現在は家業の書店チェーンを承継。京都大学大学院修了。「RINDA」発起人。
          </p>
        </li>
        <li>
          <div css={memberCaptionStyle}>
            <Image
              src="/members/deguchi.jpg"
              width={200}
              height={200}
              alt="Takaya Deguchi"
              loading={"eager"}
              layout="responsive"
            />
            <h2>出口 貴也</h2>
            <span>Takaya Deguchi, Design Engineer</span>
          </div>
          <p>
            クックパッド株式会社にてデジタルプロダクトを多数立ち上げ後、コラボレーションSaaSのプロダクト責任者、HRTechスタートアップの取締役CXOを経て、現在はフリーランスとして活動。水風呂とビカクシダが好き。
          </p>
        </li>
        <li>
          <div css={memberCaptionStyle}>
            <Image
              src="/members/kuramitsu.jpg"
              width={200}
              height={200}
              alt="Miwa Kuramitsu"
              loading={"eager"}
              layout="responsive"
            />
            <h2>倉光 美和</h2>
            <span>Miwa Kuramitsu, Creative Director</span>
          </div>
          <p>
            デザインストラテジスト。株式会社カプコンなどで家庭用ゲームタイトルのUIデザインを複数担当したのち、クックパッド株式会社にてデザイナー統括マネージャー、デザイン戦略部の部長を経験。2022年に独立し、現在はKRAFTS&Co.合同会社代表。
          </p>
        </li>
        <li>
          <div css={memberCaptionStyle}>
            <Image
              src="/members/shika.jpg"
              width={200}
              height={200}
              alt="and more..."
              loading={"eager"}
              layout="responsive"
            />
            <h2>And more...</h2>
            <span>Coming soon</span>
          </div>
        </li>
      </ul>
    </section>
  );
}

const memberStyle = css`
  display: grid;
  grid-template-columns: repeat(2, 364px);
  column-gap: 32px;
  row-gap: 64px;

  p {
    line-height: 1.8;
    text-align: justify;
    margin-top: 18px;
  }

  @media (max-width: ${tokens.siteWidth.mobile}) {
    grid-template-columns: 100%;

    li {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      span {
        width: 100%;
      }
    }

    p {
      max-width: 390px;
    }
  }
`;

const memberCaptionStyle = css`
  width: 200px;
  color: ${tokens.colors.azuki};

  h2 {
    font-family: inherit;
    letter-spacing: normal;
    margin-top: 18px;
    font-size: 32px;
  }

  span {
    font-size: 12px;
    display: block;
  }

  @media (max-width: ${tokens.siteWidth.mobile}) {
    text-align: center;

    h2 {
      margin-top: 16px;
    }
  }
`;
