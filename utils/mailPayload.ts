type MailPayload = {
  from: string;
  subject: string;
  text: string;
  html: string;
  to: string;
};

export type InputMail = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function mailPayload({
  name,
  email,
  subject,
  message,
}: InputMail): MailPayload {
  return {
    from: process.env.NEXT_PUBLIC_SMTP_USER!,
    to: "mj.9601.portfolio@gmail.com",
    subject,
    text: message,
    html: `
    <div>
      <div
        style="
          height: 30px;
          padding: 5px 10px;
          font-size: 25px;
        "
      >
        Subject:
        <span style="color: rgb(0, 85, 255); font-size: 25px">${subject}</span>
      </div>
      <hr />
      <div style="height: 30px; padding: 5px 15px; font-size: 22px">
        From:
        <span style="color: blueviolet; font-size: 22px"
          >${name}
          <span style="font-size: 18px">[${email}]</span>
        </span>
      </div>
      <hr />
      <div style="padding: 0px 15px">
        <h3
          style="font-size: 25px; font-weight: 600; padding: 0 0; margin: 0 0"
        >
          Message:
        </h3>
        <p style="padding: 0 10px; font-size: 18px; margin-top: 4px">
         ${message}
        </p>
      </div>
    </div>
    `,
  };
}
