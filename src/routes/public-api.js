import express from "express";
import { register, login } from "../controllers/user-controller.js";

const publicRouter = express.Router();

publicRouter.get("/", (req, res) => {
  res.send(`Welcome to Destinatik API`);
});

publicRouter.post("/auth/register", register);
publicRouter.post("/auth/login", login);
// publicRouter.post("/auth/password", changePassword);
// publicRouter.get("/auth/google", oauth2Client);
// publicRouter.get("/auth/google/callback", googleAuthCallback);

export { publicRouter };
