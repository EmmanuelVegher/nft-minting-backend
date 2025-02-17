require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const setupSwagger = require("./config/swagger"); // Assuming you have a setupSwagger function

const app = express();

// Middleware
app.use(express.json());
app.use(require('cors')());
app.use(require('morgan')('dev'));
app.use(require('helmet')());

// Connect DB
connectDB();

// Swagger Setup
setupSwagger(app); // Initialize Swagger

// Routes
app.use('/api/nft', require('./routes/nft.routes'));

// Default Route to Check if Server is Running
app.get('/', (req, res) => {
  res.send("Welcome to the NFT API!");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
