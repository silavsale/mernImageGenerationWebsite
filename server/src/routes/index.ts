import { TRoutesInput } from "../types/routes"
import UserController from "../controllers/user.controller"
import { Request, Response } from "express"

export default ({ app }: TRoutesInput) => {
  app.post("/api/user", async (req: Request, res: Response) => {
    const user = await UserController.CreateUser({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
    })
    return res.send({ user })
  })
}
