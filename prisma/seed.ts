import { faker } from "@faker-js/faker";
import { prisma } from "../src/lib/prisma";
import bcrypt from "bcryptjs";

async function main() {
  const hashedPassword = await bcrypt.hash("password", 12);

  const usersData = Array.from({ length: 20 }).map(() => ({
    name: faker.person.fullName(),
    email: faker.internet.email().toLowerCase(),
    password: hashedPassword,
  }));

  await prisma.user.createMany({
    data: usersData,
    skipDuplicates: true,
  });
}

main().finally(() => prisma.$disconnect);
