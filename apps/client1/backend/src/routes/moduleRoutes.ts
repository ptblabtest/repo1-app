import { Router } from "express";
import leadRoutes from "@/modules/Lead/LeadRoutes";
import opportunityRoutes from "@/modules/Opportunity/OpportunityRoutes";
import clientRoutes from "@/modules/Client/ClientRoutes";
import activityRoutes from "@/modules/Activity/ActivityRoutes";
import budgetRoutes from "@/modules/Budget/BudgetRoutes";
import contractRoutes from "@/modules/Contract/ContractRoutes";
import expenseRoutes from "@/modules/Expense/ExpenseRoutes";
import fundRoutes from "@/modules/Fund/FundRoutes";
import milestoneRoutes from "@/modules/Milestone/MilestoneRoutes";
import noteRoutes from "@/modules/Note/NoteRoutes";
import paymentRoutes from "@/modules/Payment/PaymentRoutes";
import productRoutes from "@/modules/Product/ProductRoutes";
import projectRoutes from "@/modules/Project/ProjectRoutes";
import costTypeRoutes from "@/modules/CostType/CostTypeRoutes";
import quoteRoutes from "@/modules/Quote/QuoteRoutes";
import stageRoutes from "@/modules/Stage/StageRoutes";
import vendorRoutes from "@/modules/Vendor/VendorRoutes";
import selectRoutes from "@/modules/_extensions/select/SelectRoutes";
import taskRoutes from "@/modules/Task/TaskRoutes";

// import excelRoutes from "@/features/_extensions/excel/ExcelRoutes"; // Uncomment if Excel routes are implemented

const router = Router();
// extensions
// router.use(excelRoutes); // Uncomment if Excel routes are implemented
router.use(selectRoutes);

router.use(leadRoutes);
router.use(opportunityRoutes);
router.use(clientRoutes);
router.use(activityRoutes);
router.use(budgetRoutes);
router.use(contractRoutes);
router.use(expenseRoutes);
router.use(fundRoutes);
router.use(milestoneRoutes);
router.use(noteRoutes);
router.use(paymentRoutes);
router.use(productRoutes);
router.use(projectRoutes);
router.use(costTypeRoutes);
router.use(quoteRoutes);
router.use(stageRoutes);
router.use(vendorRoutes);
router.use(taskRoutes);

export default router;
