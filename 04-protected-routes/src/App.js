/* -----> Third Party Packages <----- */
import { BrowserRouter, Route, Routes } from "react-router-dom"

/* -----> External Components <----- */
import Home from './Pages/Home'
import About from './Pages/About'
import Learning from './Pages/Learning'
import Header from "./Layouts/Header"
import Login from "./Pages/Login"
import ProtectedRoute from "./Routes/ProtectedRoute"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/about" element={<About />} />
            <Route path="/learning" element={<Learning />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App