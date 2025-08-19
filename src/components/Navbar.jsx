import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import logoUCIC from "../assets/cic-logo.png";
import ScrollLink from "./ScrollLink";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-12 py-4">
        {/* Logo */}
        <ScrollLink
          to="top"
          className="flex items-center"
          disableActive
          aria-label="UCIC Cirebon"
        >
          <img src={logoUCIC} alt="UCIC Logo" className="h-14 w-auto" />
        </ScrollLink>

        {/* Desktop */}
        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex space-x-8 font-medium items-center">
            <li>
              <ScrollLink
                to="top"
                className="text-[#0a2540] hover:text-[#002E5B]"
              >
                Beranda
              </ScrollLink>
            </li>
            <li>
              <NavLink
                to="/tentang-ucic"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#002E5B] border-b-2 border-[#A48F03] pb-1"
                    : "text-[#0a2540] hover:text-[#002E5B]"
                }
              >
                Tentang UCIC
              </NavLink>
            </li>
            {/* Akademik */}
            <li className="relative group">
              <button
                type="button"
                className="flex items-center space-x-1 text-[#0a2540] hover:text-[#002E5B]"
              >
                <span>Akademik</span>
                <FiChevronDown className="text-sm" />
              </button>
              <div className="absolute left-0 top-full pt-3 z-40 opacity-0 invisible pointer-events-none translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-hover:translate-y-0 transition">
                <ul className="w-72 bg-white shadow-lg rounded-md py-2">
                  <li>
                    <NavLink
                      to="/akademik/fti"
                      className={({ isActive }) =>
                        isActive
                          ? "block px-4 py-2 text-[#002E5B] border-l-4 border-[#A48F03]"
                          : "block px-4 py-2 hover:bg-gray-100"
                      }
                    >
                      Fakultas Teknologi & Informasi (FTI)
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/akademik/feb"
                      className={({ isActive }) =>
                        isActive
                          ? "block px-4 py-2 text-[#002E5B] border-l-4 border-[#A48F03]"
                          : "block px-4 py-2 hover:bg-gray-100"
                      }
                    >
                      Fakultas Ekonomi & Bisnis (FEB)
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/akademik/fps"
                      className={({ isActive }) =>
                        isActive
                          ? "block px-4 py-2 text-[#002E5B] border-l-4 border-[#A48F03]"
                          : "block px-4 py-2 hover:bg-gray-100"
                      }
                    >
                      Fakultas Pendidikan & Sains
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            {/* Smooth Scroll Links */}
            <li>
              <ScrollLink
                to="fasilitas"
                className="text-[#0a2540] hover:text-[#002E5B]"
              >
                Fasilitas
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="prestasi"
                className="text-[#0a2540] hover:text-[#002E5B]"
              >
                Prestasi
              </ScrollLink>
            </li>
            <li>
              <NavLink
                to="/warta-ucic"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#002E5B] border-b-2 border-[#A48F03] pb-1"
                    : "text-[#0a2540] hover:text-[#002E5B]"
                }
              >
                Berita
              </NavLink>
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
              <ScrollLink to="top" onClick={() => setIsOpen(false)}>
                Beranda
              </ScrollLink>
            </li>
            <li>
              <NavLink
                to="/tentang-ucic"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#002E5B] border-b-2 border-[#A48F03] pb-1"
                    : "hover:text-[#002E5B]"
                }
              >
                Tentang UCIC
              </NavLink>
            </li>
            <li>
              <span className="font-semibold">Akademik</span>
              <ul className="ml-4 mt-2 space-y-2 text-sm">
                <li>
                  <NavLink
                    to="/akademik/fti"
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#002E5B] border-l-4 border-[#A48F03] pl-2"
                        : "hover:text-[#002E5B]"
                    }
                  >
                    Fakultas Teknologi & Informasi (FTI)
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/akademik/feb"
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#002E5B] border-l-4 border-[#A48F03] pl-2"
                        : "hover:text-[#002E5B]"
                    }
                  >
                    Fakultas Ekonomi & Bisnis (FEB)
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/akademik/fps"
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#002E5B] border-l-4 border-[#A48F03] pl-2"
                        : "hover:text-[#002E5B]"
                    }
                  >
                    Fakultas Pendidikan & Sains
                  </NavLink>
                </li>
              </ul>
            </li>
            {/* Smooth Scroll Links Mobile */}
            <li>
              <ScrollLink to="fasilitas" onClick={() => setIsOpen(false)}>
                Fasilitas
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="prestasi" onClick={() => setIsOpen(false)}>
                Prestasi
              </ScrollLink>
            </li>
            <li>
              <NavLink
                to="/berita-ucic"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#002E5B] border-b-2 border-[#A48F03] pb-1"
                    : "text-[#0a2540] hover:text-[#002E5B]"
                }
              >
                Berita
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
