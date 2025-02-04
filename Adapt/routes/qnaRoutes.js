const express = require("express");
const { verifyToken } = require("../middlewares/authMiddleware");

const router = express.Router();

// Checking for protection of route
router.get("/", verifyToken, (req, res) => {
  res.json({ message: "QnA Route Working!", user: req.user });
});

module.exports = router;
