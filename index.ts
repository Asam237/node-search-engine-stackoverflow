import express from "express";
import { PORT } from "./src/startup/config";

const app = express();

const server = app.listen(PORT, () => {
  console.log(`[Server]: connected to ${PORT}`);
});
