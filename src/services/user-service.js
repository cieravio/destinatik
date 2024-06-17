import { userCollection } from "../app/firestore.js";
import { google } from "googleapis";
import { validation } from "../validation/validation.js";
import { registerValidation, loginValidation } from "../validation/user-validation.js";
import { ResponseError } from "../error/response-error.js";
import { generateToken } from "../app/token.js";
import { oauth2Client } from "../app/oauth.js";
import dotenv from "dotenv";
import bcryptjs from "bcryptjs";

dotenv.config;

export const register = async (req) => {
  const validated = validation(registerValidation, req);

  const userQuery = await userCollection.where("email", "==", validated.email).get();

  if (!userQuery.empty) {
    throw new ResponseError(409, "Email already registered");
  }

  validated.password = await bcryptjs.hash(validated.password, 10);
  const userId = crypto.randomUUID();

  const newUser = {
    id: userId,
    ...validated,
    favorite: "",
  };

  const registeredUser = await userCollection.doc(userId).set(newUser);
  if (registeredUser) {
    return {
      id: userId,
      email: newUser.email,
      message: "User registered successfully",
    };
  }
};

export const login = async (req) => {
  const validated = validation(loginValidation, req);

  let userQuery = await userCollection.where("username" || "email", "==", validated.usernameOrEmail).get();
  userQuery = userQuery.docs[0].data();

  if (userQuery.empty) {
    throw new ResponseError(401, "Wrong username or password");
  }

  const isPasswordCorrect = await bcryptjs.compare(validated.password, userQuery.password);

  if (!isPasswordCorrect) {
    throw new ResponseError(401, "Wrong username or password");
  }

  const token = generateToken(userQuery.userId);
  const newUser = { token };

  const userLogin = await userCollection.doc(userQuery.id).update(newUser);

  if (userLogin) {
    return { token };
  }
};
