import React, { useState } from 'react'
import { data1 } from '../Utils/hardCode'

const HomeDataControlled = () => {
    const [accordionList, setAccordionList] = useState(data1)

    // Methods
    const handleAccordionItem = (id) => {
        const updatedAccordionList = accordionList.map((accordionItem) => id === accordionItem.id ? { ...accordionItem, isOpen: !accordionItem.isOpen } : { ...accordionItem, isOpen: false })
        setAccordionList(updatedAccordionList)
    }

    return (
        <div>
            {accordionList.map((accordionItem) => {
                console.log(accordionItem)
                const { id, summary, content, isOpen } = accordionItem

                return (
                    <div key={id} className='border border-amber-900 m-3 p-3 rounded-md  bg-slate-400 w-[500px]' >
                        <div className='flex justify-between cursor-pointer' onClick={() => handleAccordionItem(id)}>
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

export default HomeDataControlled