import { eventEmitter, EVENTS } from "../lib/events.js";

eventEmitter.on(EVENTS.TASK.CREATED, async (data) => {
  const { task, creatorName } = data;
  console.log(`[EVENT] Task "${task.title}" created by ${creatorName}`);
});

eventEmitter.on(EVENTS.TASK.UPDATED, async () => {
  console.log(`[EVENT] Task: A task was updated, please check it out`);
});

eventEmitter.on(EVENTS.TASK.DELETED, async (data) => {
  const { task } = data;

  console.log(`[EVENT] Task: A task was removed -> id:(${task.id})`);
});
