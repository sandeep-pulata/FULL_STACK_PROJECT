// routes/auth.js
import express from "express";
const router = express.Router();

// Example login endpoint
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Dummy validation for demonstration purposes
  if (username === "admin" && password === "password") {
    return res.status(200).json({ message: "Login successful!" });
  } else {
    return res.status(401).json({ message: "Invalid credentials!" });
  }
});

export default router; // Ensure you have this line at the end to export the router
