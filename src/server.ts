import express, { Application } from "express";
import { AppRouter } from "./routes/app.route";

export const setupRestEndPoint = (app: Application) => {
  app.use(express.json());
  app.use("/", AppRouter());
};
