import headerImage from "../../assets/Gedung-UCIC-2.png";

export default function AkademikHeader({ title, subtitle }) {
  return (
    <section
      className="relative w-full h-[400px] md:h-[480px] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${headerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-blue-900/70"></div>
      <div className="relative z-10 max-w-4xl px-6">
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        <p className="mt-2 text-lg italic text-yellow-300">{subtitle}</p>
      </div>
    </section>
  );
}
