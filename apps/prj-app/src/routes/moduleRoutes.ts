import { Router } from "express";
import {
  clientRouter,
  productRouter,
  vendorRouter,
} from "@/modules/master/MasterRoutes";
import pipelineRouter from "@/modules/crm/PipelineRoutes";
import {
  budgetRouter,
  costTypeRouter,
  expenseRouter,
  fundRouter,
} from "@/modules/acc/AccRoutes";
import { eventRouter, noteRouter } from "@/modules/ext/ExtRoutes";
import {
  projectRouter,
  milestoneRouter,
  taskRouter,
} from "@/modules/prj/PrjRoutes";
import { requireAuth } from "@shared/middlewares/auth";
import { contractRouter, leadRouter, opportunityRouter, quoteRouter } from "@/modules/crm/CrmRoutes";

const router = Router();

router.use(clientRouter);
router.use(vendorRouter);
router.use(productRouter);

router.use(`/pipelines`, requireAuth, pipelineRouter);
router.use(leadRouter);
router.use(opportunityRouter);
router.use(quoteRouter);
router.use(contractRouter)

router.use(budgetRouter);
router.use(costTypeRouter);
router.use(expenseRouter);
router.use(fundRouter);

router.use(noteRouter);
router.use(eventRouter);

router.use(projectRouter);
router.use(milestoneRouter);
router.use(taskRouter);

export default router;
