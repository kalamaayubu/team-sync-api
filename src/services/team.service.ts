import { prisma } from "../lib/prisma.js";

export const createTeam = async (name: string, ownerId: string) => {
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

export const getTeamById = async (teamId: string, requestingUserId: string) => {
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
  teamId: string,
  adminId: string,
  userId: string,
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
