import express, { Application, Request, Response, NextFunction } from "express";

import dotenv from "dotenv";
import { router } from "./app/modules/user/user.route";

// Load environment variables from .env file
dotenv.config();

export const app: Application = express();

// Middleware to parse JSON requests
app.use(express.json());

app.use("/users", router);
