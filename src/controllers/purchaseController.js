// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();

// const completePurchase = async (req, res) => {
//   const { referralId, purchaseAmount } = req.body;

//   console.log("Received purchase data:", req.body);

//   try {
//     const referral = await prisma.referral.update({
//       where: { id: referralId },
//       data: { status: 'completed', purchaseAmount: purchaseAmount },
//     });

//     console.log("Purchase completed:", referral);

//     res.status(200).json({ message: 'Purchase completed successfully', referral });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error completing purchase', error: error.message });
//   }
// };

// module.exports = { completePurchase };
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const completePurchase = async (req, res) => {
  const { referralId, purchaseAmount } = req.body;

  console.log("Received purchase data:", req.body);

  try {
    // Update this line to match the new schema
    const referral = await prisma.referral.update({
      where: { id: referralId },
      data: { status: 'completed' }  // Removed purchaseAmount from here
    });

    console.log("Purchase completed:", referral);

    // Logic to add bonus to referrer can be added here

    res.status(200).json({ message: 'Purchase completed successfully', referral });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error completing purchase', error: error.message });
  }
};

module.exports = { completePurchase };
