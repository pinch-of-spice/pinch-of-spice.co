import { css } from "@emotion/react";
import tokens from "./DesignTokens";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  company: string;
  email: string;
  message: string;
};

function encode(data: any) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    alert(JSON.stringify(data));
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data }),
    })
      .then(() => console.log("Success!"))
      .catch((error) => console.log(error));
  };

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
          onSubmit={handleSubmit(onSubmit)}
          data-netlify
          css={formStyle}
        >
          <label htmlFor="name">
            お名前
            {errors.name?.type === "required" && (
              <span>*この項目は必須です</span>
            )}
          </label>
          <input
            id="name"
            type="text"
            placeholder="林田 幸一"
            {...register("name", { required: true })}
          />
          <label htmlFor="company">
            会社名
            {errors.company?.type === "required" && (
              <span>*この項目は必須です</span>
            )}
          </label>
          <input
            id="company"
            type="text"
            placeholder="Pinch of Spice合同会社"
            {...register("company", { required: true })}
          />
          <label htmlFor="email">
            メールアドレス
            {errors.email?.type === "required" && (
              <span>*この項目は必須です</span>
            )}
          </label>
          <input
            id="email"
            type="email"
            placeholder="info@pinch-of-spice.co"
            {...register("email", { required: true })}
          />
          <label htmlFor="message">
            お問い合わせ内容
            {errors.message?.type === "required" && (
              <span>*この項目は必須です</span>
            )}
          </label>
          <textarea
            id="message"
            rows={8}
            {...register("message", { required: true })}
          ></textarea>
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

    span {
      margin-left: 8px;
      color: ${tokens.colors.red};
    }
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
