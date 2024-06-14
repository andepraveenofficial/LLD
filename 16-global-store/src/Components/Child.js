import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { changeData } from '../store/Slices/childSlice'

const Child = () => {
  const childStore = useSelector(store => store.child)
  console.log(childStore)
  const dispatch = useDispatch()
  
  return (
    <div>
      {childStore}  
      <button onClick={() => dispatch(changeData("Child Changed"))}>change child</button>
    </div>
  )
}

export default Child
