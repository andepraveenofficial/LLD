import React from 'react'
import NormalComponent, { RedComponent } from './Components/NormalComponent'


const HOC = RedComponent(NormalComponent)

const App = () => {
  return (
    <div>
      <NormalComponent/>
      <hr/>

      <HOC/>
      <hr/>

    </div>
  )
}

export default App
