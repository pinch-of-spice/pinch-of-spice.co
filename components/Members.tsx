import { css } from "@emotion/react";
import tokens from "./DesignTokens";
import Image from "next/image";

export default function Members() {
  return (
    <section>
      <h1 id="member">Members</h1>
      <ul css={memberStyle}>
        <li>
          <Image
            src="/members/hayashida.png"
            width={364}
            height={246}
            alt="Koichi Hayashida"
          />
          <h2>林田 幸一</h2>
          <p>
            クックパッド株式会社でのWEBディレクター、子会社での新規事業開発担当を経て、株式会社リクルートコミュニケーションズ(現：株式会社リクルート)で新規事業開発および国内・海外事業の戦略策定に従事。現在は家業の書店チェーンを承継。京都大学大学院修了。「RINDA」発起人。
          </p>
        </li>
        <li>
          <Image
            src="/members/deguchi.png"
            width={364}
            height={246}
            alt="Takaya Deguchi"
          />
          <h2>出口 貴也</h2>
          <p>
            デザインエンジニア、プロダクトマネージャー。クックパッド株式会社にてデジタルプロダクトを多数立ち上げ後、SaaSスタートアップの取締役CXOを経て、現在はフリーランスとして活動。水風呂とビカクシダが好き。
          </p>
        </li>
        <li>
          <Image
            src="/members/kuramitsu.png"
            width={364}
            height={246}
            alt="Miwa Kuramitsu"
          />
          <h2>倉光 美和</h2>
          <p>
            デザインストラテジスト。株式会社カプコンなどで家庭用ゲームタイトルのUIデザインを複数担当したのち、クックパッド株式会社にてデザイナー統括マネージャー、デザイン戦略部の部長を経験。2022年に独立し、現在はKRAFTS&Co.合同会社代表。
          </p>
        </li>
        <li>
          <Image
            src="/members/sika.png"
            width={364}
            height={246}
            alt="and more..."
          />
          <h2>And more...</h2>
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

  h2 {
    color: ${tokens.colors.black};
    font-family: inherit;
    margin: 16px 0 8px;
    letter-spacing: normal;
  }

  p {
    line-height: 1.8;
    text-align: justify;
  }
`;
