import { variable } from "./environments";
const ENV = process.env.NODE_ENV || "development";

const envConfig = variable[ENV];

export const config = Object.assign(
  {
    env: ENV
  },
  envConfig
);
