import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import {} from "";

dotenv.config();

export const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

export const validateToken = (token) => {
  token = jwt.verifY(token, process.env.JWT_SECRET);
  return token;
};
