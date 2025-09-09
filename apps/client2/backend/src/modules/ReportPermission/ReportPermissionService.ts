import prisma from "@shared/lib/prisma";

export const reportPermissionService = {
 bulkReplaceByCategories: async (
   userId: string,
   permissions: any[]
 ) => {
   // Get unique category IDs
   const categoryIds = [...new Set(permissions.map((p: any) => p.categoryId))];
   
   // Validate all categories are leaf categories
   for (const categoryId of categoryIds) {
     const childCount = await prisma.reportCategory.count({
       where: { parentId: categoryId }
     });
     
     if (childCount > 0) {
       const category = await prisma.reportCategory.findUnique({
         where: { id: categoryId },
         select: { name: true }
       });
       throw new Error(`Category "${category?.name}" has child categories and cannot have permissions assigned`);
     }
   }

   // Build permission lookups
   const permissionConditions = permissions.map((p: any) => ({
     resource: `report:category:${p.categoryId}`,
     action: p.action
   }));

   // Find all matching permissions
   const dbPermissions = await prisma.permission.findMany({
     where: {
       OR: permissionConditions
     },
     select: { id: true }
   });

   if (dbPermissions.length !== permissionConditions.length) {
     throw new Error("Some permissions not found. Run syncCategoryPermissions first.");
   }

   // Get count before
   const beforeCount = await prisma.userPermission.count({
     where: { userId }
   });

   // Bulk replace
   await prisma.$transaction(async (tx) => {
     await tx.userPermission.deleteMany({
       where: { userId }
     });

     if (dbPermissions.length > 0) {
       await tx.userPermission.createMany({
         data: dbPermissions.map((p: any) => ({
           userId,
           permissionId: p.id
         }))
       });
     }
   });

   return {
     success: true,
     beforeCount,
     afterCount: dbPermissions.length
   };
 }
};