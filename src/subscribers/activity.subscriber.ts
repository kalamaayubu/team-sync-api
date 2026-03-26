import { eventEmitter, EVENTS } from "../lib/events.js";
import { prisma } from "../lib/prisma.js";

// 1. Listen for Task Creation
eventEmitter.on(EVENTS.TASK.CREATED, async ({ task, creatorName }) => {
  try {
    await prisma.activityLog.create({
      data: {
        action: "TASK_CREATED",
        message: `${creatorName} created the task: "${task.title}"`,
        userId: task.creatorId,
        teamId: task.teamId, // Ensure your Task object includes teamId
        entityId: task.id,
      },
    });
  } catch (error) {
    console.error("Failed to create activity log:", error);
  }
});

// 2. Listen for Task Deletion
eventEmitter.on(EVENTS.TASK.DELETED, async ({ taskTitle, actorId, teamId }) => {
  await prisma.activityLog.create({
    data: {
      action: "TASK_DELETED",
      message: `A task was deleted: "${taskTitle}"`,
      userId: actorId,
      teamId: teamId,
    },
  });
});
