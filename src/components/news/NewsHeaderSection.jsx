import BackButton from "./BackButton";

// export default function NewsHeaderSection({ onBack }) {
//   return (
//     <div className="flex items-center gap-4 py-6 px-2 md:px-0">
//       <button
//         onClick={onBack}
//         className="bg-[#0a3d91] text-white rounded-lg px-4 py-2 font-semibold hover:bg-[#002E5B] transition"
//       >
//         &larr; Kembali
//       </button>
//       <h1 className="text-2xl md:text-3xl font-bold text-[#0a3d91] ml-2">WARTA CIC</h1>
//     </div>
//   );
// }

export default function AboutHeaderSection() {
  return (
    <header className="bg-white text-[#0a3d91] text-center">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold drop-shadow-md mb-2">
        Warta UCIC
      </h2>
    </header>
  );
}
