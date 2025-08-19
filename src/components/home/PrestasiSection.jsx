import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { prestasiData } from "../../data/prestasiData";

import bgPrestasi from "../../assets/bg-prestasi-section.png";

export default function PrestasiSection() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? prestasiData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === prestasiData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full min-h-screen relative">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgPrestasi})` }}
      />
      <div className="absolute inset-0 bg-[#002E5B]/70" aria-hidden="true" />

      {/* Prestasi */}
      <section
        id="prestasi"
        className="relative z-20 flex flex-col items-center justify-center min-h-screen py-16 px-4"
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center drop-shadow-md mb-10">
          PRESTASI
        </h2>

        {/* Carousel */}
        <div className="flex items-center justify-center relative w-full px-6 md:px-12 lg:px-20">
          {/* Tombol kiri */}
          <button
            onClick={prevSlide}
            aria-label="Slide sebelumnya"
            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 
              bg-white text-black p-2 md:p-3 rounded-full shadow-lg 
              hover:bg-gray-100 transition z-20"
          >
            <FiChevronLeft size={24} />
          </button>

          {/* Carousel Img */}
          <div className="relative flex items-center justify-center w-full max-w-5xl h-[380px] md:h-[420px] lg:h-[460px]">
            {prestasiData.map((item, index) => {
              let position =
                "translate-x-0 scale-75 opacity-0 pointer-events-none";
              let zIndex = 0;

              if (index === current) {
                position = "translate-x-0 scale-110 opacity-100";
                zIndex = 30;
              } else if (index === (current + 1) % prestasiData.length) {
                position =
                  "translate-x-20 sm:translate-x-28 lg:translate-x-32 scale-90 opacity-70";
                zIndex = 20;
              } else if (
                index ===
                (current - 1 + prestasiData.length) % prestasiData.length
              ) {
                position =
                  "-translate-x-20 sm:-translate-x-28 lg:-translate-x-32 scale-90 opacity-70";
                zIndex = 20;
              }

              return (
                <div
                  key={item.id}
                  className={`absolute transition-all duration-700 ease-in-out transform ${position}`}
                  style={{ zIndex }}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-40 sm:w-52 md:w-64 lg:w-72 h-auto object-cover rounded-xl"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-center py-2">
                      <p className="text-yellow-400 font-semibold text-base sm:text-lg">
                        {item.name}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tombol kanan */}
          <button
            onClick={nextSlide}
            aria-label="Slide berikutnya"
            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 
              bg-white text-black p-2 md:p-3 rounded-full shadow-lg 
              hover:bg-gray-100 transition z-20"
          >
            <FiChevronRight size={24} />
          </button>
        </div>

        {/* Deskripsi bawah */}
        <div className="text-center text-white mt-8 max-w-xl mx-auto px-4">
          <h3 className="text-lg md:text-xl font-semibold">
            {prestasiData[current].jurusan}
          </h3>
          <p className="text-sm md:text-base mt-2 leading-relaxed">
            {prestasiData[current].deskripsi}
          </p>
        </div>
      </section>
    </div>
  );
}
