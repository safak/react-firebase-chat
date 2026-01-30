const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const db = require("./config/database");

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  })
);
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 1000,
  message: "Too many requests from this IP, please try again later.",
});
app.use("/api", limiter);

// Test database connection
db.getConnection((err, connection) => {
  if (err) {
    console.error("❌ Database connection failed:", err.message);
    console.error("Please check your .env file and MySQL server");
    process.exit(1);
  } else {
    console.log("✅ Connected to MySQL database");
    connection.release();
  }
});

// Import routes with error handling
let songsRoutes, artistsRoutes, usersRoutes;
try {
  songsRoutes = require("./routes/songs");
} catch (err) {
  console.error("❌ Failed to load songs routes:", err.message);
}
try {
  artistsRoutes = require("./routes/artists");
} catch (err) {
  console.error("❌ Failed to load artists routes:", err.message);
}
try {
  usersRoutes = require("./routes/user");
} catch (err) {
  console.error("❌ Failed to load users routes:", err.message);
}

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    message: "🎵 Lyrics Database API",
    version: "1.0.0",
    endpoints: {
      health: "/api/health",
      songs: songsRoutes ? "/api/songs" : "unavailable",
      artists: artistsRoutes ? "/api/artists" : "unavailable",
      users: usersRoutes ? "/api/users" : "unavailable",
    },
  });
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Lyrics API is running",
    timestamp: new Date().toISOString(),
    database: "connected",
  });
});

// API Routes
if (songsRoutes) app.use("/api/songs", songsRoutes);
if (artistsRoutes) app.use("/api/artists", artistsRoutes);
if (usersRoutes) app.use("/api/users", usersRoutes);

// Test endpoint
app.get("/test", (req, res) => {
  res.json({ message: "Server is working!" });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
    requestedUrl: req.originalUrl,
    method: req.method,
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("❌ Error:", err.stack);
  res.status(500).json({
    error: "Something went wrong!",
    message:
      process.env.NODE_ENV === "development"
        ? err.message
        : "Internal server error",
  });
});

// Start server
app.listen(PORT, () => {
  console.log("=================================");
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌐 API available at http://localhost:${PORT}/api`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
  console.log(`👤 Users API: http://localhost:${PORT}/api/users/test`);
  console.log(`👤 Users API: http://localhost:${PORT}/api/users/register`);

  console.log("=================================");
});
