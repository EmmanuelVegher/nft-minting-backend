
const mongoose = require('mongoose');

const NFTSchema = new mongoose.Schema({
  nftId: {
    type: Number,
    required: true,
    unique: true,
  },
  name: String,
  description: String,
  logoUrl: String,
  userWalletAddress: String,
});

module.exports = mongoose.model('NFT', NFTSchema);
