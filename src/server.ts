import app from "#app.js";
import { envConfig } from "#config/env.config.js";
import express from "express";

const port = envConfig.port;

const startServer = async () => {
  try {
    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

await startServer();
