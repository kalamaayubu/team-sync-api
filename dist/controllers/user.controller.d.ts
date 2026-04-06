import { Request, Response } from "express";
export declare const registerUser: (req: Request, res: Response) => Promise<void>;
export declare const loginUser: (req: Request, res: Response) => Promise<void>;
export declare const getMe: (req: Request, res: Response) => Promise<void>;
export declare const updateMe: (req: Request, res: Response) => Promise<void>;
export declare const deleteMe: (req: Request, res: Response) => Promise<void>;
