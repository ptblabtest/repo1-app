import { createLogger, format, transports } from "winston";
import path from "path";
import fs from "fs";

// Ensure logs directory exists
const logDir = path.join(process.cwd(), "logs");
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

// Define log format
const logFormat = format.combine(
  format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  format.printf(({ timestamp, level, message }) => `${timestamp} [${level.toUpperCase()}]: ${message}`)
);

// Create a logger instance
export const logger = createLogger({
  level: "info",
  format: logFormat,
  transports: [
    new transports.File({
      filename: path.join(logDir, "service.log"), // Save logs in /logs/service.log
      maxsize: 5 * 1024 * 1024, // 5MB limit per file
      maxFiles: 3, // Keep last 3 log files
    }),
    new transports.Console(), // Also log to console for debugging
  ],
});
