import express from "express";
const app = express();
import cors from "cors";
app.use(cors());
import { data } from "./data.js";
app.get("/", (req, res) => {
  res.json(data);
});

app.listen(5000, () => console.log("Api is working"));
