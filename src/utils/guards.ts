import { prisma } from "../lib/prisma.js";

export const ensureMembership = async (teamId: number, userId: number) => {
  const membership = await prisma.membership.findFirst({
    where: { teamId, userId },
  });

  if (!membership) {
    throw new Error("Unauthorized: You are not a member of this team.");
  }

  return membership;
};
