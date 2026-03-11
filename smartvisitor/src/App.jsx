import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import SafetyTraining from "./pages/SafetyTraining";
import Quiz from "./pages/Quiz";
import Verification from "./pages/Verification";
import Success from "./pages/Success";
import LandingPage from "./pages/LandingPage";

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

      {/* Catch-all redirect to landing */}
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
}

export default App;