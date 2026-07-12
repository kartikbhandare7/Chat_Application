const express = require("express");
const cors = reqire("cors");

const messageRoutes = require("./routes/messageRoutes");
const errorHandler = require("./middleware/errorMiddleware");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/messages", messageRoutes);
app.use(errorHandler);

module.exports = app;