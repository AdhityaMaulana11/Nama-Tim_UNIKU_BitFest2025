import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { akademikData } from "../../data/akademikData";

import akademikSecBg from "../../assets/Gedung-UCIC-2.png";

export default function AkademikSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full min-h-screen relative">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${akademikSecBg})` }}
      />
      <div className="absolute inset-0 bg-[#002E5B]/70" aria-hidden="true" />

      {/* Akademik Content */}
      <section className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4">
        <h2 className="text-3xl sm:text-5xl lg:text-5xl font-bold text-white text-center drop-shadow-md mb-10">
          AKADEMIK
        </h2>

        <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl p-4 md:p-6">
          {akademikData.map((fakultas, index) => (
            <div key={index}>
              <button
                onClick={() => toggle(index)}
                className="flex items-center justify-between w-full py-4 border-b border-gray-300 text-left"
              >
                <span className="font-semibold text-gray-800">
                  {fakultas.nama}
                </span>
                {openIndex === index ? (
                  <FiChevronUp className="text-xl text-gray-700" />
                ) : (
                  <FiChevronDown className="text-xl text-gray-700" />
                )}
              </button>

              {openIndex === index && (
                <div className="pl-4 py-2">
                  <ul className="space-y-2 text-gray-700">
                    {fakultas.prodi.map((p, i) => (
                      <li key={i} className="text-sm md:text-base">
                        <span className="font-medium">{p.jenjang}</span> -{" "}
                        {p.nama}{" "}
                        {p.akreditasi && (
                          <span className="text-gray-500">
                            ({p.akreditasi})
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
