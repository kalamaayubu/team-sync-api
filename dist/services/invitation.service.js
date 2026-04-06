import crypto from "crypto";
import { prisma } from "../lib/prisma.js";
export const createInvitation = async (email, teamId) => {
    const token = crypto.randomBytes(32).toString("hex");
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 5);
    return await prisma.invitation.create({
        data: { email, token, teamId, expiresAt },
    });
};
export const acceptInvitation = async (token, userId) => {
    const invite = await prisma.invitation.findUnique({
        where: { token },
        include: { team: true },
    });
    if (!invite)
        throw new Error("Not invited.");
    if (invite.expiresAt < new Date())
        throw new Error("Invitation expired.");
    //   Create membership and delete the invitation
    return await prisma.$transaction([
        prisma.membership.create({
            data: { userId, teamId: invite.teamId, role: invite.role },
        }),
        prisma.invitation.delete({ where: { id: invite.id } }),
    ]);
};
//# sourceMappingURL=invitation.service.js.map