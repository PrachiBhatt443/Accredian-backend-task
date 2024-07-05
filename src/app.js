require('dotenv').config();
const express = require('express');
const cors = require('cors');
const referralRoutes = require('./routes/referralRoutes');
const purchaseRoutes = require('./routes/purchaseRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/referral', referralRoutes);  // This should be correct
app.use('/purchase', purchaseRoutes);  // This should be correct

module.exports = app;
