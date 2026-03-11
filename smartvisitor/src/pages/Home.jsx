import Navbar from "../components/Navbar.jsx"
import { Outlet } from "react-router-dom"

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F6657]">

      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="flex-1 bg-[#F8FAFC] flex justify-center items-center">
        <Outlet />
      </div>

    </div>
  )
}

export default Home