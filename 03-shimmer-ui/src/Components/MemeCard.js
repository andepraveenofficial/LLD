import React from 'react'

const MemeCard = ({ memeData }) => {
    // console.log(memeData)
    const { url, author } = memeData
    return (
        <div className='m-4 shadow-lg p-4 rounded-md'>
            <img src={url} alt="meme" className='w-64 h-72' />
            <p className='text-center'>{author}</p>
        </div>
    )
}

export default MemeCard