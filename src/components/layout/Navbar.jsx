import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/images/logo.jpg"

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 z-50 bg-white shadow-lg px-5 md:px-12 py-4 flex items-center justify-between">

      {/* Logo Image + Company Name */}
      <div className="flex items-center space-x-3">
        <img
          src={Logo}
          alt="Devi Varahi Global Exims logo"
          className="h-12 md:h-14 object-contain"
        />

      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-gray-700 font-medium text-lg">
        <li><Link to="/" className="hover:text-orange-600 transition">Home</Link></li>
        <li><a href="#about" className="hover:text-orange-600 transition">About</a></li>
        <li><a href="#products" className="hover:text-orange-600 transition">Products</a></li>
        <li><a href="#contact" className="hover:text-orange-600 transition">Contact</a></li>
      </ul>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-2xl text-gray-700 hover:text-orange-600 transition"
        onClick={() => setOpen(!open)}
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <ul className="absolute top-20 left-0 w-full bg-white flex flex-col items-center space-y-6 py-8 text-gray-700 font-semibold shadow-md text-xl md:hidden">
          <li><Link to="/" onClick={() => setOpen(false)} className="hover:text-orange-600">Home</Link></li>
          <li><a href="#about" onClick={() => setOpen(false)} className="hover:text-orange-600">About</a></li>
          <li><a href="#products" onClick={() => setOpen(false)} className="hover:text-orange-600">Products</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)} className="hover:text-orange-600">Contact</a></li>
        </ul>
      )}

    </nav>
  );
}
