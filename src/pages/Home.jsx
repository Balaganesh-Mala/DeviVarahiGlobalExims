import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import basmatiImg from "../assets/images/BasmatiRice.jpg";
import milletsImg from "../assets/images/millets.jpg";
import turmericImg from "../assets/images/turmeric.jpg";
import mushroomsImg from "../assets/images/mushrooms.jpg";
import "swiper/css";

export default function Home() {
  const images = [basmatiImg, milletsImg, turmericImg, mushroomsImg];

  return (
    <div className="relative h-screen w-full overflow-hidden">

      {/* Background Slider */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        speed={1200}
        className="absolute inset-0 h-full w-full"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              alt={`slide-${i}`}
              className="h-full w-full object-cover animate-zoomSoft"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 🔥 Correct Dark Overlay (not too strong) */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* 🔥 Smooth Gradient (visible + clean) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black/80"></div>

      {/* 🔥 Good Vignette (not overkill) */}
      <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.55)]"></div>

      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-50">
        <h1 className="text-white text-4xl md:text-6xl font-extrabold drop-shadow-2xl">
          Devi Varahi Global Exims
        </h1>

        <p className="text-gray-200 text-lg md:text-2xl mt-4 max-w-3xl drop-shadow-lg">
          Your Global Partner in Premium Agro Products
        </p>

        <a href="#products"
          className="mt-8 px-10 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-full text-lg shadow-lg hover:scale-105 transition-all duration-300"
        >
          Explore Products
        </a>
      </div>

    </div>
  );
}
