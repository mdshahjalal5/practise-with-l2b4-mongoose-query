import { IUser } from "./user.interface";
import { User } from "./user.model";

export const getUsersFromDB = async () => {
  const users = await User.find();
  return users;
};

export const createUserltoDB = async (payload: IUser): Promise<IUser> => {
  try {
    const user = new User(payload);
    return user;
  } catch (error) {
    console.log(`error ${error}, `);
    throw new Error("failed to load data");
  }
};
