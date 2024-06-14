import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import ShimmerCard from '../Components/ShimmerCard'

const Home = () => {
    const [len, setLen] = useState(10)
    const [showShimmer, setShowShimmer] = useState(false)

    const handleScroll = () => {
        const documentHeight = document.body.scrollHeight;
        const scrollBarPosition = window.scrollY + window.innerHeight
        console.log(scrollBarPosition >= documentHeight)
        if (scrollBarPosition >= documentHeight) {
            setShowShimmer(true)

            // For visualization purpose using timer function
            setTimeout(() => {
                setShowShimmer(false)
                setLen((prev) => prev + 10)
            }, 1000)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    })
    return (
        <div>
            {Array(len).fill(1).map((num, index) => (<Card key={index} />))}
            {showShimmer && Array(10).fill(1).map((num, index) => (<ShimmerCard key={index} />))}
        </div>
    )
}

export default Home