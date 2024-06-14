import React from 'react'

import appStore from './store/appStore'
import { Provider } from 'react-redux'


import Grand from './Components/Grand'

const App = () => {

  return (
    <Provider store={appStore}>
      <div>
         <Grand/>
      </div>
    </Provider>
    
  )
}

export default App
