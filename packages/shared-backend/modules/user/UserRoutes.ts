import { Router } from "express";
import { userService } from "./UserService";

const router = Router();

// GET all users
router.get("/", async (req, res) => {
  try {
    const queryParams: any = {};
    
    // Handle status query
    if (req.query.status) {
      queryParams.where = {
        status: req.query.status
      };
    }
    
    const users = await userService.findMany(queryParams);
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// GET single user
router.get("/:id", async (req, res) => {
  try {
    const user = await userService.findUnique(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// PATCH update user
router.patch("/:id", async (req, res) => {
  try {
    const user = await userService.update(
      req.params.id,
      req.body,
      req.user
    );
    res.json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

// GET user form data
router.get("/:id/form", async (req, res) => {
  try {
    const formData = await userService.getForm(req.params.id);
    if (!formData) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(formData);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

export default router;