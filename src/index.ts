import express from "express";
import { PORT } from "./startup/config";

const app = express();

const server = app.listen(PORT, () => {
  console.log(`[Server]: connected o ${PORT}`);
});
