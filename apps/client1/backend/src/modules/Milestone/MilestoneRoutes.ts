import { Router } from "express";
import { requireAuth } from "@shared/middlewares/auth";

import { milestoneService } from "./MilestoneService";


const router = Router();
const basePath = "/milestones";
const service = milestoneService;

// Get all data
router.get(
  basePath,
  requireAuth,
  async (req: any, res: any) => {
    const { mode, ...queryParams } = req.query;
    const records = await service.findMany(queryParams);
    res.json({
      data: records,
      meta: { total: records.length },
    });
  }
);

// Get single data
router.get(
  `${basePath}/:id`,
  requireAuth,
  async (req: any, res: any) => {
    const id = req.params.id;
    const record = await service.findUnique(id);
    if (record) {
      res.json({ data: record });
    } else {
      res.status(404).json({ message: `Data not found` });
    }
  }
);

router.patch(
  `${basePath}/approve`,
  requireAuth,
  async (req: any, res: any) => {
    const result = await service.approve(req.body, req.user);
    res.json(result);
  }
);

export default router;
