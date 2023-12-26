const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const nodemailer = require('nodemailer');

const dev = process.env.NODE_ENV !== 'production';
const hostname = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true,
  auth: {
    user: 'hello@nurulislam.dev',
    pass: 'sultan@20'
  }
});

function sendMail(req, response) {
  const { name = '', email = '', subject = '', message = '' } = req.body || {};

  transporter
    .sendMail({
      from: 'hello@nurulislam.dev',
      to: 'nurul.islam@nurulislam.dev',
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    })
    .then((res) => response.status(200).send({ success: true, data: res }))
    .catch((err) => {
      response.status(500).send({ error: err });
    });
}

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;

      if (pathname === '/mail') {
        sendMail(req, res);
      } else {
        await handle(req, res, parsedUrl);
      }
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  })
    .once('error', (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on https://${hostname}:${port}`);
    });
});
