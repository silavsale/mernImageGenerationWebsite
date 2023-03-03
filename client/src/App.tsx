import { useState, useEffect } from "react"
import "./App.css"
import { generateImage } from "./route/route.openai"
import ImageComponent from "./components/Image"
import Spinner from "./components/Spinner"
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
  const [disabled, setDisabled] = useState(false)
  const [buttonClicked, setButtonClicked] = useState(null)

  useEffect(() => {
    if (buttonClicked === true) {
      setDisabled(true)
      const timeoutId = setTimeout(() => setDisabled(false), 7000)
      return () => clearTimeout(timeoutId)
    }
  }, [buttonClicked])

  function handleClick() {
    setButtonClicked(true)
  }

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
      <p className=" font-bold font-mono text-lg">Image Generateion App</p>
      <div className="container">
        {disabled ? <Spinner /> : <ImageComponent src={image.imageUrl} alt={input.description} />}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form">
          <label className="" htmlFor="todo_description font-mono">
            Description
          </label>
          <input
            className="my-input font-mono"
            type="text"
            name="description"
            value={input.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <button
            onClick={handleClick}
            className="button font-mono bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-600"
            disabled={disabled}
          >
            Generate Image
          </button>
        </div>
      </form>
    </div>
  )
}

export default App
