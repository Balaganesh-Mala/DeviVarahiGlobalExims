import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function CertificationsSection() {
  const certifications = [
    { name: "ISO 9001", img: "/iso9001.png" },
    { name: "APEDA", img: "/apeda.png" },
    { name: "FSSAI", img: "/fssai.png" },
    { name: "HACCP", img: "/haccp.png" },
    { name: "Spice Board", img: "/spiceboard.png" },
    { name: "Spice Board", img: "/spiceboard.png" },
    
  ];

  return (
    <section id="certifications" className="bg-white py-20 px-6 md:px-12 relative">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          Our Certifications
        </h2>

        {/* ✅ Infinite auto-scroll carousel */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={900}                   // keeps smooth scrolling effect
          loop={true}                   // loops forever
          slidesPerView={2}
          spaceBetween={30}
          allowTouchMove={false}         // no dragging required for background loop
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 }
          }}
          className="w-full"
        >
          {certifications.map((c, i) => (
            <SwiperSlide key={i} className="flex justify-center items-center">
              <img
                src={c.img}
                alt={c.name}
                className="h-16 md:h-20 object-contain opacity-90 transition"
              />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
