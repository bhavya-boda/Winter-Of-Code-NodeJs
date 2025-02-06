const express = require("express");
const { verifyToken, checkRole } = require("../middlewares/authMiddleware");
const { addMail, deleteMail } = require("../controllers/mailController");

const router = express.Router();

// Only admins can add important mails
router.post("/", verifyToken, checkRole("Admin"), addMail);

// Only admins can delete mails
router.delete("/:id", verifyToken, checkRole("Admin"), deleteMail);

module.exports = router;
