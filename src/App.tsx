import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Blog from "./pages/Blog"

function App() {

  return (
    <div className="relative min-h-screen">
      <Router>
        <NavBar/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
