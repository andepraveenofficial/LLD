import React from 'react'

import Child from "./Child"
import { useSelector } from 'react-redux'

const Parent = () => {
  const parentStore = useSelector(store => store.parent);
console.log(parentStore)
  return (
    <div>
      Parent
      <Child/>
    </div>
  )
}

export default Parent
