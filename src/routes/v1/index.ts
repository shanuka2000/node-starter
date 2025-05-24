// version 1 related routes will go here
import feature1Routes from "#domains/feature1/routes/feature1.routes.js";
import express from "express";

const routerV1 = express.Router();

routerV1.use("/feature1", feature1Routes);

export default routerV1;
