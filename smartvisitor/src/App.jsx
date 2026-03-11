import './App.css'
import Home from './pages/Home'
import Register from './pages/Register'
import SafetyTraining from './pages/SafetyTraining'
import Success from './pages/Success'
import Verification from './pages/Verification'
import Quiz from './pages/Quiz'
import LandingPage from './pages/LandingPage'

import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <Routes>

      {/* Landing Page */}
      <Route path="/" element={<LandingPage />} />

      {/* Layout with Navbar */}
      <Route path="/home" element={<Home />}>

        <Route path="register" element={<Register />} />
        <Route path="training" element={<SafetyTraining />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="verification" element={<Verification />} />
        <Route path="success" element={<Success />} />

      </Route>

    </Routes>
  )
}

export default App