import { useState } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import logoUCIC from "../assets/cic-logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-12 py-4">
        <Link to="/" className="flex items-center" aria-label="UCIC Cirebon">
          <img src={logoUCIC} alt="UCIC Logo" className="h-14 w-auto" />
        </Link>

        {/* Desktop */}
        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex space-x-8 text-[#0a2540] font-medium">
            <li>
              <Link
                to="/"
                className="text-blue-800 border-b-2 border-yellow-400 pb-1"
              >
                Beranda
              </Link>
            </li>

            {/* Tentang UCIC */}
            <li className="relative group">
              <Link
                to="/tentang-ucic"
                className="flex items-center space-x-1 hover:text-blue-800"
              >
                Tentang UCIC
              </Link>
            </li>

            {/* Akademik */}
            <li className="relative group">
              <button
                type="button"
                className="flex items-center space-x-1 hover:text-blue-800"
              >
                <span>Akademik</span>
                <FiChevronDown className="text-sm" />
              </button>
              <div className="absolute left-0 top-full pt-3 z-40 opacity-0 invisible pointer-events-none translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-hover:translate-y-0 transition">
                <ul className="w-72 bg-white shadow-lg rounded-md py-2">
                  <li>
                    <Link
                      to="/akademik/fti"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Fakultas Teknologi & Informasi (FTI)
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/akademik/feb"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Fakultas Ekonomi & Bisnis (FEB)
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/akademik/fps"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Fakultas Pendidikan & Sains
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <a href="#fasilitas" className="hover:text-blue-800">
                Fasilitas
              </a>
            </li>
            <li>
              <a href="#prestasi" className="hover:text-blue-800">
                Prestasi
              </a>
            </li>
            <li>
              <a href="#berita" className="hover:text-blue-800">
                Berita
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-[#0a2540] text-2xl"
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          className="md:hidden bg-white border-t shadow-sm"
          role="dialog"
          aria-label="Mobile menu"
        >
          <ul className="flex flex-col space-y-3 px-6 py-4 text-[#0a2540] font-medium">
            <li>
              <Link
                to="/"
                className="text-blue-800 border-b-2 border-yellow-400 pb-1"
              >
                Beranda
              </Link>
            </li>

            <li>
              <span className="font-semibold">Tentang UCIC</span>
              <ul className="ml-4 mt-2 space-y-2 text-sm">
                <li>
                  <a href="#sambutan-rektor">Sambutan Rektor</a>
                </li>
                <li>
                  <a href="#visi-misi">Visi, Misi, & Tujuan</a>
                </li>
                <li>
                  <a href="#sejarah-cic">Sejarah CIC</a>
                </li>
              </ul>
            </li>

            <li>
              <span className="font-semibold">Akademik</span>
              <ul className="ml-4 mt-2 space-y-2 text-sm">
                <li>
                  <Link to="/akademik/fti">
                    Fakultas Teknologi & Informasi (FTI)
                  </Link>
                </li>
                <li>
                  <Link to="/akademik/feb">
                    Fakultas Ekonomi & Bisnis (FEB)
                  </Link>
                </li>
                <li>
                  <Link to="/akademik/fps">Fakultas Pendidikan & Sains</Link>
                </li>
              </ul>
            </li>

            <li>
              <a href="#fasilitas">Fasilitas</a>
            </li>
            <li>
              <a href="#prestasi">Prestasi</a>
            </li>
            <li>
              <a href="#berita">Berita</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
