import {
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import Logo from "../../assets/images/logo.jpg"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-12 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

        {/* Column 1 — Company Branding */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src={Logo}
            alt="company logo"
            className="h-16 mb-4 object-contain"
          />
          <h3 className="text-2xl font-bold text-orange-500 mb-4">
            Devi Varahi Global Exims
          </h3>
          <p className="text-base leading-relaxed text-center md:text-left">
            Exporting premium agro commodities globally with trust, quality and excellence.
          </p>
          <div className="flex space-x-5 mt-6 text-2xl">
            <a href="#" className="hover:text-white transition"><FaLinkedin /></a>
            <a href="#" className="hover:text-white transition"><FaInstagram /></a>
            <a href="#" className="hover:text-white transition"><FaWhatsapp /></a>
          </div>
        </div>

        {/* Column 2 — Quick Links */}
        <div className="text-center">
          <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-3 text-base">
            <li><a href="#about" className="hover:text-orange-500 transition">About Us</a></li>
            <li><a href="#products" className="hover:text-orange-500 transition">Products</a></li>
            <li><a href="#why-us" className="hover:text-orange-500 transition">Why Choose Us</a></li>
            <li><a href="#testimonials" className="hover:text-orange-500 transition">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-orange-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 — Contact */}
        <div className="flex flex-col items-center md:items-end">

          <h4 className="text-xl font-semibold text-white mb-4">Contact Us</h4>

          <div className="flex items-center space-x-3 mb-3">
            <FaPhoneAlt className="text-orange-500 text-xl" />
            <span>+91 98765 43210</span>
          </div>

          <div className="flex items-center space-x-3 mb-3">
            <FaEnvelope className="text-orange-500 text-xl" />
            <span>contact@devi-varahi.com</span>
          </div>

          <div className="flex items-start space-x-3">
            <FaMapMarkerAlt className="text-orange-500 text-xl mt-1" />
            <span>India</span>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-6 inline-flex items-center justify-center bg-orange-600 text-white px-5 py-3 rounded-xl shadow-md hover:bg-orange-700 transition w-full md:w-auto"
          >
            <FaPaperPlane className="mr-2" /> Send Inquiry
          </button>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        © 2025 Devi Varahi Global Exims. All rights reserved.
      </div>
    </footer>
  );
}
