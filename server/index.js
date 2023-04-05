import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express(); // init express app
app.use(cors()); // add additional middleware
app.use(express.json({ limit: "50mb" })); // add additional middleware

app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Hello from DALL.E !",
  });
}); //routes

const startServer = async () => {
  app.listen(8080, () => console.log("Server started on port 8080"));
};

startServer();
