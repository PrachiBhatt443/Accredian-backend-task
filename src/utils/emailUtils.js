const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendReferralEmail = async (referrerName, referrerEmail, refereeName, refereeEmail) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: refereeEmail,
    subject: 'You have been referred!',
    text: `${referrerName} has referred you to our platform. Click the link below to check out our courses: \n\nhttp://localhost:3000`,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendReferralEmail };
