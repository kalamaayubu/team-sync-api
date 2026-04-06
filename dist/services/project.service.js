import { prisma } from "../lib/prisma.js";
import { ensureIsAdmin, ensureMembership } from "../utils/guards.js";
export const createProject = async ({ name, description, teamId, authorId, }) => {
    await ensureIsAdmin(teamId, authorId); // Check role
    // Create project
    const project = await prisma.project.create({
        data: {
            name,
            description,
            teamId,
            authorId,
        },
        select: {
            id: true,
            name: true,
        },
    });
    return project;
};
export const getTeamProjects = async ({ teamId, userId }) => {
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
export const getProjectById = async (teamId, userId, projectId) => {
    await ensureMembership(teamId, userId);
    const project = await prisma.project.findUnique({
        where: {
            id: projectId,
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
export const deleteProjectById = async (projectId, userId, teamId) => {
    // Membership check
    await ensureMembership(teamId, userId);
    // Delete project with deleteMany() to get the count
    const { count } = await prisma.project.deleteMany({
        where: {
            authorId: userId,
            id: projectId,
            teamId: teamId,
        },
    });
    if (count === 0) {
        throw new Error("Action denied: You are not the author of this project.");
    }
    return { id: projectId, deleted: true };
};
//# sourceMappingURL=project.service.js.map