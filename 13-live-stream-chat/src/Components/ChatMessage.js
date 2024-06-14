import React from 'react'

const ChatMessage = (props) => {
    const { messageDetails, index } = props
    const { name, photo, message } = messageDetails
    return (
        <div className='flex flex-row items-center gap-3'>
            <div className='flex items-center justify-center w-6 h-6 p-2 text-orange-700 rounded-full bg-slate-500'>{photo}</div>
            <p className='font-bold'>{name}</p>
            <p><span>{message}</span> 😃 <span>{index}</span></p>
        </div>
    )
}

export default ChatMessage
