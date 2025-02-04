const express = require("express");
const router = express.Router();

// Testing route for Shared Resources section
router.get("/", (req, res) => {
  res.json({ message: "Shared Resources Route Working!" });
});

module.exports = router;
