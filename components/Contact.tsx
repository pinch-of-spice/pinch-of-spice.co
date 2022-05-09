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
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact-form", ...data }),
    })
      .then(() => {
        console.log("Success!");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <section css={sectionStyle}>
        <h1 id="contact">Contact</h1>
        {isSubmitSuccessful ? (
          <div css={thanksStyle}>
            <h3>送信完了しました</h3>
            <p>
              お問い合わせありがとうございました。
              <br />
              内容を確認し、3営業日以内に
              <br />
              メールにて折り返しご連絡させていただきます。
            </p>
          </div>
        ) : (
          <>
            <p>
              商品の取り扱いや取材については、こちらからお問い合わせください。
              <br />
              3営業日以内に返信いたします。
            </p>
            <form
              method="POST"
              name="contact-form"
              onSubmit={handleSubmit(onSubmit)}
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
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "送信中" : "送信する"}
              </button>
            </form>
          </>
        )}
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
    border-radius: 16px;
    background: ${tokens.colors.azuki};
    color: ${tokens.colors.white};
    font-weight: bold;
    padding: 16px 32px;

    :disabled {
      background: ${tokens.colors.orange};
    }
  }
`;

const footerStyle = css`
  margin-top: 64px;

  p {
    text-align: center;
  }
`;

const thanksStyle = css`
  text-align: center;
  min-height: 730px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${tokens.colors.black};

  h3 {
    font-size: 32px;
    margin-bottom: 16px;
  }

  p {
    line-height: 1.8;
  }
`;
