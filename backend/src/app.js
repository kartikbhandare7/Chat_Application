const express = require("express");
const cors = require("cors");

const messageRoutes = require("./routes/MessageRoutes");
const errorHandler = require("./middleware/ErrorMiddleware");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/messages", messageRoutes);
app.use(errorHandler);

module.exports = app;
