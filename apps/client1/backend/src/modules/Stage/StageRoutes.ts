import { Router } from "express";
import { requireAuth } from "@shared/shared/middlewares/auth";


import { stageService } from "./StageService";

const router = Router();
const basePath = "/stages";
const service = stageService;

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

// Create data
router.post(basePath, requireAuth, async (req: any, res: any) => {
  const record = await service.create(req.body, req.user);
        res.status(201).json({
      message: `Data created successfully`,
      data: { id: record.id }
    });
  }
);

// Update data
router.patch(`${basePath}/:id`, requireAuth, async (req: any, res: any) => {
  const record = await service.update(req.body, req.params.id, req.user);
    res.status(200).json({
      message: `Data updated successfully`,
      data: { id: record.id } 
    });
  }
);

router.post(
  `${basePath}/:model`,
  requireAuth,
  async (req: any, res: any) => {
    const modelName = req.params.model;
    const userId = req.user?.id;

    const results = await service.createInitialStagesForModel(
      modelName,
      userId
    );

    res.status(201).json({
      message: `Stages created for ${modelName}`,
      data: results,
    });
  }
);

export default router;
