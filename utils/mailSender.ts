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
  port: 2525,
  secure: true,
};

export default async function sendEmail(payload: SendMailOptions) {
  const transporter = nodemailder.createTransport({
    // @ts-ignore
    ...smtp,
    // @ts-ignore
    auth: {
      user: smtp.user,
      pass: smtp.pass,
    },
  });
  try {
    await new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify(function (error, success) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log("Server is ready to take our messages");
          resolve(success);
        }
      });
    });
    let response = true;
    await new Promise((resolve, reject) => {
      transporter.sendMail(payload, (err, info) => {
        if (err) {
          console.log({ err });
          reject(err);
        } else {
          console.log({ info });
          resolve(info);
        }
      });
    });
    return response;
  } catch (error: any) {
    return false;
  }
}
