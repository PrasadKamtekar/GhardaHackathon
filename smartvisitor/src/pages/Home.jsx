import Navbar from "../components/Navbar.jsx"
import Stepper from "../components/Stepper.jsx"
import { Outlet, useLocation } from "react-router-dom"

function Home() {
  const location = useLocation()

  const getCurrentStep = () => {
    const path = location.pathname

    if (path.startsWith("/home/register")) return 0
    if (path.startsWith("/home/selfie")) return 1
    if (path.startsWith("/home/training")) return 2
    if (path.startsWith("/home/quiz")) return 3
    if (path.startsWith("/home/pass")) return 4

    return -1
  }

  const currentStep = getCurrentStep()

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <header className="sticky top-0 z-30">
        <div className="bg-[#0F6657]">
          <Navbar />
        </div>
        {currentStep >= 0 && (
          <Stepper currentStep={currentStep} />
        )}
      </header>

      <main className="flex-1 flex justify-center items-start px-4 py-8">
        <Outlet />
      </main>
    </div>
  )
}

export default Home