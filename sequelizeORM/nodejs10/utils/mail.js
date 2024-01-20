const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", //Host của mail server
  port: 465, //Cổng
  secure: true,
  auth: {
    user: "hoangan@f8team.dev", //Username
    pass: "ongu jiza ejkh mzaq", //Password
  },
});
const sendMail = async (to, subject, message) => {
  const info = await transporter.sendMail({
    from: '"F8 Education" <hoangan@f8team.dev>', // sender address
    to, // list of receivers
    subject, // Subject line
    html: message, // html body
  });
  return info;
};
module.exports = sendMail;
