import { Router } from "express";
import { requireAuth, requireOrg } from "@shared/shared/middlewares/auth";
import prisma from "@shared/lib/prisma";
import path from "path";
import fs from "fs";

const router = Router();

// Download file by ID
router.get("/files/:id/download", requireAuth, async (req: any, res: any) => {
  try {
    const fileId = req.params.id;
    
    // Get file from database
    const file = await prisma.file.findUnique({
      where: { id: fileId },
      include: {
        report: {
          select: {
            organizationId: true,
            createdById: true
          }
        }
      }
    });
    
    if (!file) {
      return res.status(404).json({ message: "File not found" });
    }
    
    // Optional: Check permissions
    if (file.report) {
      // Check if user has access to this report's organization
      if (file.report.organizationId && file.report.organizationId !== req.user.organizationId) {
        return res.status(403).json({ message: "Access denied" });
      }
    }
    
    // Build full file path
    const filePath = path.join(process.cwd(), file.path);
    
    // Check if file exists on disk
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ message: "File not found on server" });
    }
    
    // Set headers for download
    res.setHeader('Content-Disposition', `attachment; filename="${file.filename}"`);
    if (file.mimeType) {
      res.setHeader('Content-Type', file.mimeType);
    }
    
    // Stream the file
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
    
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// View file (opens in browser if supported)
router.get("/files/:id/preview", requireAuth, async (req: any, res: any) => {
  try {
    const fileId = req.params.id;
    
    // Get file from database
    const file = await prisma.file.findUnique({
      where: { id: fileId },
      include: {
        report: {
          select: {
            organizationId: true
          }
        }
      }
    });
    
    if (!file) {
      return res.status(404).json({ message: "File not found" });
    }
    
    // Check permissions (same as download)
    if (file.report && file.report.organizationId !== req.user.organizationId) {
      return res.status(403).json({ message: "Access denied" });
    }
    
    const filePath = path.join(process.cwd(), file.path);
    
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ message: "File not found on server" });
    }
    
    // Set headers for viewing (inline)
    res.setHeader('Content-Disposition', `inline; filename="${file.filename}"`);
    if (file.mimeType) {
      res.setHeader('Content-Type', file.mimeType);
    }
    
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
    
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// Delete file
router.delete("/files/:id", requireAuth, async (req: any, res: any) => {
  try {
    const fileId = req.params.id;
    
    // Get file from database
    const file = await prisma.file.findUnique({
      where: { id: fileId },
      include: {
        report: {
          select: {
            createdById: true,
            organizationId: true
          }
        }
      }
    });
    
    if (!file) {
      return res.status(404).json({ message: "File not found" });
    }
    
    // Check permissions - only creator or admin can delete
    if (file.report && file.report.createdById !== req.user.id) {
      return res.status(403).json({ message: "Only the creator can delete this file" });
    }
    
    // Delete physical file
    const filePath = path.join(process.cwd(), file.path);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
    
    // Delete from database
    await prisma.file.delete({
      where: { id: fileId }
    });
    
    res.status(200).json({ message: "File deleted successfully" });
    
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export default router;