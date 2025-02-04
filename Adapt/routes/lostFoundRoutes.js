const express = require("express");
const router = express.Router();

// Testing route for Lost & Found section
router.get("/", (req, res) => {
  res.json({ message: "Lost & Found Route Working!" });
});

module.exports = router;