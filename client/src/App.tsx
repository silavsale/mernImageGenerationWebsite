import { useState } from "react"
import "./App.css"
import { generateImage } from "./route/route.openai"
import ImageComponent from "./components/Image"
export interface Iimage {
  description: string
  imageUrl: string
}

function App() {
  const [image, setImage] = useState({
    imageUrl: "https://i.stack.imgur.com/Vkq2a.png",
  })
  const [input, setInput] = useState({
    description: "",
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target

    setInput({
      ...input,
      [name]: value,
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    let imagePayload: string = ""
    imagePayload = await generateImage(input.description)
    console.log("imagePayload", imagePayload)
    setImage({ imageUrl: imagePayload })
    setInput({
      description: "",
    })
  }
  return (
    <div className="App">
      {/* <h1>Image Generateion App</h1> */}
      <p>Image Generateion App</p>
      <ImageComponent src={image.imageUrl} alt={input.description} />

      <form onSubmit={handleSubmit}>
        <div>
          <label className="" htmlFor="todo_description">
            Description
          </label>
          <input
            className="my-input"
            type="text"
            name="description"
            value={input.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <button className="button">Generate Image</button>
        </div>
      </form>
    </div>
  )
}

export default App
