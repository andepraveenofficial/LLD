import { useEffect, useState } from 'react'

const useMemesData = () => {
        const [memesList, setMemesList] = useState(null)

    // Methods
    const getMemesData = async () => {
        const url = "https://meme-api.com/gimme/20"
        const response = await fetch(url)
        const data = await response.json()
        // console.log(data.memes)
        setMemesList(data.memes)
    }

    // Side Effects
    useEffect(() => {
        getMemesData()
    }, [])
  return memesList
}

export default useMemesData