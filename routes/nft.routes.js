// src/routes/nft.routes.js
const express = require('express');
const router = express.Router();
const { storeNftData, getNftDataById, getNftGallery } = require('../controllers/nft.controller');

// Store NFT Data
router.post('/', storeNftData);

// Get NFT Data by ID
router.get('/:id', getNftDataById);

// Get NFT Gallery
router.get('/gallery/:walletAddress', getNftGallery);

module.exports = router;
