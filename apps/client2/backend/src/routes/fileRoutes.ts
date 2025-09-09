import { Router } from "express";
import { requireAuth, requireOrg } from "@shared/middlewares/auth";
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
            createdById: true,
            categoryId: true,
          },
        },
      },
    });

    if (!file) {
      return res.status(404).json({ message: "File not found" });
    }

    // Check role-based permissions first
    if (!(await checkFilePermissions(req.user, file, "view"))) {
      return res.status(403).json({ message: "Access denied" });
    }

    // Build full file path
    const filePath = path.join(process.cwd(), file.path);

    // Check if file exists on disk
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ message: "File not found on server" });
    }

    // Set headers for download
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${file.filename}"`
    );
    if (file.mimeType) {
      res.setHeader("Content-Type", file.mimeType);
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
            organizationId: true,
            categoryId: true,
          },
        },
      },
    });

    if (!file) {
      return res.status(404).json({ message: "File not found" });
    }

    // Check role-based permissions
    if (!(await checkFilePermissions(req.user, file, "view"))) {
      return res.status(403).json({ message: "Access denied" });
    }

    const filePath = path.join(process.cwd(), file.path);

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ message: "File not found on server" });
    }

    // Set headers for viewing (inline)
    res.setHeader("Content-Disposition", `inline; filename="${file.filename}"`);
    if (file.mimeType) {
      res.setHeader("Content-Type", file.mimeType);
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
            organizationId: true,
            categoryId: true,
          },
        },
      },
    });

    if (!file) {
      return res.status(404).json({ message: "File not found" });
    }

    // Check role-based permissions
    if (!(await checkFilePermissions(req.user, file, "delete"))) {
      return res.status(403).json({ message: "Access denied" });
    }

    // Additional check: only creator can delete (unless superadmin/manager)
    if (req.user.role.level > 2 && file.report?.createdById !== req.user.id) {
      return res
        .status(403)
        .json({ message: "Only the creator can delete this file" });
    }

    // Delete physical file
    const filePath = path.join(process.cwd(), file.path);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    // Delete from database
    await prisma.file.delete({
      where: { id: fileId },
    });

    res.status(200).json({ message: "File deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export default router;

// Helper function to check role-based permissions
const checkFilePermissions = async (user: any, file: any, action: string) => {
  // Level 1-2: Always allowed
  if (user.role.level <= 2) return true;

  // Level 4: Limited access
  if (user.role.level === 4 && action === "delete") return false;

  // For files associated with reports, check report permissions
  if (file.report) {
    // Level 3: Check organization
    if (
      user.role.level === 3 &&
      file.report.organizationId !== user.organizationId
    ) {
      return false;
    }

    // Level 3-4: Check category permissions
    if (file.report.categoryId) {
      const hasPermission = await prisma.userPermission.findFirst({
        where: {
          userId: user.id,
          permission: {
            resource: `report:category:${file.report.categoryId}`,
            action: action === "delete" ? "create" : "view",
          },
        },
      });
      return !!hasPermission;
    }
  }

  return true;
};
