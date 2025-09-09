import { Router } from "express";
import { reportService } from "./ReportService";
import { upload } from "@shared/config/multer";
import { saveFilesToDatabase } from "@shared/middlewares/files";

const router = Router();

// GET all reports
router.get("/", async (req, res) => {
  try {
    const reports = await reportService.findMany(req.query, req.user);
    res.json(reports);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// GET single report
router.get("/:id", async (req, res) => {
  try {
    const report = await reportService.findUnique(req.params.id, req.user);
    if (!report) {
      return res.status(404).json({ error: "Report not found" });
    }
    res.json(report);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// In your POST route, add logging:
router.post(
  "/",
  upload.single("file"),
  saveFilesToDatabase("reportId"),
  async (req: any, res) => {
    try {
      // Debug logging
      console.log("=== REQUEST DEBUG ===");
      console.log("Headers:", req.headers);
      console.log("Body:", req.body);
      console.log("File:", req.file);
      console.log("===================");

      // Check if file was uploaded
      if (!req.file) {
        return res.status(400).json({ error: "File is required" });
      }

      // Log the data being sent to service
      console.log("Data to service:", req.body);
      console.log("User:", req.user);

      // Temporarily convert single file to array for middleware
      req.files = [req.file];
      const report = await reportService.create(req.body, req.user);

      // Save file to database
      const files = await req.saveFiles(report.id);
      res.status(201).json({ ...report, files });
    } catch (error: any) {
      console.error("Error creating report:", error);
      res.status(400).json({ error: error.message });
    }
  }
);

// POST create multiple reports with files
router.post(
  "/bulk",
  upload.array("files"),
  saveFilesToDatabase("reportId"),
  async (req: any, res) => {
    try {
      const reportsData = JSON.parse(req.body.reports);
      
      if (!req.files || req.files.length !== reportsData.length) {
        return res.status(400).json({
          error: `Number of files (${req.files?.length || 0}) must match number of reports (${reportsData.length})`,
        });
      }
      
      const results = [];
      const originalFiles = [...req.files]; // Store original files array
      
      for (let i = 0; i < reportsData.length; i++) {
        const report = await reportService.create(reportsData[i], req.user);
        
        // Set files to single file for this iteration
        req.files = [originalFiles[i]];
        const files = await req.saveFiles(report.id);
        
        results.push({ ...report, files });
      }
      
      res.status(201).json(results);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
);

export default router;
