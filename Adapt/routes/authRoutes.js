const express = require("express");
const { signup, login } = require("../controllers/authController");
const { validateSignup, validateLogin } = require("../middlewares/validators");

const router = express.Router();

// Signup route
router.post("/signup", validateSignup, signup);

// Login route
router.post("/login", validateLogin, login);

module.exports = router;
