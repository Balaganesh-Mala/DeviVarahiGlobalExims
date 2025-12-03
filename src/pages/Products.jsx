import { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const variantData = {
  Rice: {
    heading: "Rice Variants",
    basmati: ["1121 Basmati", "Pusa Basmati Rice", "Sugandha Basmati", "Sharbati Basmati", "Brown Basmati", "Parboiled Basmati"],
    nonBasmati: ["Ponni Rice", "Matta Rice", "IR64 Rice", "Swarna Rice", "Broken Rice", "Steam Rice"]
  },
  "Tea & Coffee": {
    heading: "Tea & Coffee Variants",
    items: ["Instant Coffee Powder", "Filter Coffee Powder", "Green Tea", "Masala Tea", "Organic Coffee Beans"]
  },
  "Turmeric & Cardamom": {
    heading: "Turmeric & Cardamom Variants",
    items: ["Turmeric Fingers", "Turmeric Powder", "Green Cardamom", "Black Cardamom"]
  },
  "Red Chilli Powder": {
    heading: "Red Chilli Powder Variants",
    items: ["Kashmiri Chilli Powder", "Guntur Chilli Powder", "Byadgi Chilli Powder"]
  },
  "Cumin Seeds": {
    heading: "Cumin Seed Variants",
    items: ["Whole Jeera", "Black Jeera", "Powdered Jeera"]
  },
  "Jaggery": {
    heading: "Jaggery Variants",
    items: ["Cane Jaggery Cubes", "Jaggery Powder", "Organic Liquid Jaggery"]
  }
};

export default function ProductsSection() {
  const [modal, setModal] = useState(null);

  const products = [
    { img: "/rice.jpg", name: "Rice", desc: "Basmati & Non-Basmati varieties" },
    { img: "/tea-coffee.jpg", name: "Tea & Coffee", desc: "Premium blends and powders" },
    { img: "/turmeric.jpg", name: "Turmeric & Cardamom", desc: "Natural dried spices" },
    { img: "/chilli.jpg", name: "Red Chilli Powder", desc: "Dry chilli powders" },
    { img: "/cumin.jpg", name: "Cumin Seeds", desc: "Cleaned and packed seeds" },
    { img: "/jaggery.jpg", name: "Jaggery", desc: "Organic cane jaggery" }
  ];

  return (
    <section id="products" className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-orange-600 text-center"
        >
          Our Premium Products
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              className="bg-gray-50 p-5 rounded-2xl shadow-md overflow-hidden border border-gray-100"
            >
              <img src={p.img} className="w-full h-60 object-cover rounded-xl" />
              <h3 className="text-2xl font-semibold text-gray-800 mt-4 text-center">{p.name}</h3>
              <p className="text-gray-600 mt-2 text-lg text-center">{p.desc}</p>

              <div className="text-center">
                <button
                  onClick={() => setModal(p.name)}
                  className="mt-4 bg-orange-600 text-white px-6 py-2 rounded-xl font-medium hover:bg-orange-700 transition"
                >
                  View Varieties
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ✅ MODAL POPUP */}
        {modal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center px-4">
            <div className="bg-white w-full md:w-2/3 lg:w-1/2 max-h-[80vh] overflow-y-auto rounded-2xl shadow-lg relative p-6">

              {/* Close Button */}
              <button
                onClick={() => setModal(null)}
                className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-black"
              >
                <FaTimes />
              </button>

              {/* Modal Content Dynamically */}
              <h4 className="text-3xl font-bold text-gray-800 mb-6">
                {variantData[modal].heading}
              </h4>

              {modal === "Rice" && (
                <>
                  <h5 className="text-2xl font-bold text-orange-600">Basmati Rice</h5>
                  <ul className="pl-6 space-y-2 mt-2 list-disc text-gray-700 text-lg">
                    {variantData.Rice.basmati.map((v, i) => <li key={i}>{v}</li>)}
                  </ul>

                  <h5 className="text-2xl font-bold text-orange-600 mt-5">Non-Basmati Rice</h5>
                  <ul className="pl-6 space-y-2 mt-2 list-disc text-gray-700 text-lg">
                    {variantData.Rice.nonBasmati.map((v, i) => <li key={i}>{v}</li>)}
                  </ul>
                </>
              )}

              {modal !== "Rice" && (
                <ul className="pl-6 space-y-3 mt-2 list-disc text-gray-700 text-lg">
                  {variantData[modal].items.map((v, i) => <li key={i}>{v}</li>)}
                </ul>
              )}

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
