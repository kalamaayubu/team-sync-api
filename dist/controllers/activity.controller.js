import { prisma } from "../lib/prisma.js";
import { ensureMembership } from "../utils/guards.js";
import { ParamsIdSchema } from "../validators/shared.validator.js";
export const getTeamActivity = async (req, res) => {
    const { teamId } = ParamsIdSchema.parse(req.params);
    await ensureMembership(teamId, req.user.id);
    const logs = await prisma.activityLog.findMany({
        where: { teamId },
        include: {
            user: {
                select: { name: true, email: true },
            },
        },
        orderBy: { createdAt: "desc" },
        take: 50,
    });
    res.status(200).json(logs);
};
//# sourceMappingURL=activity.controller.js.map