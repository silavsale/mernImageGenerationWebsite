// Import the express in typescript file
import express from "express"
import * as dotenv from "dotenv"
import morganMiddleware from "./config/morganMiddleware"
// import connect from "./db/mongodb"
import cors from "cors"
import bodyParser from "body-parser"
import routes from "./routes"
import { Request, Response } from "express"
import generateImageRouter from "./routes/openAi.routes"
dotenv.config()

const app: express.Application = express()
const db = process.env.MONGODB_URL
const PORT: string = process.env.PORT || "3000"

app.use(morganMiddleware)
app.use(cors())
app.use(bodyParser.json())
app.use("/openAI", generateImageRouter)

app.get("/", (req: Request, res: Response) => {
  res.send("TypeScript With Express")
})

// Server setup
app.listen(PORT, () => {
  console.log(`Server is up and running @ http://localhost:${PORT}`)
})

// connect({ db })
routes({ app })
