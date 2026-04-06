import { prisma } from "../lib/prisma.js";
export const ensureMembership = async (teamId, userId) => {
    const membership = await prisma.membership.findFirst({
        where: { teamId, userId },
    });
    if (!membership) {
        throw new Error("Unauthorized: You are not a member of this team.");
    }
    return membership;
};
export const ensureIsAdmin = async (teamId, userId) => {
    const admin = await prisma.membership.findFirst({
        where: { teamId, userId, role: "ADMIN" },
    });
    if (!admin) {
        throw new Error("Unauthorized: Only admin can create project.");
    }
    return admin;
};
//# sourceMappingURL=guards.js.map