const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
  auth: {
    api_key: process.env.MAILGUN_APIKEY,
    domain: process.env.MAILGUN_DOMAIN,
  },
};

const nodemailerMailgun = nodemailer.createTransport(mailGun(auth));

export default function handle(req, res) {
  const {
    message, email, name,
  } = req.body;

  const mailOptions = {
    sender: name,
    from: email,
    to: ['mail@itamardev.com'],
    subject: 'New Contact from your Portfolio!',
    html: `<div style="text-align: left;">
             <b>From: ${name}</b>
             <br />    
             <b>Email: ${email}</b>
             <br />
             <br />
             <b>Message: ${message}</b>
           </div>`,
  };

  nodemailerMailgun.sendMail(
    mailOptions, (err, data) => {
      if (err) {
        res.status(500).json({ message: 'Failed to send message, try again.' });
        res.end();
        console.log(`Error: ${JSON.stringify(err)}`);
      } else {
        res.status(200).json({ message: 'Message sent, thank you.' });
        res.end();
        console.log(`Response: ${JSON.stringify(data)}`);
      }
    },
  );
}
