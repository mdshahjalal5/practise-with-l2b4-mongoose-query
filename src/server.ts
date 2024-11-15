import mongoose from "mongoose";
import { app } from "./app";

const port = 3000;
const mongoURI = process.env.MONGODB_URI2 as string;

async function mongoConnect() {
  try {
    // await mongoose.connect(mongoURI);
    await mongoose.connect("mongodb://localhost:27017/");
    console.log(`DB successfully connected`);
    app.listen(port, (): void => {
      console.log(`server listening on port ${port}`);
    });
  } catch (error) {
    console.log(`error, ${error}`);
  }
}

mongoConnect();
