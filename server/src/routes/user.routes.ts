import bcrypt from "bcrypt"
import UserController from "../controllers/user.controller"
import { TRoutesInput } from "../types/routes"
import express from "express"
const app: express.Application = express()

app.post("/api/user", async (req, res) => {
  const user = await UserController.CreateUser({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
  })

  return res.send({ user })
})
