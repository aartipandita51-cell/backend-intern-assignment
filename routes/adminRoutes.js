const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");
const { adminOnly } = require("../middlewares/roleMiddleware");

router.get("/dashboard", protect, adminOnly, (req, res) => {
  res.json({ message: "Welcome Admin" });
});

module.exports = router;
