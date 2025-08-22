import { Router } from "express";
import { requireAuth } from "@shared/shared/middlewares/auth";
import { costTypeService } from "./CostTypeService";

const router = Router();
const basePath = "/cost-types";
const service = costTypeService;

// Get all data
router.get(basePath, requireAuth, async (req: any, res: any) => {
  try {
    const { mode, ...queryParams } = req.query;
    const records = await service.findMany(queryParams);
    res.json({
      data: records,
      meta: { total: records.length },
    });
  } catch (error) {
    console.error(`Error fetching cost types:`, error);
    res.status(500).json({ 
      message: "Failed to fetch cost types",
      error: error instanceof Error ? error.message : "Unknown error"
    });
  }
});

// Get single data
router.get(`${basePath}/:id`, requireAuth, async (req: any, res: any) => {
  try {
    const id = req.params.id;
    const record = await service.findUnique(id);
    if (record) {
      res.json({ data: record });
    } else {
      res.status(404).json({ message: `Data not found` });
    }
  } catch (error) {
    console.error(`Error fetching cost type with id ${req.params.id}:`, error);
    res.status(500).json({ 
      message: "Failed to fetch cost type",
      error: error instanceof Error ? error.message : "Unknown error"
    });
  }
});

// Create data
router.post(basePath, requireAuth, async (req: any, res: any) => {
  try {
    const record = await service.create(req.body, req.user);
    res.status(201).json({
      message: `Data created successfully`,
      data: { id: record.id },
    });
  } catch (error) {
    console.error(`Error creating cost type:`, error);
    res.status(500).json({ 
      message: "Failed to create cost type",
      error: error instanceof Error ? error.message : "Unknown error"
    });
  }
});

// Update data
router.patch(`${basePath}/:id`, requireAuth, async (req: any, res: any) => {
  try {
    const record = await service.update(req.body, req.params.id, req.user);
    res.status(200).json({
      message: `Data updated successfully`,
      data: { id: record.id },
    });
  } catch (error) {
    console.error(`Error updating cost type with id ${req.params.id}:`, error);
    res.status(500).json({ 
      message: "Failed to update cost type",
      error: error instanceof Error ? error.message : "Unknown error"
    });
  }
});

// Upsert data
router.put(
  `${basePath}`,
  requireAuth,
  async (req: any, res: any) => {
    try {
      const records = await service.upsert(req.body, req.user);
      res.status(200).json({
        message: `Data upserted successfully`,
        data: records.map((record: any) => ({ id: record.id })),
      });
    } catch (error) {
      console.error(`Error upserting cost types:`, error);
      res.status(500).json({ 
        message: "Failed to upsert cost types",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  }
);

export default router;