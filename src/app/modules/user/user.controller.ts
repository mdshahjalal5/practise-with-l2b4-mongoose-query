import { Request, Response, NextFunction } from "express";
import { createUserltoDB, getUsersFromDB } from "./user.service";
export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const users = await getUsersFromDB();
  res.status(200).json({
    status: "success",
    data: users,
  });
};

export const createUser = async (req: Request, res: Response) => {
  const data = req.body;
  const user = await createUserltoDB(data);
  res.status(200).json({
    status: "success",
    data: user,
  });
};
