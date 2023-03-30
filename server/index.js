import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express(); // init express app
app.use(cors()); // add additional middleware
app.use(express.json({ limit: "50mb" })); // add additional middleware
