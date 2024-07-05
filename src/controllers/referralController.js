const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { sendReferralEmail } = require('../utils/emailUtils');

const createReferral = async (req, res) => {
  const { referrerName, referrerEmail, refereeName, refereeEmail } = req.body;
  console.log("Received referral data:", req.body);

  try {
    const referral = await prisma.referral.create({
      data: {
        referrerName,
        referrerEmail,
        refereeName,
        refereeEmail,
      },
    });

    console.log("Referral created:", referral);

    await sendReferralEmail(referrerName, referrerEmail, refereeName, refereeEmail);

    console.log("Referral email sent");

    res.status(200).json({ message: 'Referral created successfully', referral });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating referral', error: error.message });
  }
};

module.exports = { createReferral };
