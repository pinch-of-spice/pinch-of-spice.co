import { css } from "@emotion/react";
import tokens from "./DesignTokens";

export default function Company() {
  return (
    <section>
      <h1 id="company">Company</h1>
      <dl css={companyStyle}>
        <div>
          <dt>会社名</dt>
          <dd>Pinch of Spice合同会社（ピンチオブスパイス合同会社）</dd>
        </div>
        <div>
          <dt>所在地</dt>
          <dd>奈良県大和郡山市南郡山町527番13号</dd>
        </div>
        <div>
          <dt>設立</dt>
          <dd>2021年10月</dd>
        </div>
        <div>
          <dt>事業内容</dt>
          <dd>食品・飲料の企画、開発、販売</dd>
        </div>
      </dl>
    </section>
  );
}

const companyStyle = css`
  dt {
    width: 100px;
  }

  > div {
    display: flex;

    & + div {
      margin-top: 16px;
    }
  }

  dt {
    width: 100px;
    margin-right: 32px;
  }
`;
