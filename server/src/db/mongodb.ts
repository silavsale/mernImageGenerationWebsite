import mongoose from "mongoose"

type TInput = {
  db: string
}
export default ({ db }: TInput) => {
  const connect = () => {
    mongoose
      .connect(db)
      .then(() => {
        // return console.info(`Successfully connected to ${db}`)
        return console.info("Database Connected")
      })
      .catch((error) => {
        console.error("Error connecting to database: ", error)
        return process.exit(1)
      })
  }
  mongoose.set("strictQuery", true)

  connect()

  mongoose.connection.on("disconnected", connect)
}
