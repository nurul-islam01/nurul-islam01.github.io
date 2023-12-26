import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true,
  auth: {
    user: 'hello@nurulislam.dev',
    pass: 'sultan@20'
  }
});

export default async function handler(req, res) {
  if (!req.body) {
    return res.status(500).end();
  }

  const { name, email, subject, message } = req.body;

  try {
    const info = await transporter.sendMail({
      from: 'hello@nurulislam.dev',
      to: 'nurul.islam@nurulislam.dev',
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Error sending email' });
  }
}
