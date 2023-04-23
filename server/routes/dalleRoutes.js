import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config(); //populate env variable

const router = express.Router(); // instance router

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration); // instance of openai

router.route("/").get((req, res) => {
  res.send("Hello from DALL-E!");
}); // testing route

export default router;
