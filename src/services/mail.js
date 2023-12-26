'use strict';
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  secure: true,
  port: 465,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

exports.sendMail = (body) => {
  const { subject = '', email, name = '', message = '' } = body;

  return transporter.sendMail({
    from: email,
    to: 'nurul.islam@nurulislam.dev, nurul.islam3f@gmail.com',
    subject: subject,
    text: message,
    html: `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Email from ${email}</title>
            </head>
            <body style="font-family: Arial, sans-serif;">
                <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                    <h1>${subject}</h1>
                    <p>Hello,</p>
            
                    <p>${message}</p>
            
                    <p>Regards,<br>
                    Your Name</p>
            
                </div>
            
            </body>
            </html>`
  });
};
