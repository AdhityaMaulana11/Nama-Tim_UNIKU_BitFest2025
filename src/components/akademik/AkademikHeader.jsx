import headerImage from "../../assets/Gedung-UCIC-2.png";

export default function AkademikHeader({ title, subtitle }) {
  return (
    <section
      className="relative w-full min-h-[400px] md:min-h-[480px] flex flex-col items-center justify-center text-center text-white pt-16"
      style={{
        backgroundImage: `url(${headerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6">
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        <p className="mt-3 text-lg md:text-xl italic text-yellow-300">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
