import { FiArrowRight } from "react-icons/fi";
import cicLogo from "../../assets/cic-logo-big.png";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-white py-16 px-6 md:px-12 lg:px-20 flex flex-col-reverse lg:flex-row items-center lg:items-start gap-12"
    >
      {/* Kiri */}
      <div className="lg:w-1/2">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#002E5B] mb-6 leading-snug">
          TENTANG UCIC
        </h2>
        <p className="text-gray-800 leading-relaxed mb-4">
          <strong>Universitas Catur Insan Cendekia (UCIC)</strong> resmi berdiri
          pada tahun 2019 melalui penggabungan Akademi Perdagangan CIC dan STMIK
          CIC telah memperoleh akreditasi <strong>“Baik”</strong> sebagai
          institusi perguruan tinggi. Saat ini UCIC memiliki tiga fakultas,
          yaitu <strong>Fakultas Ekonomi dan Bisnis</strong>,{" "}
          <strong>Fakultas Teknologi Informasi</strong>, serta{" "}
          <strong>Fakultas Pendidikan dan Sains</strong> dengan fokus pada
          pengembangan ilmu pengetahuan, teknologi, dan kewirausahaan.
        </p>
        <p className="text-gray-800 leading-relaxed mb-8">
          Sebagai holding, UCIC menaungi berbagai unit di bidang pendidikan,
          sosial, dan bisnis, mulai dari sekolah internasional, pusat pelatihan
          bahasa, hingga startup teknologi. Melalui ekosistem ini, UCIC tidak
          hanya mencetak lulusan yang kompeten, tetapi juga berperan aktif dalam
          pengabdian kepada masyarakat dan pembangunan berkelanjutan.
        </p>
        <Link
          to="/tentang-ucic"
          aria-label="Selengkapnya tentang UCIC"
          className="inline-flex items-center gap-2 px-6 py-2.5 
             border border-[#0C2D57] text-[#0C2D57] font-medium 
             rounded-full transition-all duration-300 
             hover:bg-[#A48F03] hover:border-[#A48F03] hover:text-white 
             focus:outline-none focus:ring-2 focus:ring-[#A48F03] focus:ring-offset-2"
        >
          <span>Selengkapnya</span>
          <FiArrowRight
            className="transition-transform duration-300 group-hover:translate-x-1"
            size={18}
          />
        </Link>
      </div>

      {/* Kanan */}
      <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
        <img
          src={cicLogo}
          alt="Logo Universitas Catur Insan Cendekia"
          className="w-48 md:w-64 lg:w-72 h-auto"
          loading="lazy"
        />
      </div>
    </section>
  );
}
