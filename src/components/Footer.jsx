import Logo from "../assets/cic-logo.png";
import { FaInstagram, FaYoutube, FaGlobe, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full" role="contentinfo">
      {/* Atas - Logo */}
      <div className="bg-white py-6 px-4 flex justify-start">
        <img
          src={Logo}
          alt="Logo Universitas Catur Insan Cendekia (UCIC)"
          className="h-20 md:h-24 object-contain"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Tengah - Info & Maps */}
      <div className="bg-[#002E5B] text-white px-6 md:px-16 py-12 flex flex-col md:flex-row md:items-start md:justify-between gap-10">
        {/* Info UCIC */}
        <section className="md:w-1/2 space-y-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">UCIC Cirebon</h2>
            <p className="mt-2 text-lg">
              Join us to fly high,{" "}
              <span className="font-semibold">
                and achieve success together
              </span>
            </p>
          </div>

          <address className="not-italic grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold">Phone Number:</h3>
              <a
                href="tel:+622312000418"
                className="text-gray-200 hover:underline"
              >
                +62 231-2000418
              </a>
            </div>
            <div>
              <h3 className="font-semibold">Email:</h3>
              <a
                href="mailto:info@cic.ac.id"
                className="text-gray-200 hover:underline"
              >
                info@cic.ac.id
              </a>
            </div>
          </address>

          {/* More Info */}
          <nav aria-label="UCIC Social Media">
            <h3 className="font-semibold">More Info:</h3>
            <div className="flex space-x-4 mt-3">
              <a
                href="https://instagram.com/universitas_cic"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram UCIC"
                className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition"
              >
                <FaInstagram size={28} color="#E1306C" />
              </a>
              <a
                href="https://www.youtube.com/@universitascic"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube UCIC"
                className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition"
              >
                <FaYoutube size={28} color="#FF0000" />
              </a>
              <a
                href="https://cic.ac.id"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Website UCIC"
                className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition"
              >
                <FaGlobe size={28} color="#002E5B" />
              </a>
              <a
                href="https://www.facebook.com/stmik.cic.3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook UCIC"
                className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition"
              >
                <FaFacebook size={28} color="#1877F3" />
              </a>
            </div>
          </nav>
        </section>

        {/* Maps Embed */}
        <section className="md:w-1/2" aria-label="UCIC Location">
          <iframe
            title="Lokasi Universitas Catur Insan Cendekia (UCIC) di Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.2951480363427!2d108.55324639999999!3d-6.733801199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f1d8ebc133e3f%3A0x91385801f5822049!2sUniversitas%20Catur%20Insan%20Cendekia%20(CIC)!5e0!3m2!1sen!2sid!4v1755460050174!5m2!1sen!2sid"
            width="100%"
            height="300"
            style={{ border: "0", borderRadius: "12px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </div>

      {/* Copyright */}
      <div className="bg-[#3c3c3c] text-gray-300 text-center py-4 text-sm">
        © 2025 Nama_Kelompok_Kita_Gengs — All Rights Reserved.
      </div>
    </footer>
  );
}
