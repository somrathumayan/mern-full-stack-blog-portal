const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const sampleRoutes = require("./routes/sampleRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use("/", sampleRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port", PORT));
