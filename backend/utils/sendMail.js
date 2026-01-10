const nodemailer = require("nodemailer");
require("dotenv").config();

const sendMail = async (name, userEmail, message) => {
  try {
    // SMTP transporter setup
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT),
      secure: false, // TLS for 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,      // Verified sender email
      to: process.env.TO_EMAIL,          // Tumhara personal email
      replyTo: userEmail,                 // User email from contact form
      subject: "📩 New Portfolio Contact Messageee",
      html: `
        <h3>New Message from Portfolio</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${userEmail}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    });

    console.log("✅ Email sent successfully");

  } catch (error) {
    console.error("❌ Email sending failed:", error.message);
  }
};

module.exports = sendMail;
