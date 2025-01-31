const express = require("express");
const { signup } = require("../controllers/authController");
const { validateSignup } = require("../middlewares/validators");

const router = express.Router();

// Signup route
router.post("/signup", validateSignup, signup);

module.exports = router;
