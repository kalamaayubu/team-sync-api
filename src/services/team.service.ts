import { prisma } from "../lib/prisma.js";

export const createTeam = async (name: string, ownerId: number) => {
  return await prisma.team.create({
    data: {
      name,
      membership: {
        create: {
          userId: ownerId,
          role: "admin",
        },
      },
    },
    include: {
      membership: true,
    },
  });
};

export const getTeamById = async (teamId: number, requestingUserId: number) => {
  return await prisma.team.findFirst({
    where: {
      id: teamId,
      membership: {
        some: { userId: requestingUserId },
      },
    },
    include: {
      membership: {
        include: {
          user: {
            select: { id: true, email: true, name: true },
          },
        },
      },
    },
  });
};

export const addMemberToTeam = async (
  teamId: number,
  adminId: number,
  userId: number,
) => {
  const adminMembership = await prisma.membership.findFirst({
    where: {
      teamId,
      userId: adminId,
      role: "admin",
    },
  });

  if (!adminMembership) {
    throw new Error("Unauthorized: Only team admins can invite members.");
  }

  return await prisma.membership.create({
    data: {
      teamId,
      userId,
    },
  });
};
