import React from "react"
import { useNavigate } from "react-router-dom"

function LandingPage() {

  const navigate = useNavigate()

  const startRegistration = () => {
    navigate("/home/register")
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-300 text-white text-center">

      <h1 className="text-5xl font-bold mb-6">
        Smart Visitor Management System
      </h1>

      <p className="max-w-xl mb-10 text-lg">
        Pre-authorize your visit to industrial facilities,
        complete safety training, and enter securely
        using AI verification and digital gate pass.
      </p>

      <button
        onClick={startRegistration}
        className="bg-white text-black px-8 py-3 rounded-lg font-semibold shadow hover:bg-gray-200 transition"
      >
        Start Registration
      </button>

    </div>
  )
}

export default LandingPage