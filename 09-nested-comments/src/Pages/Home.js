import React from 'react'
import Comment from '../Components/Comment'

import { data } from '../Utils/hardCode'

const Home = () => {
    // console.log(data)
    return (
        <div>
            <h1 className='text-3xl bold'>Nested Comments</h1>

            <div>
                {data.map((comment, index) => <Comment key={index} commentDetails={comment} />)}
            </div>

        </div>
    )
}

export default Home