// src/server.js
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Middleware
app.use(express.json());
app.use(require('cors')());
app.use(require('morgan')('dev'));
app.use(require('helmet')());

// Connect DB
connectDB();

// Routes
app.use('/api/nft', require('./routes/nft.routes'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
