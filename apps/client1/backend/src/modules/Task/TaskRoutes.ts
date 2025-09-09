import { Router } from "express";
import { requireAuth } from "@shared/middlewares/auth";
import { taskService } from "./TaskService";

const router = Router();
const basePath = "/tasks";
const service = taskService;

// Get all data
router.get(basePath, requireAuth, async (req: any, res: any) => {
  const { mode, ...queryParams } = req.query;
  const records = await service.findMany(queryParams);
  res.json({
    data: records,
    meta: { total: records.length },
  });
});

// Get single data
router.get(`${basePath}/:id`, requireAuth, async (req: any, res: any) => {
  const id = req.params.id;
  const record = await service.findUnique(id);
  if (record) {
    res.json({ data: record });
  } else {
    res.status(404).json({ message: `Data not found` });
  }
});

// Create data
router.post(basePath, requireAuth, async (req: any, res: any) => {
  const record = await service.create(req.body, req.user);
  res.status(201).json({
    message: `Data created successfully`,
    data: { id: record.id },
  });
});

router.patch(
  `${basePath}/upsert`,
  requireAuth,
  async (req: any, res: any) => {
    const records = await service.upsert(req.body, req.user);
    res.status(200).json({
      message: `Data upserted successfully`,
      data: records.map((record: any) => ({ id: record.id })),
    });
  }
);

// Update data
router.patch(`${basePath}/:id`, requireAuth, async (req: any, res: any) => {
  const record = await service.update(req.body, req.params.id, req.user);
  res.status(200).json({
    message: `Data updated successfully`,
    data: { id: record.id },
  });
});

export default router;
