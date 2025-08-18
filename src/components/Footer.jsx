import Logo from "../assets/cic-logo.png";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Atas - Logo */}
      <div className="bg-white py-6 px-4 flex justify-start">
        <img
          src={Logo}
          alt="UCIC Logo"
          className="h-20 md:h-24 object-contain"
        />
      </div>

      {/* Tengah - Info & Maps */}
      <div className="bg-[#002E5B] text-white px-6 md:px-16 py-12 flex flex-col md:flex-row md:items-start md:justify-between gap-10">
        {/* Info UCIC */}
        <div className="md:w-1/2 space-y-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">UCIC CIREBON</h2>
            <p className="mt-2 text-lg">
              Join us to fly high,{" "}
              <span className="font-semibold">
                and achieve success together
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold">Phone Number:</h3>
              <p className="text-gray-200">+62 231-2000418</p>
            </div>
            <div>
              <h3 className="font-semibold">Email:</h3>
              <p className="text-gray-200">info@cic.ac.id</p>
            </div>
          </div>

          {/* More ingfo */}
          <div>
            <h3 className="font-semibold">More Info:</h3>
            <div className="flex space-x-4 mt-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 bg-white rounded-lg" />
              ))}
            </div>
          </div>
        </div>

        {/* Maps Embeded */}
        <div className="md:w-1/2">
          <iframe
            title="UCIC Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.2951480363427!2d108.55324639999999!3d-6.733801199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f1d8ebc133e3f%3A0x91385801f5822049!2sUniversitas%20Catur%20Insan%20Cendekia%20(CIC)!5e0!3m2!1sen!2sid!4v1755460050174!5m2!1sen!2sid"
            width="100%"
            height="300"
            style={{ border: "0", borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#3c3c3c] text-gray-300 text-center py-4 text-sm">
        © 2025 Nama_Kelompok_Kita_Gengs - All Rights Reserved.
      </div>
    </footer>
  );
}
