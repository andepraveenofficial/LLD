import React, { useState } from 'react'
import { data } from '../Utils/hardCode'

const HomeDataNotControlled = () => {
    const [openIndex, setOpenIndex] = useState(0)

    return (
        <div>
            {data.map((accordionItem, index) => {
                console.log(accordionItem)
                const { id, summary, content } = accordionItem
                const isOpen = openIndex === index

                return (
                    <div key={id} className='border border-amber-900 m-3 p-3 rounded-md  bg-slate-400 w-[500px]' >
                        <div className='flex justify-between cursor-pointer' onClick={() => {
                            !isOpen ? setOpenIndex(index) : setOpenIndex(null)
                        }}>
                            <h1 className=' text-lime-300'>{summary}</h1>
                            <span>{isOpen ? "⬇" : "➡"}</span>
                        </div>

                        {isOpen && <p className=' text-orange-300'>{content}</p>}
                    </div>
                )
            })}

        </div>
    )
}

export default HomeDataNotControlled