const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const { parseBody } = require('next/dist/server/api-utils/node/parse-body');

const dev = process.env.NODE_ENV !== 'production';
const hostname = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

const { sendMail } = require('./services/mail');

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;

      if (pathname === '/api/mail' && req.method === 'POST') {
        const body = await parseBody(req);
        sendMail(body)
          .then((data) => {
            console.log(data, 'success');
            res.statusCode = 200;
            res.end({ message: 'Mail send successfully', data });
          })
          .catch((err) => {
            console.log(err, 'failed');
            res.statusCode = 500;
            res.end('internal server error');
          });
        // await app.render(req, res, '/api/mail', query);
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
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
