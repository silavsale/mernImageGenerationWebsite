// Import the express in typescript file
import express from "express"
import * as dotenv from "dotenv"
import morganMiddleware from "./config/morganMiddleware"
import connect from "./db/mongodb"
import bodyParser from "body-parser"
import userRoute from "./routes/user.routes"
import routes from "./routes"
import { Request, Response } from "express"

dotenv.config()
console.log(userRoute)

const app: express.Application = express()
const db = process.env.MONGODB_URL
const PORT: string = process.env.PORT || "3000"

app.use(morganMiddleware)
app.use(bodyParser.json())

app.get("/", (req: Request, res: Response) => {
  res.send("TypeScript With Express")
})


// Server setup
app.listen(PORT, () => {
  console.log(`Server is up and running @ http://localhost:${PORT}`)
})

connect({ db })
routes({ app })
