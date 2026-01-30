const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");

const db = require("../config/database");

const router = express.Router();

// Register new user
router.post(
  "/register",
  [
    body("username")
      .isLength({ min: 3, max: 50 })
      .withMessage("Username must be between 3 and 50 characters")
      .matches(/^[a-zA-Z0-9_]+$/)
      .withMessage(
        "Username can only contain letters, numbers, and underscores"
      ),
    body("email")
      .isEmail()
      .normalizeEmail()
      .withMessage("Please provide a valid email"),
    body("password")
      .isLength({ min: 4 })
      .withMessage("Password must be at least 4 characters long"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    try {
      // Check if user already exists
      db.execute(
        "SELECT id FROM users WHERE username = ? OR email = ?",
        [username, email],
        async (err, results) => {
          if (err) {
            console.error("Database error:", err);
            return res
              .status(500)
              .json({ error: "Failed to check existing user" });
          }

          if (results.length > 0) {
            return res.status(409).json({
              error:
                "Account ejat lom2 nasem got hija namin le email beh chu khel tang o na melset chu",
            });
          }

          // Hash password
          const hashedPassword = await bcrypt.hash(password, 10);

          // Insert new user
          db.execute(
            "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
            [username, email, hashedPassword],
            (err, result) => {
              if (err) {
                console.error("Database error:", err);
                return res.status(500).json({ error: "Failed to create user" });
              }

              // Generate JWT Token
              const token = jwt.sign(
                { userId: result.insertId, username, email },
                process.env.JWT_SECRET,
                { expiresIn: "24h" }
              );

              res.status(201).json({
                message: "User registered successfully",
                token,
                user: {
                  id: result.insertId,
                  username,
                  email,
                },
              });
            }
          );
        }
      );
    } catch (error) {
      console.error("Registration error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

// Login user
router.post(
  "/login",
  [
    body("username").notEmpty().withMessage("Username is required"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;

    db.execute(
      "SELECT * FROM users WHERE username = ? OR email = ?",
      [username, username],
      async (err, results) => {
        if (err) {
          console.error("Database error:", err);
          return res.status(500).json({ error: "Failed to authenticate user" });
        }

        if (results.length === 0) {
          return res.status(401).json({ error: "Invalid credentials" });
        }

        const user = results[0];

        try {
          const isValidPassword = await bcrypt.compare(password, user.password);

          if (!isValidPassword) {
            return res.status(401).json({ error: "Invalid credentials" });
          }

          // Generate JWT token
          const token = jwt.sign(
            { userId: user.id, username: user.username, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "24h" }
          );

          res.json({
            message: "Login successful",
            token,
            user: {
              id: user.id,
              username: user.username,
              email: user.email,
            },
          });
        } catch (error) {
          console.error("Login error:", error);
          res.status(500).json({ error: "Internal server error" });
        }
      }
    );
  }
);

// Test endpoint
router.get("/test", (req, res) => {
  res.json({ message: "Users route is working!" });
});

module.exports = router;
