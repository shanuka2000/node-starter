import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), ".envConfig") });

export const envConfig = {
  port: process.env.PORT ?? "9001",
};
