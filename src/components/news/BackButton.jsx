import { IoIosArrowRoundBack } from "react-icons/io";

export default function BackButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="border-2 border-[#0a3d91] bg-white text-[#0a3d91] rounded-full px-5 py-2 font-semibold mb-6 flex items-center gap-2 hover:bg-[#e3eafc] transition"
      style={{ minHeight: 44 }}
    >
      <IoIosArrowRoundBack size={24} />
      {children || "Kembali"}
    </button>
  );
}
