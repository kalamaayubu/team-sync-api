import { Request, Response } from "express";
import * as InvitationService from "../services/invitation.service.js";
import { ParamsIdSchema } from "../validators/shared.validator.js";

export const sendInvite = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const { id: teamId } = ParamsIdSchema.parse(req.params);

    // Create the invite record
    const invite = await InvitationService.createInvitation(
      email,
      teamId as string,
    );

    res.status(201).json({
      message: "Invitation generated successfully.",
      token: invite.token,
      expiresAt: invite.expiresAt,
    });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const acceptInvite = async (req: Request, res: Response) => {
  try {
    const { token } = req.body;
    const userId = req.user!.id; // Assumes authenticate middleware sets req.user

    await InvitationService.acceptInvitation(token, userId);

    res.status(200).json({ message: "Successfully joined the team." });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
