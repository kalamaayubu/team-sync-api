import { prisma } from "../lib/prisma.js";
import { TeamUser } from "../types/index.js";
import { ensureIsAdmin, ensureMembership } from "../utils/guards.js";

interface ProjectProps {
  name: string;
  description: string;
  teamId: string;
  authorId: string;
}

export const createProject = async ({
  name,
  description,
  teamId,
  authorId,
}: ProjectProps) => {
  await ensureIsAdmin(teamId, authorId); // Check role

  // Create project
  const project = await prisma.project.create({
    data: {
      name,
      description,
      teamId,
      authorId,
    },
  });

  return project;
};

export const getTeamProjects = async ({ teamId, userId }: TeamUser) => {
  await ensureMembership(teamId, userId);

  const teamProjects = await prisma.project.findMany({
    where: {
      teamId,
    },
    select: {
      id: true,
      name: true,
      description: true,
      isActive: true,
      createdAt: true,
      author: {
        select: {
          name: true,
          email: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return teamProjects;
};

//  Get Teams's specific project
export const getProjectById = async (
  teamId: string,
  userId: string,
  projectId: string,
) => {
  await ensureMembership(teamId, userId);

  const project = await prisma.project.findUnique({
    where: {
      id: projectId,
      //   teamId,
    },
    select: {
      id: true,
      name: true,
      description: true,
      isActive: true,
      createdAt: true,
      author: {
        select: { name: true },
      },
    },
  });

  return project;
};
