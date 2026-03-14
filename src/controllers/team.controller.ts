import { Request, Response } from "express";
import * as teamService from "../services/team.service.js";
import {
  addMemberSchema,
  createTeamSchema,
} from "../validators/team.validator.js";

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
    const teamId = Number(req.params.id);
    const team = await teamService.getTeamById(teamId, req.user!.id);

    if (!team)
      return res.status(404).json({ error: "Access denied. Team not found" });
    res.json(team);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const inviteMember = async (req: Request, res: Response) => {
  try {
    const teamId = Number(req.params.id);
    const { userId } = addMemberSchema.parse(req.body);

    const membership = await teamService.addMemberToTeam(
      teamId,
      req.user!.id,
      userId,
    );
    res.status(201).json(membership);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
