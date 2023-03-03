export const generateImage = async (description: string) => {
  try {
    let imageUrl: string = ""

    await fetch("http://localhost:3000/openAI/generateImage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description }),
    })
      .then((response) => response.json())
      .then((data) => (imageUrl = data.image))
    return imageUrl
  } catch (error) {
    console.error(error)
  }
}
