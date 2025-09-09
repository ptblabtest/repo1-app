import { Router } from "express";
import reportRoutes from "@/modules/Report/ReportRoutes";
import reportCategoryRoutes from "@/modules/ReportCategory/ReportCategoryRoutes";
import reportPermissionRoutes from "@/modules/ReportPermission/ReportPermissionRoutes";
import { requireRole } from "@shared/middlewares/auth";

const router = Router();
// extensions
router.use(`/reports`, reportRoutes);
router.use(`/report-categories`, requireRole(2), reportCategoryRoutes);
router.use(requireRole(2), reportPermissionRoutes);

export default router;
