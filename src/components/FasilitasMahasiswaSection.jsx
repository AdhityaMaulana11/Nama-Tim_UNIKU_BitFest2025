import LabKomputer from "../assets/images/Ruang-Lab-Komputer-2.png";
import SanFrancisco from "../assets/images/Ruang-San-Francisco.png";
import Perpustakaan from "../assets/images/Perpustakaan.png";
import Auditorium from "../assets/images/Ruang-Auditorium-2.png";
import LabPemrograming from "../assets/images/Lab-Programming.png";
import Aula from "../assets/images/aula.png";
import RuangKelas1 from "../assets/images/Ruang-Kelas-1.png";
import RuangKelas2 from "../assets/images/Ruang-Kelas-3.png";

const fasilitas = [
  { id: "a", title: "Lab Komputer", image: LabKomputer },
  { id: "b", title: "San Francisco", image: SanFrancisco },
  { id: "c", title: "Perpustakaan", image: Perpustakaan },
  { id: "d", title: "Auditorium", image: Auditorium },
  { id: "e", title: "Lab Pemrograming", image: LabPemrograming },
  { id: "f", title: "Aula", image: Aula },
  { id: "g", title: "Ruang Kelas", image: RuangKelas1 },
  { id: "h", title: "Ruang Kelas", image: RuangKelas2 },
];

export default function FasilitasMahasiswaSection() {
  return (
    <section className="py-16 bg-white">
      {/* Judul */}
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0A2342] mb-10">
        FASILITAS MAHASISWA
      </h2>

      {/* Grid images */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="fasilitas-grid gap-4">
          {fasilitas.map((item) => (
            <div
              key={item.id}
              className={`relative rounded-2xl overflow-hidden shadow-lg group area-${item.id}`}
            >
              {/* Gambar */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
              />

              {/* Overlay & Text */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-white font-semibold text-sm md:text-base">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
