import { Router } from "express";

import extensionRoutes from "../modules/_extensions/extension/ExtensionRoutes";
import userPermissionRoutes from "../modules/_permissions/UserPermission/UserPermissionRoutes";
import permissionRoutes from "../modules/_permissions/Permission/PermissionRoutes";

const router = Router();

router.use(extensionRoutes);
router.use(userPermissionRoutes);
router.use(permissionRoutes);

export default router;
