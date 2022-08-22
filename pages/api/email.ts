// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

type Status = {
  status: string
}

interface Data {
  to: string,
  from: string,
  subject: string,
  text: string,
  html: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Status>
) {
  const body = JSON.parse(req.body);
  console.log(body);

  const message: string = `
    Name: ${body.name}\n
    Email: ${body.email}\n
    Message: ${body.message}
  `;

const data: Data = {
  to: 'neiljohnson92@gmail.com', // Change to your recipient
  from: 'hello@neiljohnson.dev', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: message,
  html: message.replace(/\n/g, '<br>'),
}

sgMail
  .send(data)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error: Error) => {
    console.error(error)
  })

  res.status(200).json({ status: 'Ok' })
}
