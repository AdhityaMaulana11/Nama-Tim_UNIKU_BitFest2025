import aboutImg from "../../assets/Gedung-UCIC-2.png";
import { akademikData } from "../../data/akademikData";

export default function AkademikAbout({ fakultasName }) {
  const fakultas = akademikData.find((f) => f.nama === fakultasName);
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
      <h2 className="text-yellow-500 font-semibold">Sekilas Tentang</h2>
      <h3 className="text-3xl md:text-4xl font-bold text-[#0a2540] mt-2">
        {fakultasName}
      </h3>

      <div className="mt-6 flex flex-col md:flex-row md:items-center gap-10">
        <div className="md:w-2/3 space-y-4 text-gray-700 leading-relaxed">
          <p className="text-justify">
            {fakultas?.konten || "Konten tidak tersedia"}
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <img
            src={aboutImg}
            alt={`Sekilas ${fakultasName}`}
            className="rounded-xl shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
