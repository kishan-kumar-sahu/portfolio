// const nodemailer = require("nodemailer");

// const sendMail = async (name, email, message) => {
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   await transporter.sendMail({
//     from: process.env.EMAIL,
//     to: process.env.EMAIL, // tumhara hi mail
//     subject: "📩 New Client Message",
//     text: `
// Name: ${name}
// Email: ${email}
// Message: ${message}
//     `,
//   });
// };

// module.exports = sendMail;






          //

const nodemailer = require("nodemailer");

const sendMail = async (name, email, message) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  // SMTP test (VERY IMPORTANT)
  await transporter.verify();
  console.log("SMTP connected ✅");

  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.EMAIL}>`,
    to: "anotheremail@gmail.com", // ✅ DIFFERENT EMAIL
    subject: "📩 New Client Message",
    text: `
Name: ${name}
Email: ${email}
Message: ${message}
    `,
  });

  console.log("Mail sent ✅");
};

module.exports = sendMail;


