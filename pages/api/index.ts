// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import mailPayload, { InputMail } from "../../utils/mailPayload";
import sendEmail from "../../utils/mailSender";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    const payload = mailPayload(req.body);

    try {
      const response = await sendEmail(payload);
      console.log(response);

      return res.status(200).send(response);
    } catch (err: any) {
      return res.status(400).send(false);
    }
  }
}
