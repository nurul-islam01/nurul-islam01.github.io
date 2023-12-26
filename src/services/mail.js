const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  secure: true,
  port: 465,
  auth: {
    user: process.env.EMAIL || 'hello@nurulislam.dev',
    pass: process.env.PASSWORD || 'sultan@20'
  }
});

exports.sendMail = (body) => {
  const { subject = '', email, name = '', message = '' } = body;

  return transporter.sendMail({
    from: process.env.EMAIL || 'hello@nurulislam.dev',
    to: 'nurul.islam@nurulislam.dev,nurul.islam3f@gmail.com',
    subject: `${subject} from ${email}`,
    text: message
  });
};
