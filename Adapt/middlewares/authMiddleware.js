const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Access Denied." });
  }

  try {
    const verified = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
    req.user = verified; // Attach user info to request
    next(); // Proceed to the next middleware or route
  } catch (error) {
    res.status(403).json({ message: "Invalid or expired Token" });
  }
};

// Middleware to check user role
const checkRole = (role) => {
  return (req, res, next) => {
    if (!req.user || req.user.role !== role) {
      return res.status(403).json({ message: "Access Denied. Insufficient permissions." });
    }
    next();
  };
};

module.exports = { verifyToken, checkRole };
