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

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body; //prompt create from frontend side
    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    }); // generate image

    const image = aiResponse.data.data[0].b64_json; // get image

    res.status(200).json({ photo: image }); // sending back image to frontend
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send(error?.response.data.error.message || "Something went wrong");
  }
});

export default router;
