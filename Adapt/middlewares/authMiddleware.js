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
    res.status(400).json({ message: "Invalid Token" });
  }
};

module.exports = { verifyToken };
