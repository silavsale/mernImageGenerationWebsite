// Import the express in typescript file
import express from "express"
import mongoose from "mongoose"
import * as dotenv from "dotenv"
import morganMiddleware from "./config/morganMiddleware"
dotenv.config()

const app: express.Application = express()

const PORT: string = process.env.PORT || "3000"
app.use(morganMiddleware)
app.get("/", (req, res) => {
  res.send("TypeScript With Express")
})

// Server setup
app.listen(PORT, () => {
  console.log(`Server is up and running @ http://localhost:${PORT}`)
})
