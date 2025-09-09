/*
  Warnings:

  - You are about to drop the column `filename` on the `File` table. All the data in the column will be lost.
  - You are about to drop the column `createdById` on the `Permission` table. All the data in the column will be lost.
  - You are about to drop the column `updatedById` on the `Permission` table. All the data in the column will be lost.
  - You are about to drop the column `createdById` on the `ReportCategory` table. All the data in the column will be lost.
  - You are about to drop the column `updatedById` on the `ReportCategory` table. All the data in the column will be lost.
  - You are about to drop the column `departmentId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `createdById` on the `UserPermission` table. All the data in the column will be lost.
  - You are about to drop the column `updatedById` on the `UserPermission` table. All the data in the column will be lost.
  - You are about to drop the `Department` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DepartmentPermission` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Department" DROP CONSTRAINT "Department_createdById_fkey";

-- DropForeignKey
ALTER TABLE "public"."Department" DROP CONSTRAINT "Department_updatedById_fkey";

-- DropForeignKey
ALTER TABLE "public"."DepartmentPermission" DROP CONSTRAINT "DepartmentPermission_createdById_fkey";

-- DropForeignKey
ALTER TABLE "public"."DepartmentPermission" DROP CONSTRAINT "DepartmentPermission_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "public"."DepartmentPermission" DROP CONSTRAINT "DepartmentPermission_permissionId_fkey";

-- DropForeignKey
ALTER TABLE "public"."DepartmentPermission" DROP CONSTRAINT "DepartmentPermission_updatedById_fkey";

-- DropForeignKey
ALTER TABLE "public"."Permission" DROP CONSTRAINT "Permission_createdById_fkey";

-- DropForeignKey
ALTER TABLE "public"."Permission" DROP CONSTRAINT "Permission_updatedById_fkey";

-- DropForeignKey
ALTER TABLE "public"."ReportCategory" DROP CONSTRAINT "ReportCategory_createdById_fkey";

-- DropForeignKey
ALTER TABLE "public"."ReportCategory" DROP CONSTRAINT "ReportCategory_updatedById_fkey";

-- DropForeignKey
ALTER TABLE "public"."User" DROP CONSTRAINT "User_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "public"."UserPermission" DROP CONSTRAINT "UserPermission_createdById_fkey";

-- DropForeignKey
ALTER TABLE "public"."UserPermission" DROP CONSTRAINT "UserPermission_updatedById_fkey";

-- AlterTable
ALTER TABLE "public"."File" DROP COLUMN "filename";

-- AlterTable
ALTER TABLE "public"."Permission" DROP COLUMN "createdById",
DROP COLUMN "updatedById";

-- AlterTable
ALTER TABLE "public"."ReportCategory" DROP COLUMN "createdById",
DROP COLUMN "updatedById";

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "departmentId";

-- AlterTable
ALTER TABLE "public"."UserPermission" DROP COLUMN "createdById",
DROP COLUMN "updatedById";

-- DropTable
DROP TABLE "public"."Department";

-- DropTable
DROP TABLE "public"."DepartmentPermission";
