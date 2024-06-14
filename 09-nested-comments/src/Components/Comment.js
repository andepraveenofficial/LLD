import React from 'react'

const Comment = ({ commentDetails }) => {
    console.log(commentDetails)
    const { username, comment } = commentDetails
    return (
        <div className='border border-l-4  border-l-green-400 p-4  ml-10 m-4 border-orange-500 rounded-md'>
            <h1 className='text-2xl '>{username}</h1>
            <p>{comment}</p>

            {/* Here we are using, Recursion */}
            {commentDetails.replies && commentDetails.replies.map((comment, index) => <Comment key={index} commentDetails={comment} />)}

        </div>
    )
}

export default Comment