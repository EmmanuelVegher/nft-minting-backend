# NFT Minting Backend

## Overview

This is the backend service for an **NFT Minting dApp**, handling blockchain interactions, NFT metadata storage, and user authentication. It provides RESTful APIs for minting, retrieving, and managing NFTs.

## Features

✅ Store NFT metadata in a database  
✅ Retrieve NFT details by ID  
✅ Fetch NFT gallery based on wallet address  
✅ Secure API with proper status codes and error handling  
✅ CORS and security middleware for safe API calls  

---

## **Project Structure**

nft-minting-backend/ ├─ package.json ├─ .env ├─ src/ │ ├─ config/ # Database configuration │ ├─ controllers/ # Business logic for API endpoints │ ├─ models/ # Database models │ ├─ routes/ # API routes │ ├─ server.js # Main server file └─ ...


---

## **Tech Stack**
- **Node.js** - JavaScript runtime  
- **Express.js** - Backend framework  
- **MongoDB + Mongoose** - Database for storing NFT data  
- **CORS, Morgan, Helmet** - Security & logging  
- **dotenv** - Environment variable management  

---

## **Installation**

### **1. Clone the Repository**

1. git clone https://github.com/EmmanuelVegher/nft-minting-backend.git
cd nft-minting-backend

2. Install Dependencies
npm install

3. Set Up Environment Variables
Create a .env file in the root directory and add the following:

PORT=4000
MONGO_URI="mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbName>?retryWrites=true&w=majority"

4. Run the Server
npm run dev
The backend will be available at http://localhost:4000.

API Endpoints
1. Store NFT Data
URL: POST /api/nft
Body Params:

{
  "nftId": 1,
  "name": "Cool NFT",
  "description": "An awesome NFT",
  "logoUrl": "https://example.com/nft.jpg",
  "userWalletAddress": "0x123..."
}
Response:
{
  "success": true,
  "message": "NFT stored successfully"
}

2. Get NFT by ID
URL: GET /api/nft/:id
Response (Success):

{
  "success": true,
  "data": {
    "nftId": 1,
    "name": "Cool NFT",
    "description": "An awesome NFT",
    "logoUrl": "https://example.com/nft.jpg",
    "userWalletAddress": "0x123..."
  }
}
Response (Not Found):
{
  "success": false,
  "message": "NFT not found"
}

3. Get NFT Gallery by Wallet Address
URL: GET /api/nft/gallery/:walletAddress
Response:
{
  "success": true,
  "data": [
    {
      "nftId": 1,
      "name": "Cool NFT",
      "description": "An awesome NFT",
      "logoUrl": "https://example.com/nft.jpg",
      "userWalletAddress": "0x123..."
    },
    {
      "nftId": 2,
      "name": "Another NFT",
      "description": "Another awesome NFT",
      "logoUrl": "https://example.com/nft2.jpg",
      "userWalletAddress": "0x123..."
    }
  ]
}

Deployment
Deployed API URL: https://your-api-domain.com
Frontend Repository: NFT Minting Frontend

npm run dev - Start development server
npm run start - Start production server

## License
This project is licensed under the MIT License.

🔥 Need Help?
Feel free to reach out if you have any questions or need support. 



Let me know if you need **modifications, additional details, or API documentation improvements**! 