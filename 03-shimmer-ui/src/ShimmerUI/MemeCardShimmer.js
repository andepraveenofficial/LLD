import React from 'react'

const MemeCardShimmer = () => {
    return (
        // Return Dummy Card
            <div className='m-4 shadow-lg p-4 rounded-md bg-slate-200'>
                <div className='w-64 h-72' ></div>
            </div>
        )
}

export default MemeCardShimmer


/* 
// I created an Array with length 10, and fill all items with One's.
Array(10).fill(1).map((num, index) =>
       <div key={index} className='m-4 shadow-lg p-4 rounded-md bg-slate-200'>
           <div className='w-64 h-72' ></div>
       </div>
   )
*/