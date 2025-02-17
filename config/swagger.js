
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "NFT Minting API",
      version: "1.0.0",
      description: "API for minting and retrieving NFT data",
      contact: {
        name: "Emmanuel Vegher",
        email: "vegher.emmanuel@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:4000",
        description: "Local Development Server",
      },
    ],
  },
  apis: ["./routes/nft.routes.js"], // Path to the API routes
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

const setupSwagger = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};

module.exports = setupSwagger;
