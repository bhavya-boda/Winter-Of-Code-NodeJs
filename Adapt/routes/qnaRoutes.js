const express = require("express");
const { verifyToken, checkRole  } = require("../middlewares/authMiddleware");
const { addOrRemoveCategory } = require("../controllers/qnaController");

const router = express.Router();

// Only admins can create categories
router.post("/category", verifyToken, checkRole("Admin"), addOrRemoveCategory);

module.exports = router;