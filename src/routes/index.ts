// Base routes folder
import express from "express";
import routerV1 from "./v1/index.js";

const apiRoutes = express.Router();

apiRoutes.use("/v1", routerV1);

export default apiRoutes;
