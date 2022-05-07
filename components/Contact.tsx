import { css } from "@emotion/react";
import tokens from "./DesignTokens";

export default function Contact() {
  return (
    <section css={sectionStyle}>
      <h1>Contact</h1>
      <p>
        商品の取り扱いや取材については、こちらからお問い合わせください。3営業日以内に返信いたします。
      </p>

      <form
        method="POST"
        name="contact-form"
        action="contact/?success=true"
        data-netlify="true"
        css={formStyle}
      >
        <label htmlFor="name">お名前</label>
        <input id="name" name="name" required type="text" />
        <label htmlFor="company">会社名</label>
        <input id="company" name="company" required type="text" />
        <label htmlFor="email">メールアドレス</label>
        <input id="email" type="email" name="email" required />
        <label htmlFor="message">お問い合わせ内容</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">送信する</button>
      </form>
    </section>
  );
}

const sectionStyle = css`
  p {
    font-size: 16px;
  }
`;

const formStyle = css`
  display: flex;
  flex-direction: column;

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

  input {
    margin-bottom: 32px;
  }

  button {
    background: ${tokens.colors.azuki};
  }
`;
