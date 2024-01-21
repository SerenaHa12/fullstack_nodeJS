const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", // host của mail server
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "dhchsgs12@gmail.com",
    pass: "ngjg ezuh baab rstn",
  },
});

const sendMail = async (to, subject, message) => {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Ha Chi 👻" <dhchsgs12@gmail.com>', // sender address
    to, // list of receivers
    subject, // Subject line
    html: message, // html body
  });
  return info;

  //   console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
};

module.exports = sendMail;
