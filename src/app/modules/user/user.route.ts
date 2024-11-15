import {  Router } from "express";
import { createUser, getUsers } from "./user.controller";

export const router = Router();

router.get("/", getUsers);
router.post("/create-user", createUser);
