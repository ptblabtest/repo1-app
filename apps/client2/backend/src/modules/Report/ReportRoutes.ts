import { Router } from "express";
import {
  requireAuth,
  requireOrg,
  requireRoleOrPermission,
} from "@shared/shared/middlewares/auth";
import { upload } from "@shared/config/multer";
import { ReportService } from "./ReportService";
import { saveFilesToDatabase } from "@shared/shared/middlewares/files";
import prisma from "@shared/lib/prisma";
import path from "path";
import fs from "fs";
import { requireReportCategoryPermission, requireReportPermission } from "@/middleware/report";

const router = Router();

// Report routes
const reportPath = "/reports";
const reportService = ReportService.report;

// Get all reports
router.get(
  reportPath,
  requireAuth,
  requireReportPermission("read", 2),
  async (req: any, res: any) => {
    const { mode, categoryId, ...queryParams } = req.query;

    // Build where clause
    const where: any = {};
    if (categoryId) {
      where.categoryId = categoryId;
    }

    // Merge with existing where from queryParams if any
    const finalQuery = {
      ...queryParams,
      where: {
        ...queryParams.where,
        ...where,
      },
    };

    const records = await reportService.findMany(finalQuery);
    res.json({
      data: records,
      meta: { total: records.length },
    });
  }
);

// Get single report
router.get(`${reportPath}/:id`, requireAuth, async (req: any, res: any) => {
  const id = req.params.id;
  const record = await reportService.findUnique(id);
  if (record) {
    res.json({ data: record });
  } else {
    res.status(404).json({ message: "Report not found" });
  }
});

// Create report
router.post(
  reportPath,
  requireAuth,
  upload.single("file"),
  requireReportPermission("create", 2),
  saveFilesToDatabase("reportId"),
  async (req: any, res: any) => {
    try {
      // Create report first (without files)
      const record = await reportService.create(req.body, req.user);

      if (req.file) {
        req.files = [req.file];
        await req.saveFiles(record.id);
      }

      // Fetch the complete record with files
      const completeRecord = await reportService.findUnique(record.id);

      res.status(201).json({
        message: "Report created successfully",
        data: completeRecord,
      });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
);

// Update report
router.patch(
  `${reportPath}/:id`,
  requireAuth,
  upload.single("file"),
  requireReportPermission("update", 2),
  saveFilesToDatabase("reportId"),
  async (req: any, res: any) => {
    try {
      const reportId = req.params.id;

      // Update report data
      const record = await reportService.update(req.body, reportId, req.user);

      // If new file uploaded, delete old and save new
      if (req.file) {
        // Delete old file(s)
        const oldFiles = await prisma.file.findMany({
          where: { reportId },
        });

        for (const file of oldFiles) {
          const filePath = path.join(process.cwd(), file.path);
          if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
          }
        }

        await prisma.file.deleteMany({
          where: { reportId },
        });

        // Save new file
        req.files = [req.file]; // Convert for middleware
        await req.saveFiles(reportId);
      }

      // Fetch complete updated record
      const completeRecord = await reportService.findUnique(record.id);

      res.status(200).json({
        message: "Report updated successfully",
        data: completeRecord,
      });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
);

// Delete report
router.delete(`${reportPath}/:id`, requireAuth, async (req: any, res: any) => {
  await reportService.delete(req.params.id);
  res.status(200).json({
    message: "Report deleted successfully",
  });
});

// ReportCategory routes
const categoryPath = "/report-categories";
const categoryService = ReportService.category;

// Get all categories
router.get(
  categoryPath,
  requireAuth,
  requireReportCategoryPermission("read", 2),
  async (req: any, res: any) => {
    const { mode, ...queryParams } = req.query;
    const records = await categoryService.findMany(queryParams);
    res.json({
      data: records,
      meta: { total: records.length },
    });
  }
);

router.put(
  `${categoryPath}/upsert`,
  requireAuth,
  async (req: any, res: any) => {
    const records = await categoryService.upsert(req.body, req.user);
    res.status(200).json({
      message: "Categories updated successfully",
      data: records,
    });
  }
);

export default router;
