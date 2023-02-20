import User, { IUser } from "../models/user.model"

interface CreateUserInput {
  firstName: string
  lastName: string
  email: string
  // gender: string;
  // address: string;
}

async function CreateUser({ email, firstName, lastName }: CreateUserInput): Promise<IUser> {
  // const data = await User.create({ email, gender, firstName, lastName, address })

  const user = new User({
    email,
    firstName,
    lastName,
  })
  await user.save()
  console.log("Create New user")

  // return data
  return user
}

export default {
  CreateUser,
}
