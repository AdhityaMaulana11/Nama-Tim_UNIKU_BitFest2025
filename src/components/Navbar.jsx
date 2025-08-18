import { useState } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import logoUCIC from "../assets/cic-logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-12 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center" aria-label="UCIC Cirebon">
          <img src={logoUCIC} alt="UCIC Logo" className="h-14 w-auto" />
        </a>

        {/* Desktop View */}
        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex space-x-8 text-[#0a2540] font-medium">
            <li>
              <a
                href="#"
                className="text-blue-800 border-b-2 border-yellow-400 pb-1"
              >
                Beranda
              </a>
            </li>

            {/* Tentang UCIC */}
            <li className="relative group">
              <button
                type="button"
                className="flex items-center space-x-1 hover:text-blue-800"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span>Tentang UCIC</span>
                <FiChevronDown className="text-sm" />
              </button>

              {/* Wrapper - hover */}
              <div
                className="
                  absolute left-0 top-full pt-3 z-40
                  opacity-0 invisible pointer-events-none translate-y-1
                  group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-hover:translate-y-0
                  transition
                "
              >
                <ul className="w-56 bg-white shadow-lg rounded-md py-2">
                  <li>
                    <a
                      href="#sambutan-rektor"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Sambutan Rektor
                    </a>
                  </li>
                  <li>
                    <a
                      href="#visi-misi"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Visi, Misi, & Tujuan
                    </a>
                  </li>
                  <li>
                    <a
                      href="#sejarah-cic"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Sejarah CIC
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            {/* Akademik */}
            <li className="relative group">
              <button
                type="button"
                className="flex items-center space-x-1 hover:text-blue-800"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span>Akademik</span>
                <FiChevronDown className="text-sm" />
              </button>

              <div
                className="
                  absolute left-0 top-full pt-3 z-40
                  opacity-0 invisible pointer-events-none translate-y-1
                  group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-hover:translate-y-0
                  transition
                "
              >
                <ul className="w-72 bg-white shadow-lg rounded-md py-2">
                  <li>
                    <a
                      href="#fti"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Fakultas Teknologi & Informasi (FTI)
                    </a>
                  </li>
                  <li>
                    <a
                      href="#feb"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Fakultas Ekonomi & Bisnis (FEB)
                    </a>
                  </li>
                  <li>
                    <a
                      href="#fps"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Fakultas Pendidikan & Sains
                    </a>
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
              <a
                href="#"
                className="text-blue-800 border-b-2 border-yellow-400 pb-1"
              >
                Beranda
              </a>
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
                  <a href="#fti">Fakultas Teknologi & Informasi (FTI)</a>
                </li>
                <li>
                  <a href="#feb">Fakultas Ekonomi & Bisnis (FEB)</a>
                </li>
                <li>
                  <a href="#fps">Fakultas Pendidikan & Sains</a>
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
