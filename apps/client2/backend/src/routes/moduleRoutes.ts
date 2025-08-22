import { Router } from "express";
import selectRoutes from "@/modules/_extensions/select/SelectRoutes";
import reportRoutes from "@/modules/Report/ReportRoutes";

// import excelRoutes from "@/features/_extensions/excel/ExcelRoutes"; // Uncomment if Excel routes are implemented

const router = Router();
// extensions
router.use(reportRoutes);
router.use(selectRoutes);



export default router;
