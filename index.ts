import express from "express";
import { PORT } from "./src/startup/config";
import { setupRestEndPoint } from "./src/server";

const app = express();
setupRestEndPoint(app);

const server = app.listen(PORT, () => {
  console.log(`[Server]: connected to ${PORT}`);
});
