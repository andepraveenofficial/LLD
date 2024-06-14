import React from 'react'
import HomeDataControlled from './Pages/HomeDataControlled'
import HomeDataNotControlled from './Pages/HomeDataNotControlled'

const App = () => {
  return (
    <div>
      <HomeDataControlled />
      <hr />

      <HomeDataNotControlled />
      <hr />
    </div>
  )
}

export default App