import React, { useEffect, useState } from 'react'
import { liveChatData } from '../Utils/liveChatData'
import ChatMessage from '../Components/ChatMessage'

const Home = () => {
    const [liveChatList, setLiveChatList] = useState(liveChatData)
    const [textInput, setTextInput] = useState("")

    const CHAT_MESSAGES_LIMIT = 21;

    // Methods 
    const fetchData = () => {
        const newMessage = {
            id: new Date(),
            name: "Ande Praveen",
            photo: "A",
            message: "I am Live Message"
        }
        setLiveChatList((prev) => {
            const updatedList = [...prev, newMessage].slice(-CHAT_MESSAGES_LIMIT);
            return updatedList;
        });
    }

    useEffect(() => {
        const timerId = setInterval(() => fetchData(), 1000)
        return () => clearInterval(timerId)
    }, [])

    // Methods
    const handleChatButton = () => {
        const newMessage = {
            id: new Date(),
            name: "New",
            photo: "B",
            message: textInput
        }
        setLiveChatList((prev) => {
            const updatedList = [...prev, newMessage].slice(-CHAT_MESSAGES_LIMIT);
            return updatedList;
        });
        setTextInput("")

    }

    return (
        <div className='p-4 m-4'>
            <h1 className='text-3xl font-bold'>Chat</h1>
            <div className='border border-black rounded-md w-[500px] h-[600px]' >
                <div className='flex flex-col justify-end gap-3 h-[600px] p-4 overflow-y-auto'>
                    {liveChatList.map((messageDetails, index) => <ChatMessage key={index} messageDetails={messageDetails} index={index} />)}
                </div>
            </div>
            <div className='mt-4'>
                <div className='flex gap-2'>
                    <input type="text" className='p-2 border border-orange-400 rounded-md' value={textInput} onChange={(e) => setTextInput(e.target.value)} />
                    <button className='p-2 text-orange-600 rounded-md cursor-pointer bg-slate-500' onClick={handleChatButton}>Chat</button>
                </div>
            </div>
        </div>
    )
}

export default Home