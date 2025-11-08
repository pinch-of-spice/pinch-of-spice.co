import { css } from "@emotion/react";
import tokens from "./DesignTokens";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  inquiryType: string;
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
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<Inputs>();

  const inquiryType = watch("inquiryType");
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact-form", ...data }),
    })
      .then(() => {
        console.log("Success!");
      })
      .catch((error) => {
        console.log(error);
        alert("エラーが発生しました。リロード後、再度お試しください。");
      });
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
              RINDAの取り扱いや取材については、こちらからお問い合わせください。営業のお問い合わせは対応しておりません。
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
                {errors.email?.type === "pattern" && (
                  <span>*無効なメールアドレスです</span>
                )}
              </label>
              <input
                id="email"
                type="email"
                placeholder="info@pinch-of-spice.co"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              <label htmlFor="inquiryType">
                種別
                {errors.inquiryType?.type === "required" && (
                  <span>*この項目は必須です</span>
                )}
              </label>
              <select
                id="inquiryType"
                {...register("inquiryType", { required: true })}
                style={{
                  color:
                    !inquiryType || inquiryType === ""
                      ? "rgba(140, 3, 3, 0.4)"
                      : undefined,
                }}
              >
                <option value="">選択してください</option>
                <option value="product">取材・商品問い合せ</option>
                <option value="sales">営業</option>
              </select>
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
              <button
                type="submit"
                disabled={isSubmitting || inquiryType === "sales"}
              >
                {isSubmitting
                  ? "送信中"
                  : inquiryType === "sales"
                  ? "営業のお問い合わせは受け付けておりません"
                  : "送信する"}
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
  max-width: none;

  h1 {
    margin-bottom: 16px;
  }

  p {
    text-align: center;
    margin-bottom: 32px;

    span {
      display: block;
    }
  }

  @media (max-width: ${tokens.siteWidth.mobile}) {
    margin: 0;

    p span {
      display: inline-block;
    }
  }
`;

const formStyle = css`
  display: flex;
  flex-direction: column;
  width: 756px;
  margin: 0 auto;

  label,
  input,
  select,
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
  select,
  textarea {
    margin-bottom: 32px;
    background: ${tokens.colors.ivory};
    padding: 16px;
    border-radius: 4px;

    &::placeholder {
      color: rgba(140, 3, 3, 0.4);
    }
  }

  select {
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3e%3cpath fill='%238C0303' d='M6 8.5L1.5 3h9z'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 16px center;
    padding-right: 40px;

    &:invalid,
    &[value=""] {
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
      background: #cccccc;
    }
  }

  @media (max-width: ${tokens.siteWidth.mobile}) {
    width: 100%;
  }
`;

const footerStyle = css`
  margin-top: 64px;

  p {
    text-align: center;
    padding: 0 20px;
  }

  @media (max-width: ${tokens.siteWidth.mobile}) {
    margin-top: 34px;
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
