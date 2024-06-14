import React from 'react'
import {useSelector} from "react-redux"

import Parent from "./Parent"

const Grand = () => {
  const store = useSelector(state => state);
  console.log(store)
  return (
    <div>
      Grand
      <Parent/>
    </div>
  )
}

export default Grand
