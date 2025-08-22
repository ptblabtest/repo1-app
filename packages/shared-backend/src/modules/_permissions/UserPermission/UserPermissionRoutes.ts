import { requireAuth, requireRole } from "../../../shared/middlewares/auth";
import { userPermissionService } from "./UserPermissionService";
import { Router } from "express";

const router = Router();

// Assign permissions using upsert
router.post(
  "/users/:userId/permissions",
  requireAuth,
  // requireRole(2),
  async (req: any, res: any) => {
    const { userId } = req.params;
    const { permissions } = req.body; // Array of permissionIds

    // Transform to upsert format
    const data = permissions.map((permissionId: string) => ({
      userId,
      permissionId,
    }));

    const result = await userPermissionService.upsert({ data }, req.user);

    res.json(result);
  }
);

// Get user's permissions - using existing findMany
router.get(
  "/users/:userId/permissions",
  requireAuth,
  // requireRole(3),
  async (req: any, res: any) => {
    const permissions = await userPermissionService.findMany({
      where: { userId: req.params.userId },
    });
    res.json(permissions);
  }
);

// Get single permission assignment - using existing findUnique
router.get(
  "/user-permissions/:id",
  requireAuth,
  // requireRole(3),
  async (req: any, res: any) => {
    const permission = await userPermissionService.findUnique(req.params.id);
    res.json(permission);
  }
);

// Delete single permission - using existing delete
router.delete(
  "/user-permissions/:id",
  requireAuth,
  // requireRole(2),
  async (req: any, res: any) => {
    const result = await userPermissionService.delete(req.params.id);
    res.json(result);
  }
);

export default router;
