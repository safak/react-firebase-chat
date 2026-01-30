const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
  connectionLimit: 10,
  queueLimit: 0,
  charset: "utf8mb4",
  waitForConnections: true, // Corrected from waitForConnection
  acquireTimeout: 60000, // Corrected, but this is for mysql2/promise, not always needed
});

// Log new connections
pool.on("connection", (connection) => {
  console.log(`New connection established with id ${connection.threadId}`);
});

// Handle errors
pool.on("error", (err) => {
  console.error("Database error:", err);
  if (err.code === "PROTOCOL_CONNECTION_LOST") {
    console.log("Attempting to reconnect...");
    // mysql2 handles reconnection automatically with pooling
  } else {
    throw err;
  }
});

module.exports = pool;
