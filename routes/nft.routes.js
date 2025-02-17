// src/routes/nft.routes.js
const express = require("express");
const router = express.Router();
const { storeNftData, getNftDataById, getNftGallery } = require("../controllers/nft.controller");

/**
 * @swagger
 * /api/nft:
 *   post:
 *     summary: Store NFT Data
 *     description: Saves NFT details to the database.
 *     tags: [NFT]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nftId:
 *                 type: number
 *                 example: 1
 *               name:
 *                 type: string
 *                 example: "CryptoArt"
 *               description:
 *                 type: string
 *                 example: "A rare digital artwork"
 *               logoUrl:
 *                 type: string
 *                 example: "https://example.com/image.png"
 *               userWalletAddress:
 *                 type: string
 *                 example: "0x1234567890abcdef"
 *     responses:
 *       201:
 *         description: NFT stored successfully
 *       500:
 *         description: Internal server error
 */
router.post("/", storeNftData);

/**
 * @swagger
 * /api/nft/{id}:
 *   get:
 *     summary: Get NFT Data by ID
 *     description: Retrieves NFT data based on its ID.
 *     tags: [NFT]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *         example: 1
 *     responses:
 *       200:
 *         description: NFT data retrieved successfully
 *       404:
 *         description: NFT not found
 *       500:
 *         description: Internal server error
 */
router.get("/:id", getNftDataById);

/**
 * @swagger
 * /api/nft/gallery/{walletAddress}:
 *   get:
 *     summary: Get NFT Gallery
 *     description: Retrieves all NFTs associated with a given wallet address.
 *     tags: [NFT]
 *     parameters:
 *       - in: path
 *         name: walletAddress
 *         required: true
 *         schema:
 *           type: string
 *         example: "0x1234567890abcdef"
 *     responses:
 *       200:
 *         description: List of NFTs retrieved successfully
 *       500:
 *         description: Internal server error
 */
router.get("/gallery/:walletAddress", getNftGallery);

module.exports = router;
