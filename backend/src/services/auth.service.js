import prisma from "../utils/prisma.js";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export const registerUser = async (data) => {
  const { username, email, password } = data;

  if (!password || typeof password !== "string") {
    throw new Error("Password is required and must be a string");
  }

  const existingUser = await prisma.user.findFirst({
    where: {
      OR: [{ username }, { email }],
    },
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  return prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });
};

export const loginUser = async (data) => {
  const { email, password } = data;

  if (!password || typeof password !== "string") {
    throw new Error("Password is required and must be a string");
  }

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new Error("Invalid credentials");
  }

  return {
    id: user.id,
    username: user.username,
    email: user.email,
  };
};
