import { useState } from "react";
import { FiPlay, FiDownload } from "react-icons/fi";

export default function AkademikProdi({ prodi = [] }) {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-gradient-to-l from-[#002E5B] to-[#0062C1] py-16 text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">
          PROGRAM STUDI
        </h2>

        <div className="space-y-6">
          {prodi.map((p, idx) => {
            const label = `${p.nama} ${p.jenjang}`;
            const isOpen = open === idx;

            return (
              <div key={idx} className="w-full">
                {/* BAR ATAS — sesuai desainmu */}
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="w-full flex items-center gap-3 bg-white text-[#0a2540] text-lg font-semibold px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition"
                  aria-expanded={isOpen}
                  aria-controls={`prodi-panel-${idx}`}
                >
                  <FiPlay
                    className={`text-blue-700 transition ${
                      isOpen ? "rotate-90" : ""
                    }`}
                  />
                  {label}
                  {p.akreditasi && (
                    <span className="ml-auto text-sm font-medium text-blue-700">
                      Akreditasi: {p.akreditasi}
                    </span>
                  )}
                </button>

                {/* PANEL DETAIL — accordion */}
                {isOpen && (
                  <div
                    id={`prodi-panel-${idx}`}
                    className="mt-3 bg-white text-[#0a2540] rounded-2xl shadow-md p-6 leading-relaxed"
                  >
                    {/* Deskripsi */}
                    {p.detail?.deskripsi && (
                      <p className="text-sm md:text-base text-gray-700 whitespace-pre-line">
                        {p.detail.deskripsi}
                      </p>
                    )}

                    {/* Visi */}
                    {p.detail?.visi && (
                      <>
                        <h3 className="mt-8 text-2xl font-bold text-[#0a2540]">
                          Visi
                        </h3>
                        <div className="mt-2 italic border-l-4 border-yellow-400 pl-4 text-gray-800">
                          “{p.detail.visi}”
                        </div>
                      </>
                    )}

                    {/* Misi */}
                    {Array.isArray(p.detail?.misi) &&
                      p.detail.misi.length > 0 && (
                        <>
                          <h3 className="mt-8 text-2xl font-bold text-[#0a2540]">
                            Misi
                          </h3>
                          <ol className="mt-3 list-decimal pl-5 space-y-2 text-gray-700">
                            {p.detail.misi.map((m, i) => (
                              <li key={i}>{m}</li>
                            ))}
                          </ol>
                        </>
                      )}

                    {/* Prospek Lulusan */}
                    {Array.isArray(p.detail?.prospek) &&
                      p.detail.prospek.length > 0 && (
                        <>
                          <h3 className="mt-8 text-2xl font-bold text-[#0a2540]">
                            Prospek Lulusan
                          </h3>
                          <ul className="mt-3 list-disc pl-6 space-y-1 text-gray-700">
                            {p.detail.prospek.map((job, i) => (
                              <li key={i}>{job}</li>
                            ))}
                          </ul>
                        </>
                      )}

                    {/* Tombol Kurikulum */}
                    {p.detail?.kurikulum && (
                      <div className="mt-8">
                        <a
                          href="#"
                          className="inline-flex items-center gap-2 bg-white border px-4 py-2 rounded-xl shadow hover:shadow-md"
                          aria-label={`Unduh ${p.detail.kurikulum}`}
                        >
                          Kurikulum <FiDownload />
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
