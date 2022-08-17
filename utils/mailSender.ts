import nodemailder, { SendMailOptions } from "nodemailer";

type Smtp = {
  user: string;
  host: string;
  pass: string;
  port: string | number;
  secure: boolean;
};

const smtp: Smtp = {
  host: process.env.NEXT_PUBLIC_SMTP_HOST!,
  user: process.env.NEXT_PUBLIC_SMTP_USER!,
  pass: process.env.NEXT_PUBLIC_SMTP_PASS!,
  port: 587,
  secure: true,
};

const transporter = nodemailder.createTransport({
  // @ts-ignore
  ...smtp,
  // @ts-ignore
  auth: {
    user: smtp.user,
    pass: smtp.pass,
  },
});

export default async function sendEmail(payload: SendMailOptions) {
  console.log(transporter);
  try {
    let response = true;
    await transporter.sendMail(payload, (err, info) => {
      if (err) {
        console.log({ err });
        response = false;
      } else {
        console.log({ info });
        response = true;
      }
    });
    return response;
  } catch (error: any) {
    return false;
  }
}
