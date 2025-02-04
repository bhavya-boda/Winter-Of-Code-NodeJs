require("dotenv").config(); // Load environment variables
const express = require("express");
const mongoose = require("mongoose");

const authRoutes = require("./routes/authRoutes");
const qnaRoutes = require("./routes/qnaRoutes");
const sharedResourcesRoutes = require("./routes/sharedResourcesRoutes");
const lostFoundRoutes = require("./routes/lostFoundRoutes");
const importantMailsRoutes = require("./routes/importantMailsRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Parse JSON request body

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/qna", qnaRoutes);
app.use("/api/shared-resources", sharedResourcesRoutes);
app.use("/api/lost-found", lostFoundRoutes);
app.use("/api/important-mails", importantMailsRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});