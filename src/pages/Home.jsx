import { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import basmatiImg from "../assets/images/BasmatiRice.jpg";
import milletsImg from "../assets/images/millets.jpg";
import turmericImg from "../assets/images/turmeric.jpg";
import mushroomsImg from "../assets/images/mushrooms.jpg";
import "swiper/css";

export default function Home() {
  const images = [
    `${basmatiImg}`,
    `${milletsImg}`,
    `${turmericImg}`,
    `${mushroomsImg}`,
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden">

      {/* ✅ Background Looping Carousel */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        className="absolute top-0 left-0 h-full w-full"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i} className="h-full w-full">
            <img
              src={img}
              alt={`slide-${i}`}
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ Overlay Content (Hero Text + Button) */}
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Devi Varahi Global Exims
        </h2>
        <p className="text-lg md:text-2xl text-gray-200 mt-4 max-w-3xl">
          Your Global Partner in Premium Agro Products
        </p>

        <Link
          to="#products"
          className="mt-8 bg-orange-600 text-white px-7 py-3 rounded-xl text-lg md:text-xl font-semibold hover:bg-orange-700 transition shadow-md"
        >
          Explore Products
        </Link>
      </div>

    </div>
  );
}
