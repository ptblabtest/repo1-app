import dotenv from "dotenv";
import passport from "passport";
import session from "express-session";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import authEmailRoutes from "@shared/routes/authEmailRoutes";
import sharedRoutes from "@shared/routes/sharedRoutes";
import moduleRoutes from "@/routes/moduleRoutes";
import { patchRouter } from "@shared/lib/async";
import { logger } from "@shared/lib/logger";
import prisma from "@shared/lib/prisma";
import { PrismaSessionStore } from "@shared/lib/sessionStore";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;
const NODE_ENV = process.env.NODE_ENV || "development";

const ENABLE_CONSOLE = process.env.ENABLE_CONSOLE !== "false";
const ENABLE_LOGGER = process.env.ENABLE_LOGGER !== "false";

const FRONTEND_URL =
  process.env.FRONTEND_URL ||
  (NODE_ENV === "production"
    ? (() => {
        throw new Error("FRONTEND_URL is required in production");
      })()
    : "http://localhost:3000");

if (!ENABLE_CONSOLE) {
  const noop = () => {};
  console.log = noop;
  console.error = noop;
  console.warn = noop;
  console.info = noop;
  console.debug = noop;
  console.table = noop;
}

if (!ENABLE_LOGGER) {
  const noop = () => {};
  logger.info = noop as any;
  logger.error = noop as any;
  logger.warn = noop as any;
  logger.http = noop as any;
  logger.debug = noop as any;
}

patchRouter();

if (NODE_ENV === "development") {
  process.on("uncaughtException", (error: any) => {
    logger.error("Uncaught Exception:", error);
  });

  process.on("unhandledRejection", (error: any) => {
    logger.error("Unhandled Rejection:", error);
  });
}

app.use(helmet());
app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.json());

app.use(
  session({
    secret:
      process.env.SESSION_SECRET ||
      (NODE_ENV === "production"
        ? (() => {
            throw new Error("SESSION_SECRET is required in production");
          })()
        : "dev-secret-key"),
    store: new PrismaSessionStore(),
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  morgan(NODE_ENV === "development" ? "dev" : "combined", {
    stream: {
      write: (message) => logger.http(message.trim()),
    },
  })
);

app.get("/", (_req, res) => {
  res.json({ message: "Welcome to your Express server!" });
});
app.use("/api/auth", authEmailRoutes);
app.use("/api", moduleRoutes);
app.use("/api", sharedRoutes);

app.use((_req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use(
  (
    err: Error,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction
  ) => {
    logger.error(`Unhandled error: ${err.stack}`);
    res.status(500).json({
      message:
        NODE_ENV === "production" ? "Internal Server Error" : err.message,
    });
  }
);

if (!process.env.DATABASE_URL) {
  logger.error("DATABASE_URL is not set in environment variables");
  process.exit(1);
}

(async () => {
  try {
    logger.info("Checking database connection...");
    await prisma.$connect();
    logger.info("Database connection successful.");

    app.listen(PORT, () => {
      logger.info(`Server is running in ${NODE_ENV} mode on port ${PORT}`);
    });

    logger.info("Running scheduler at app startup...");
  } catch (err) {
    logger.error("Failed to connect to the database:", err);
    process.exit(1);
  }
})();

process.on("SIGINT", async () => {
  logger.info("Received SIGINT. Cleaning up...");
  try {
    await prisma.$disconnect();
    logger.info("Prisma disconnected. Exiting process.");
  } catch (err) {
    logger.warn("Error during Prisma disconnect:", err);
  } finally {
    process.exit();
  }
});
