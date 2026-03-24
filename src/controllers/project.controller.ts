import { Request, Response } from "express";
import * as ProjectService from "../services/project.service.js";
import { Prisma } from "../generated/prisma/client.js";

export const createProjectHandler = async (req: Request, res: Response) => {
  try {
    const { teamId } = req.params;
    const { name, description } = req.body;

    if (!name || !description) {
      return res.status(400).json({
        error: "Project name and description are required",
      });
    }

    if (name.length > 20) {
      return res.status(400).json({
        error: "Project name must not exceed 20 characters",
      });
    }

    if (description.length > 150) {
      return res.status(400).json({
        error: "Project description must not exceed 150 characters",
      });
    }

    if (!teamId || !req.user?.id) {
      return res.status(400).json({
        error: "Missing required parameters",
      });
    }

    const project = await ProjectService.createProject({
      name,
      description,
      teamId: teamId as string,
      authorId: req.user!.id,
    });

    return res.status(201).json({
      success: true,
      data: project,
    });
  } catch (error) {
    console.error("Failed to create project", error);

    // Handle unique constraint violation
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return res.status(409).json({
        error: `A project with the name "${req.body.name}" already exists in this team`,
      });
    }

    return res.status(400).json({
      error:
        error instanceof Error ? error.message : "Failed to create project",
    });
  }
};

export const getProjectsHandler = async (req: Request, res: Response) => {
  try {
    const { teamId } = req.params;

    if (!teamId || !req.user?.id) {
      return res.status(400).json({
        error: "Missing required parameters",
      });
    }

    const teamProjects = await ProjectService.getTeamProjects({
      teamId: teamId as string,
      userId: req.user!.id,
    });

    return res.status(200).json({
      success: true,
      data: teamProjects,
    });
  } catch (error) {
    console.error("Failed to fetch projects", error);
    return res.status(400).json({
      error:
        error instanceof Error ? error.message : "Failed to fetch projects",
    });
  }
};

export const getProjectByIdHandler = async (req: Request, res: Response) => {
  try {
    const { teamId, projectId } = req.params;

    if (!req.user?.id || !teamId || !projectId) {
      return res.status(400).json({
        error: "Missing required parameters: userId, teamId, or projectId",
      });
    }

    const project = await ProjectService.getProjectById(
      teamId as string,
      req.user?.id,
      projectId as string,
    );

    if (!project) {
      return res.status(404).json({
        success: false,
        error: "Project not found",
      });
    }

    return res.status(200).json({ success: true, data: project });
  } catch (error) {
    console.error("Failed to fetch project", error);
    return res.status(400).json({
      error: error instanceof Error ? error.message : "Failed to fetch project",
    });
  }
};

// Delete project
export const deleteProjectByIdHandler = async (req: Request, res: Response) => {
  try {
    const { teamId, projectId } = req.params;

    if (!projectId) {
      return res.status(400).json({
        error: "Bad Request",
      });
    }

    if (!req.user?.id || !teamId) {
      return res.status(403).json({
        error: "Unauthorized",
      });
    }

    await ProjectService.deleteProjectById(
      projectId as string,
      req.user!.id,
      teamId as string,
    );

    return res.status(200).json({
      success: true,
      message: "Project deleted successful",
      data: {},
    });
  } catch (error: any) {
    console.error("Error in deleteProjectByIdHandler:", error);
    const isClientError =
      error.message.includes("permission") ||
      error.message.includes("not found");

    return res.status(isClientError ? 403 : 500).json({
      success: false,
      message: isClientError ? error.message : "Internal Server Error",
      error: error.message,
    });
  }
};
