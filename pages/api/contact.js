const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
  auth: {
    api_key: process.env.MAILGUN_APIKEY,
    domain: 'itamarcohen.dev',
  },
};

const nodemailerMailgun = nodemailer.createTransport(mailGun(auth));

export default function handle(req, res) {
  const {
    message, email, lastName, firstName,
  } = req.body;

  const mailOptions = {
    sender: firstName,
    from: 'mail@itamarcohen.dev',
    to: ['email@gmail.com'],
    subject: 'New Contact from your Portfolio!',
    html: `<b>From: ${firstName} ${lastName}</b>
             <br />    
             <b>Email: ${email}</b>
             <br />
             <br />
             <b>Message: ${message}</b>`,
  };

  nodemailerMailgun.sendMail(
    mailOptions, (err, data) => {
      if (err) {
        res.status(500).json({ message: 'Failed to send message, try again.' });
        console.log(`Error: ${err}`);
      } else {
        res.status(200).json({ message: 'Message sent, thank you.' });
        console.log(`Response: ${data}`);
      }
    },
  );
}
