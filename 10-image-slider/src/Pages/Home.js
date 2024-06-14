import React, { useEffect, useState } from 'react'
import { imagesList } from '../Utils/hardCode'


const Home = () => {
    console.log(imagesList[0])

    const [active, setActive] = useState(0)
    const imagesCount = imagesList.length

    // Methods
    const loadNextImage = () => {
        setActive((prev) => (prev + 1) % imagesCount)
    }

    const loadPrevImage = () => {
        if (active !== 0) {
            setActive((prev) => prev - 1)
        }
        else {
            setActive(imagesCount - 1)
        }
    }

    useEffect(() => {
        const timerId = setInterval(() => {
            loadNextImage()
        }, 3000)

        return () => clearInterval(timerId)
    }, [])



    return (
        <div>
            <div className='p-4 m-4 flex justify-center items-center'>
                <button className='text-4xl border-8 border-orange-500 rounded-lg p-4 bg-gray-400' onClick={loadPrevImage}>Left</button>
                <img className='w-[800px] m-16' src={imagesList[active]} alt="slider" />
                <button className='text-4xl border-8 border-orange-500 rounded-lg p-4  bg-gray-400' onClick={loadNextImage}>Right</button>
            </div>

        </div>
    )
}

export default Home