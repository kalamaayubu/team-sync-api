import { Request, Response } from "express";
export declare const createProjectHandler: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getProjectsHandler: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getProjectByIdHandler: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const deleteProjectByIdHandler: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
