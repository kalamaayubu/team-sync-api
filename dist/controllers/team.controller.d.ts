import { Request, Response } from "express";
export declare const createTeam: (req: Request, res: Response) => Promise<void>;
export declare const getTeam: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const addMember: (req: Request, res: Response) => Promise<void>;
