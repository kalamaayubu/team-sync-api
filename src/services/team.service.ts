import { prisma } from "../lib/prisma.js";
import { ensureIsAdmin } from "../utils/guards.js";

export const createTeam = async (name: string, ownerId: string) => {
  // Check for duplicate team name
  const existingTeam = await prisma.team.findFirst({
    where: {
      name,
      ownerId,
    },
  });

  if (existingTeam) {
    throw new Error(
      "You already have a team with this name. Try a different name.",
    );
  }

  // A user can create a maximum of 4 teams
  const teamCount = await prisma.membership.count({
    where: {
      userId: ownerId,
      role: "ADMIN",
    },
  });

  if (teamCount >= 4) {
    throw new Error("Maximum limit of 4 teams reached.");
  }

  return await prisma.team.create({
    data: {
      name,
      ownerId,
      membership: {
        create: {
          userId: ownerId,
          role: "ADMIN",
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
  inviteeEmail: string,
) => {
  // Find the invitee by email
  const invitee = await prisma.user.findUnique({
    where: { email: inviteeEmail.toLowerCase() },
    select: {
      id: true,
      name: true,
      email: true,
    },
  });

  console.log("INVITEE-ID: ", invitee?.id);

  if (!invitee) {
    throw new Error("User with this email does not exist.");
  }

  if (invitee.id === adminId) {
    throw new Error("You are the admin of this team already.");
  }

  // Ensure user is an ADMIN of this team
  const adminMembership = await prisma.membership.findFirst({
    where: {
      teamId,
      userId: adminId,
      role: "ADMIN",
    },
  });

  if (!adminMembership || adminMembership.role !== "ADMIN") {
    throw new Error("Unauthorized: Only team admins can add members.");
  }

  // Check if target user is already a in the team
  const existingMembership = await prisma.membership.findUnique({
    where: {
      userId_teamId: { userId: invitee.id, teamId },
    },
  });

  if (existingMembership) {
    throw new Error("This user is already a member of the team.");
  }

  console.log("ADDING MEMBER: ", { teamId, invitee });
  return await prisma.membership.create({
    data: {
      teamId,
      userId: invitee.id,
      role: "MEMBER",
    },
    select: {
      id: true,
      user: {
        select: { name: true, email: true },
      },
      role: true,
    },
  });
};

export const deleteTeam = async (teamId: string, requestingUserId: string) => {
  if (!ensureIsAdmin) {
    throw new Error("Unauthorized: Only team admins can delete the team.");
  }

  // Check if team exists
  const team = await prisma.team.findUnique({
    where: { id: teamId },
  });

  if (!team) {
    throw new Error("Team not found.");
  }

  return await prisma.team.delete({
    where: { id: teamId },
    include: {
      membership: true, // Include deleted memberships in response
    },
  });
};
