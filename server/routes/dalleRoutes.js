import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config(); //populate env variable

const router = express.Router(); // instance router

export default router;
