import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="relative min-h-screen">
      <Router>
        <NavBar/>
        <Routes>
          <Route index element={<Home/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
