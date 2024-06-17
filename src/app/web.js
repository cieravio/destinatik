import express from "express";
import { publicRouter } from "../routes/public-api.js";
import { privateRouter } from "../routes/private-api";
import { errorMiddleware } from "../middleware/error-middleware";
// import { loadModel } from '../utils/loadModel';

const app = express();

app.use(express.json());

app.use(publicRouter);
app.use(privateRouter);

app.use(errorMiddleware);

export { app };
