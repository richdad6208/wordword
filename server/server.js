import "dotenv/config";
import express from "express";
import "./db";
import morgan from "morgan";

const app = express();
const port = 4000;

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
  console.log(`SERVER on💚  port ${port}`);
});
