import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Blog from "./pages/Blog"
import Login from "./pages/Login"
import Register from "./pages/Register"
import useAppContext from "./context"

function App() {
  const {state} = useAppContext()
  const {isDarkMode} = state

  return (
    <div className="relative min-h-screen">
      <Router>
        <NavBar/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
