import { Request, Response } from "express";
import * as userService from "../services/user.service.js";
import {
  registerSchema,
  loginSchema,
  updateUserSchema,
} from "../validators/user.validator.js";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const validated = registerSchema.parse(req.body);
    const user = await userService.createUser(validated);
    res.status(201).json(user);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    console.log("DEBUG: Request Body is ->", req.body);
    console.log("DEBUG: Email type is ->", typeof req.body.email);

    if (!req.body.email) {
      return res.status(400).json({ error: "Email is missing from the body!" });
    }
    const validated = loginSchema.parse(req.body);
    const token = await userService.authenticateUser(validated);
    res.json({ token });
  } catch (err: any) {
    res.status(401).json({ error: err.message });
  }
};

export const getMe = async (req: Request, res: Response) => {
  try {
    const user = await userService.getUserById(req.user!.id);
    res.json(user);
  } catch (err: any) {
    res.status(404).json({ error: err.message });
  }
};

export const updateMe = async (req: Request, res: Response) => {
  try {
    const validated = updateUserSchema.parse(req.body);
    const updated = await userService.updateUser(req.user!.id, validated);
    res.json(updated);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteMe = async (req: Request, res: Response) => {
  try {
    await userService.deleteUser(req.user!.id);
    res.status(204).send();
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};
