import express, { Application } from "express";
import { AppRouter } from "./routes/app.route";
import * as swaggerUi from "swagger-ui-express";
import * as swaggerDoc from "../src/swagger.json";

export const setupRestEndPoint = (app: Application) => {
  app.use(express.json());
  app.use("/", AppRouter());
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
};
