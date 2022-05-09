import { css } from "@emotion/react";
import tokens from "./DesignTokens";

export default function Contact() {
  return (
    <>
      <section css={sectionStyle}>
        <h1 id="contact">Contact</h1>
        <p>
          商品の取り扱いや取材については、こちらからお問い合わせください。
          <br />
          3営業日以内に返信いたします。
        </p>

        <form
          method="POST"
          name="contact-form"
          action="contact/?success=true"
          data-netlify="true"
          css={formStyle}
        >
          <label htmlFor="name">お名前</label>
          <input
            id="name"
            name="name"
            required
            type="text"
            placeholder="林田 幸一"
          />
          <label htmlFor="company">会社名</label>
          <input
            id="company"
            name="company"
            required
            type="text"
            placeholder="Pinch of Spice合同会社"
          />
          <label htmlFor="email">メールアドレス</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="info@pinch-of-spice.co"
          />
          <label htmlFor="message">お問い合わせ内容</label>
          <textarea id="message" name="message" rows={8} required></textarea>
          <button type="submit">送信する</button>
        </form>
      </section>
      <footer css={footerStyle}>
        <p>Copyright© Pinch of Spice LLC. All Rights Reserved</p>
      </footer>
    </>
  );
}

const sectionStyle = css`
  background: ${tokens.colors.white};
  margin: 0 calc(50% - 50vw);

  h1 {
    margin-bottom: 16px;
  }

  p {
    text-align: center;
    margin-bottom: 32px;
  }
`;

const formStyle = css`
  display: flex;
  flex-direction: column;
  width: 756px;
  margin: 0 auto;

  label,
  input,
  textarea,
  button {
    display: block;
    width: 100%;
  }

  label {
    margin-bottom: 8px;
  }

  input,
  textarea {
    margin-bottom: 32px;
    background: ${tokens.colors.ivory};
    padding: 16px;
    border-radius: 4px;

    &::placeholder {
      color: rgba(140, 3, 3, 0.4);
    }
  }

  button {
    background: ${tokens.colors.azuki};
    border-radius: 16px;
    color: ${tokens.colors.white};
    font-weight: bold;
    padding: 16px 32px;
  }
`;

const footerStyle = css`
  margin-top: 64px;

  p {
    text-align: center;
  }
`;
