// backend/routes/songs.js
const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ message: "Songs route is working!" });
});

module.exports = router;
