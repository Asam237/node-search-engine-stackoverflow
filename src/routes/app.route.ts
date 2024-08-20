import { Router } from "express";
import appController from "../controllers/app.controller";

export const AppRouter = () => {
  const router = Router();
  router.get(`/search`, appController.search);
  return router;
};
