/*
  Warnings:

  - You are about to drop the column `teamId` on the `Task` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[coverImageId]` on the table `Project` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title,projectId]` on the table `Task` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `projectId` to the `File` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectId` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `Task` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "File" DROP CONSTRAINT "File_taskId_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_teamId_fkey";

-- DropIndex
DROP INDEX "Task_title_teamId_key";

-- AlterTable
ALTER TABLE "File" ADD COLUMN     "projectId" TEXT NOT NULL,
ALTER COLUMN "taskId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "teamId",
ADD COLUMN     "projectId" TEXT NOT NULL,
ALTER COLUMN "description" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Project_coverImageId_key" ON "Project"("coverImageId");

-- CreateIndex
CREATE UNIQUE INDEX "Task_title_projectId_key" ON "Task"("title", "projectId");

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
