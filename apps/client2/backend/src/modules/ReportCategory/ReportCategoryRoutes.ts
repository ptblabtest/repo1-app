import { Router } from "express";
import { reportCategoryService } from "./ReportCategoryService";

const router = Router();

// GET all categories
router.get("/", async (req, res) => {
  try {
    const categories = await reportCategoryService.findMany(req.query);
    res.json(categories);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// GET single category
router.get("/:id", async (req, res) => {
  try {
    const category = await reportCategoryService.findUnique(req.params.id);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.json(category);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// POST create category
router.post("/", async (req, res) => {
  try {
    const category = await reportCategoryService.create(req.body, req.user);
    res.status(201).json(category);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

// PATCH update category
router.patch("/:id", async (req, res) => {
  try {
    const category = await reportCategoryService.update(
      req.params.id,
      req.body,
      req.user
    );
    res.json(category);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE category
router.delete("/:id", async (req, res) => {
  try {
    await reportCategoryService.delete(req.params.id);
    res.status(204).send();
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

// POST upsert categories
router.post("/upsert", async (req, res) => {
  try {
    const results = await reportCategoryService.upsert(req.body, req.user);
    res.json(results);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
