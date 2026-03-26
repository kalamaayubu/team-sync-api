import { Request, Response } from "express";
import * as teamService from "../services/team.service.js";
import {
  addMemberSchema,
  createTeamSchema,
} from "../validators/team.validator.js";
import { ParamsIdSchema } from "../validators/shared.validator.js";

export const createTeam = async (req: Request, res: Response) => {
  try {
    const { name } = createTeamSchema.parse(req.body);
    const team = await teamService.createTeam(name, req.user!.id);
    res.status(201).json(team);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getTeam = async (req: Request, res: Response) => {
  try {
    const { id: teamId } = ParamsIdSchema.parse(req.params);
    const team = await teamService.getTeamById(teamId, req.user!.id);

    if (!team)
      return res.status(404).json({ error: "Access denied. Team not found" });
    res.json(team);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const addMember = async (req: Request, res: Response) => {
  try {
    const { teamId } = ParamsIdSchema.parse(req.params);
    const { email } = addMemberSchema.parse(req.body);

    const newMember = await teamService.addMemberToTeam(
      teamId as string,
      req.user!.id,
      email,
    );
    res.status(201).json(newMember);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
