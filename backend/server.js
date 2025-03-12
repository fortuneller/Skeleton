console.log("🔍 Entered server.js"); // Debugging log

const dotenv = require("dotenv");
dotenv.config();

console.log("✅ Environment variables loaded"); // Debug log

const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  console.error("❌ MONGO_URI is missing from .env file");
  process.exit(1); // Stop execution if MONGO_URI is missing
}

mongoose
.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1);
  });


const express = require("express");

console.log("✅ Express loaded"); // Confirm Express is loaded

const app = express();
const cors = require("cors");

app.use(express.json()); // Enable JSON parsing
app.use(cors()); // Enable Cross-Origin Resource Sharing

console.log("✅ Middleware loaded"); // Confirm middleware is working
const contactRoutes = require("./routes/contactRoutes");
app.use("/api/contacts", contactRoutes);

const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);


console.log("✅ Express app created"); // Confirm Express app is created

app.get("/", (req, res) => {
  res.send("🚀 Server is alive!");
});

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
//