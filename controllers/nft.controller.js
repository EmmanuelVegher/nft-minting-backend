
const NFT = require('../models/NFT');

exports.storeNftData = async (req, res) => {
  try {
    const { nftId, name, description, logoUrl, userWalletAddress } = req.body;

    // Validate that nftId is a positive number
    if (!nftId || typeof nftId !== 'number' || isNaN(nftId)) {
      return res.status(400).json({ success: false, message: 'NFT ID is required and must be a valid number' });
    }

    // Check if nftId already exists in the database
    const existingNFT = await NFT.findOne({ nftId });
    if (existingNFT) {
      return res.status(400).json({ success: false, message: `NFT ID ${nftId} already exists` });
    }

    // Create new NFT entry
    const newNFT = new NFT({ nftId, name, description, logoUrl, userWalletAddress });
    await newNFT.save();

    return res.status(201).json({ success: true, message: 'NFT stored successfully' });
  } catch (error) {
    console.error('Error storing NFT data:', error);
    return res.status(500).json({ success: false, message: error.message || 'Internal server error' });
  }
};



exports.getNftDataById = async (req, res) => {
    try {
      const { id } = req.params;
      const nftData = await NFT.findOne({ nftId: id });
  
      if (!nftData) {
        return res.status(404).json({ success: false, message: 'NFT not found' });
      }
  
      return res.json({ success: true, data: nftData });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }
  };


  exports.getNftGallery = async (req, res) => {
    try {
      const { walletAddress } = req.params;
      const nftList = await NFT.find({ userWalletAddress: walletAddress });
  
      return res.json({ success: true, data: nftList });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }
  };
  
  

