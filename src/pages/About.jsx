import { motion } from "framer-motion";
import { FaGlobe, FaCheckCircle, FaHandshake } from "react-icons/fa";
import Logo from "../assets/images/logo.jpg"

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-white flex items-center py-16 px-6 md:px-14 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-orange-600 text-center"
        >
          About Us
        </motion.h2>

        {/* Two Column Layout */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Image */}
          <motion.img
            src={Logo}
            alt="Agro export"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full h-[320px] md:h-[520px] object-cover rounded-2xl shadow-lg"
          />

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6 text-center md:text-left"
          >
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              We are committed to supplying premium agri-commodities worldwide through
              ethical sourcing, rigorous quality control, and a reliable global network.
              Our mission is to bring farm-fresh value to international markets with
              long-term partnerships built on trust.
            </p>

            {/* Modern Feature Cards */}
            <div className="space-y-5 mt-8">

              <motion.div
                whileHover={{ scale: 1.04 }}
                className="flex items-center space-x-4 bg-gray-50 p-4 rounded-xl shadow-sm"
              >
                <FaGlobe className="text-orange-500 text-2xl" />
                <span className="text-gray-700 font-medium text-lg">
                  Global Export Network
                </span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.04 }}
                className="flex items-center space-x-4 bg-gray-50 p-4 rounded-xl shadow-sm"
              >
                <FaCheckCircle className="text-orange-500 text-2xl" />
                <span className="text-gray-700 font-medium text-lg">
                  100% Quality Assurance
                </span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.04 }}
                className="flex items-center space-x-4 bg-gray-50 p-4 rounded-xl shadow-sm"
              >
                <FaHandshake className="text-orange-500 text-2xl" />
                <span className="text-gray-700 font-medium text-lg">
                  Ethical & Trusted Sourcing
                </span>
              </motion.div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
