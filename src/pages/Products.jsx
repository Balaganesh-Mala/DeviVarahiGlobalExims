import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import {
  FaPlaneDeparture,
  FaChevronRight,
} from "react-icons/fa6";

// ✅ Importing your actual images
import basmatiImg from "../assets/images/BasmatiRice.jpg";
import milletsImg from "../assets/images/millets.jpg";
import turmericImg from "../assets/images/turmeric.jpg";
import mushroomsImg from "../assets/images/mushrooms.jpg";
import groundnutsImg from "../assets/images/groundnuts.jpg";
import chilliImg from "../assets/images/dryredchilli.jpg";
import mangosteenImg from "../assets/images/mangosteen.jpg";
import moringaPowderImg from "../assets/images/moringa.jpg";
import bambooRiceImg from "../assets/images/bambooRice.jpg";
import brownRiceImg from "../assets/images/brownRice.jpg";
import onionsImg from "../assets/images/onions.jpg";

const variantData = {
  "basmati rice": {
    heading: "Basmati Rice Variants",
    items: ["1121 Steam Basmati", "Pusa Basmati", "Sugandha Basmati", "Sharbati Basmati", "Brown Basmati Rice", "Sella Basmati Rice"]
  },
  millets: {
    heading: "Millets Export Variants",
    items: ["Foxtail Millets", "Pearl Millets (Bajra)", "Finger Millets (Ragi)", "Barnyard Millets", "Organic Mix Millets"]
  },
  turmeric: {
    heading: "Turmeric Varieties",
    items: ["Turmeric Fingers", "Sun Dried Turmeric", "Polished Turmeric", "High Curcumin Turmeric Powder"]
  },
  mushrooms: {
    heading: "Mushrooms Export Types",
    items: ["Button Mushrooms", "Oyster Mushrooms", "Dried Mushrooms", "Mushroom Powder"]
  },
  groundnuts: {
    heading: "Groundnuts (Peanuts)",
    items: ["Bold Kernel", "Java Peanuts", "Blanched Peanuts", "Organic Groundnuts"]
  },
  "red chilli": {
    heading: "Red Chilli & Powder Variants",
    items: ["Guntur Chilli", "Byadgi Chilli", "Kashmiri Chilli Powder", "Sun Dried Red Chilli"]
  },
  mangosteen: {
    heading: "Mangosteen Fruit Grades",
    items: ["Fresh A Grade", "B Grade", "Premium Packed Mangosteen"]
  },
  moringa: {
    heading: "Moringa Export Variants",
    items: ["Natural Moringa Leaf Powder", "Moringa Seed Powder", "Steam Sterilized Moringa Powder"]
  },
  "bamboo rice": {
    heading: "Bamboo Rice Export Grades",
    items: ["Raw Bamboo Rice", "Organic Bamboo Rice", "Cleaned & Packed Bamboo Rice"]
  },
  "brown rice": {
    heading: "Brown Rice Types",
    items: ["Long Grain Brown Rice", "Short Grain Brown Rice", "Organic Brown Rice"]
  },
  onions: {
    heading: "Onions Export Types",
    items: ["Red Onions", "Pink Onions", "Dehydrated Onion Flakes", "Onion Powder"]
  },
  "dehydrate fruit powder": {
    heading: "Dehydrated Fruit & Leaf Powders",
    items: [
      "Dehydrated Mango Powder",
      "Banana Powder",
      "Fresh Mangosteen Powder",
      "Natural Moringa Leaf Powder (No Preservatives)",
      "Dehydrated Mixed Fruit Powder",
      "No Preservatives Added"
    ]
  }
};

export default function ProductsSection() {
  const [modal, setModal] = useState(null);

  const products = [
    {
      img: basmatiImg,
      name: "basmati rice",
      desc: "Premium 1121 rice varieties suitable for global export.",
    },
    {
      img: milletsImg,
      name: "millets",
      desc: "Nutrient-rich organic millets sourced for international markets.",
    },
    {
      img: turmericImg,
      name: "turmeric",
      desc: "High curcumin natural turmeric fingers and powders.",
    },
    {
      img: mushroomsImg,
      name: "mushrooms",
      desc: "Fresh and dried mushrooms suitable for bulk export.",
    },
    {
      img: groundnutsImg,
      name: "groundnuts",
      desc: "Bold kernel peanuts cleaned and packed for quality markets.",
    },
    {
      img: chilliImg,
      name: "red chilli",
      desc: "Export-grade red chilli and authentic chilli powders.",
    },
    {
      img: mangosteenImg,
      name: "mangosteen",
      desc: "Fresh premium mangosteen fruit with export packaging.",
    },
    {
      img: moringaPowderImg,
      name: "dehydrate fruit powder",
      desc: "All natural dehydrated fruit & moringa leaf powders without preservatives.",
      longText:
        "All types of dehydrated fruit powders and high-quality natural moringa leaf powder with no preservatives added.",
    },
    {
      img: bambooRiceImg,
      name: "bamboo rice",
      desc: "Forest harvested bamboo rice cleaned and packed for export.",
    },
    {
      img: brownRiceImg,
      name: "brown rice",
      desc: "Natural brown rice varieties with rich fiber content.",
    },
    {
      img: onionsImg,
      name: "onions", // visualize sidebar
      desc: "Fresh Indian onions available for gulf and europe markets.",
    },
  ];

  return (
    <section id="products" className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-orange-600 text-center mb-12"
        >
          Our Export Products
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <motion.div
              key={p.name}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-50 p-5 rounded-2xl shadow-md border border-gray-100 overflow-hidden"
            >

              <img
                src={p.img}
                alt={p.name}
                className="w-full h-60 object-cover rounded-xl"
              />

              <h3 className="text-2xl font-semibold text-gray-800 mt-4 text-center">
                {p.name}
              </h3>

              <p className="text-gray-600 mt-2 text-lg text-center px-2">
                {p.longText || p.desc}
              </p>

              <div className="text-center">
                <button
                  onClick={() => setModal(p.name)}
                  className="mt-6 bg-orange-600 text-white px-6 py-2 rounded-xl font-medium hover:bg-orange-700 transition"
                >
                  View Variants <FaChevronRight className="inline ml-2" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Modal Popup */}
        <AnimatePresence>
          {modal && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.88 }}
                transition={{ duration: 0.25 }}
                className="bg-white w-full md:w-[520px] max-h-[80vh] overflow-y-auto rounded-2xl shadow-xl relative p-6"
              >
                {/* Close */}
                <button
                  onClick={() => setModal(null)}
                  className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black transition"
                >
                  <FaTimes />
                </button>

                <h4 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2 justify-center md:justify-start">
                  <FaPlaneDeparture className="text-orange-600" />
                  {variantData[modal.toLowerCase()]?.heading || modal}
                </h4>

                {/* Variants List */}
                <ul className="mt-3 space-y-3 pl-5 list-disc text-gray-700 text-lg">
                  {variantData[modal]?.items?.map((v) => (
                    <li key={v}>{v}</li>
                  ))}
                </ul>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
