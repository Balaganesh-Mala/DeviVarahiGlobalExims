import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ahmed Al-Fahmi",
      role: "Importer, UAE",
      rating: 5,
      text: "The product quality was excellent. Delivery was prompt and the export process was seamless."
    },
    {
      name: "Isabella Rossi",
      role: "Supplier, Italy",
      rating: 5,
      text: "Reliable and consistent agro supply. The organic jaggery quality exceeded expectations."
    },
    {
      name: "Karthik Reddy",
      role: "Retailer, India",
      rating: 4.5,
      text: "Premium long-grain rice variants. Packaging was neat and delivery timing was accurate."
    },
    {
      name: "Mariam Al-Zayed",
      role: "Distributor, Qatar",
      rating: 5,
      text: "Best turmeric powder I’ve imported. Bold aroma and zero impurities."
    }
  ];

  return (
    <section
      id="testimonials"
      className="bg-white py-20 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 text-center"
        >
          What Our Clients Say
        </motion.h2>

        {/* Carousel */}
        <div className="mt-14">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2800, disableOnInteraction: false }}
            loop={true}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="w-full"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-gray-50 p-6 rounded-2xl shadow-md border border-gray-100 mx-3"
                >

                  {/* Rating Stars */}
                  <div className="flex justify-center md:justify-start gap-1 text-xl text-yellow-500">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <FaStar key={idx} className={idx < Math.floor(t.rating) ? "" : "opacity-40"} />
                    ))}
                  </div>

                  {/* Client Text */}
                  <p className="text-gray-700 text-lg mt-4 leading-relaxed">
                    {t.text}
                  </p>

                  {/* Client Name & Role */}
                  <div className="mt-6 text-center md:text-left">
                    <h4 className="text-xl font-semibold text-gray-900">
                      {t.name}
                    </h4>
                    <span className="text-gray-500 text-base">
                      {t.role}
                    </span>
                  </div>

                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
