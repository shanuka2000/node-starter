import bodyParser from "body-parser";
import express, { Express } from "express";

const app: Express = express();

app.use(bodyParser.json());

export default app;
