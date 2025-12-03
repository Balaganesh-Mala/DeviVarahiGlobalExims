import { motion } from "framer-motion";
import { FaGlobeAsia, FaCheckDouble, FaHandshake } from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaGlobeAsia />,
      title: "Global Network",
      text: "Strong and efficient export channels across multiple countries and continents."
    },
    {
      icon: <FaCheckDouble />,
      title: "Quality Assurance",
      text: "Rigorous quality testing, clean packaging, and compliance with international standards."
    },
    {
      icon: <FaHandshake />,
      title: "Ethical Sourcing",
      text: "Trusted procurement directly from farmers and certified producers with sustainability."
    }
  ];

  return (
    <section id="why-us" className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-800 text-center"
        >
          Why Choose Us?
        </motion.h2>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-2xl shadow-md border border-gray-100 text-center"
            >
              <div className="text-orange-600 text-4xl flex justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">{f.title}</h3>
              <p className="text-gray-600 mt-3 text-lg leading-relaxed">{f.text}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
