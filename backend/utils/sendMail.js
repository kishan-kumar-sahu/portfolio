const nodemailer = require("nodemailer");

const sendMail = async (name, email, message) => {
  const transporter = nodemailer.createTransport({
    // service: "gmail",
  host: "smtp.gmail.com",
  port: 587,        // TLS
  secure: false, 

    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL,
    to: process.env.EMAIL, // tumhara hi mail
    subject: "📩 New Client Message",
    text: `
Name: ${name}
Email: ${email}
Message: ${message}
    `,
  });
};

module.exports = sendMail;






