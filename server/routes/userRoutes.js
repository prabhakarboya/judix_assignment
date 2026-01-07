const express = require("express");
const router = express.Router();
const {
  registerUser,
  authUser,
  getUserProfile,
  updateUserProfile
} = require("../controllers/userController");

const { protect } = require("../middleware/auth");

// Public routes
router.post("/signup", registerUser);
router.post("/login", authUser);

// Protected routes
router.get("/profile", protect, getUserProfile);
router.put("/profile", protect, updateUserProfile);

module.exports = router;
