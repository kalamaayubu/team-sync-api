/*
  Warnings:

  - A unique constraint covering the columns `[title,teamId]` on the table `Task` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Task_title_teamId_key" ON "Task"("title", "teamId");
