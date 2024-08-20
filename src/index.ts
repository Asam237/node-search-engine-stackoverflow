import express from "express";

const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`[Server]: connected to ${PORT}`);
});
