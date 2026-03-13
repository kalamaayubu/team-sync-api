import { prisma } from "../lib/prisma.js";
import { Prisma } from "../generated/prisma/client.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const createUser = async (data: any) => {
  const hashedPassword = await bcrypt.hash(data.password, 12);

  const userInput: Prisma.UserCreateInput = {
    email: data.email,
    name: data.name,
    password: hashedPassword,
  };

  return await prisma.user.create({
    data: userInput,
    select: { id: true, email: true, name: true, createdAt: true },
  });
};

export const authenticateUser = async (data: any) => {
  const user = await prisma.user.findUnique({ where: { email: data.email } });
  if (!user) throw new Error("Invalid credentials");

  const isValid = await bcrypt.compare(data.password, user.password);
  if (!isValid) throw new Error("Invalid credentials");

  return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET!, {
    expiresIn: "7d",
  });
};

export const getUserById = async (id: number) => {
  return await prisma.user.findUnique({
    where: { id },
    select: { id: true, email: true, name: true, createdAt: true },
  });
};

export const updateUser = async (id: number, data: any) => {
  return await prisma.user.update({
    where: { id },
    data,
    select: { id: true, email: true, name: true },
  });
};

export const deleteUser = async (id: number) => {
  return await prisma.user.delete({ where: { id } });
};
