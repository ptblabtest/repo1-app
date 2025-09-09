import prisma from "@shared/lib/prisma";
import { reportPermissionService } from "./ReportPermissionService";
import { Router } from "express";

const router = Router();

router.post("/assign-reports", async (req, res, next) => {
  try {
    const { userId, permissions } = req.body;

    if (!userId || !Array.isArray(permissions)) {
      return res.status(400).json({
        error: "userId and permissions array are required",
      });
    }

    // Check user role level
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        role: {
          select: { level: true },
        },
      },
    });

    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    if (user.role.level <= 2) {
      return res.status(400).json({
        error: "User with role level 2 or below does not need permissions",
      });
    }

    const result = await reportPermissionService.bulkReplaceByCategories(
      userId,
      permissions
    );

    res.json(result);
  } catch (error) {
    next(error);
  }
});

export default router;
