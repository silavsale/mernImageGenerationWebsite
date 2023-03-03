import express from "express"
import * as dotenv from "dotenv"
import { Configuration, OpenAIApi } from "openai"
import { Request, Response } from "express"
dotenv.config()
const router = express.Router()

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY,
})

const openAI = new OpenAIApi(configuration)

const generateImageRouter = router.post("/generateImage", async (req: Request, res: Response) => {
  try {
    console.log("req.body.description", req.body.description)

    const response = await openAI.createImage({
      prompt: req.body.description,
      n: 1,
      size: "256x256",
    })

    const imageUrl = response.data.data[0].url

    // res.status(200).json(imageUrl)
    res.status(200).json({
      image: imageUrl,
    })
  } catch (error) {
    console.error(console.error(error))
  }
})

export default generateImageRouter
