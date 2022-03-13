require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser")
const next = require("next");
const sendinblue = require("./api/sendinblue");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });

    server.use(bodyParser.json()).post('/api/email', (req, res) => {
      let sendSmtpEmail = {
        to: [{
          email: process.env.TO_EMAIL
        }],
        replyTo: {
          email: req.body.email
        },
        params: {
          name: req.body.name,
          email: req.body.email,
          subject: req.body.subject,
          msg: req.body.msg,
        },
        templateId: 3,
      };
      sendinblue(sendSmtpEmail)
      res.send('success');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
