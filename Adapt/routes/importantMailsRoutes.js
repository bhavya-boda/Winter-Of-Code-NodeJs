const express = require("express");
const router = express.Router();

// Testing route for Important Mails section
router.get("/", (req, res) => {
  res.json({ message: "Important Mails Route Working!" });
});

module.exports = router;
