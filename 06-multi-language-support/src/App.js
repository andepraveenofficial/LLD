import React, { useState } from 'react'
import About from './Pages/About'
import Header from './Layouts/Header'

const App = () => {
  const [language, setLanguage] = useState("english")
  console.log(language)
  return (
    <div>
      <Header setLanguage={setLanguage} />
      <About language={language} />
    </div>
  )
}

export default App