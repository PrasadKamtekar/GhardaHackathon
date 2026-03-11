import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Shield, Menu, X, Home, UserPlus, Scan, LayoutDashboard } from "lucide-react"

const navLinks = [
  { to: "/", label: "Home", icon: Home },
  { to: "/register", label: "Register", icon: UserPlus },
  { to: "/scanner", label: "Gate Scanner", icon: Scan },
  { to: "/admin", label: "Admin", icon: LayoutDashboard },
]

export default function Navbar() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">

        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-lg">
            <Shield size={20} />
            SmartGate
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
            {navLinks.map((item) => {
              const active = location.pathname === item.to
              const IconComponent = item.icon

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`flex items-center gap-2 ${
                    active ? "text-blue-400" : "text-gray-300"
                  }`}
                >
                  <IconComponent size={18} />
                  {item.label}
                </Link>
              )
            })}
          </div>

          {/* Button */}
          <Link
            to="/register"
            className="hidden md:block bg-blue-600 px-4 py-2 rounded"
          >
            New Visitor
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col gap-3 pb-4">

            {navLinks.map((item) => {
              const IconComponent = item.icon

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className="flex items-center gap-2 text-gray-300"
                  onClick={() => setMenuOpen(false)}
                >
                  <IconComponent size={18} />
                  {item.label}
                </Link>
              )
            })}

          </div>
        )}

      </div>
    </nav>
  )
}