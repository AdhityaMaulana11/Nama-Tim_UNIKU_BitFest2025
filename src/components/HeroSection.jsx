import heroImage from "../assets/ucic-cirebon.jpg";

export default function HeroSection() {
  return (
    <div className="w-full min-h-screen relative">
      {/* Bg img */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-[#002E5B]/60" aria-hidden="true" />

      {/* Isi */}
      <section className="relative z-20 flex flex-col items-center justify-center text-center h-screen px-4">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl text-white leading-snug drop-shadow-md mt-20 md:mt-0">
          Join us to fly high, <b>and</b>
        </h1>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mt-2 drop-shadow-md">
          achieve success together
        </h2>

        <div className="mt-8">
          <span className="px-6 py-2 rounded-full border border-white text-white text-sm sm:text-base font-medium bg-white/10 backdrop-blur-md hover:bg-white hover:text-[#002E5B] transition">
            Universitas Catur Insan Cendekia
          </span>
        </div>
      </section>
    </div>
  );
}
