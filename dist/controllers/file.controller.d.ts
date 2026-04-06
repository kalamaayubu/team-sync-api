import { Request, Response } from "express";
export declare const handleFileUpload: (req: Request, res: Response) => Promise<void>;
export declare const getFiles: (req: Request, res: Response) => Promise<void>;
export declare const removeFile: (req: Request, res: Response) => Promise<void>;
