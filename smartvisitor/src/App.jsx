import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import SafetyTraining from "./pages/SafetyTraining";
import Quiz from "./pages/Quiz";
import LandingPage from "./pages/LandingPage";
import Selfie from "./pages/Selfie";
import VisitorPass from "./pages/VisitorPass";

function App() {
  return (
    <Routes>
      {/* Landing Page */}
      <Route path="/" element={<LandingPage />} />

      {/* Layout with Navbar + Stepper */}
      <Route path="/home" element={<Home />}>
        <Route path="register" element={<Register />} />
        <Route path="selfie" element={<Selfie />} />
        <Route path="training" element={<SafetyTraining />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="pass" element={<VisitorPass />} />
      </Route>

      {/* Catch-all redirect to landing */}
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
}

export default App;