import * as teamService from "../services/team.service.js";
import { addMemberSchema, createTeamSchema, } from "../validators/team.validator.js";
import { ParamsIdSchema } from "../validators/shared.validator.js";
export const createTeam = async (req, res) => {
    try {
        const { name } = createTeamSchema.parse(req.body);
        const team = await teamService.createTeam(name, req.user.id);
        res.status(201).json(team);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
export const getTeam = async (req, res) => {
    try {
        const { id: teamId } = ParamsIdSchema.parse(req.params);
        const team = await teamService.getTeamById(teamId, req.user.id);
        if (!team)
            return res.status(404).json({ error: "Access denied. Team not found" });
        res.json(team);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
export const addMember = async (req, res) => {
    try {
        const { teamId } = ParamsIdSchema.parse(req.params);
        const { email } = addMemberSchema.parse(req.body);
        const newMember = await teamService.addMemberToTeam(teamId, req.user.id, email);
        res.status(201).json(newMember);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
//# sourceMappingURL=team.controller.js.map