import express from "express";
import { favorite, getfavorite, logout } from "../controllers/user-controller.js";

const privateRouter = express.Router();

privateRouter.put("/auth/favorite", favorite);
privateRouter.get("/auth/getfavorite", getfavorite);
privateRouter.delete("/auth/logout", logout);

export { privateRouter };
