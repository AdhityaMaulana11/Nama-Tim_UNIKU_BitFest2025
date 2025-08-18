export default function TabButton({ active, children, ...props }) {
  return (
    <button
      {...props}
      className={`
        px-6 py-3 rounded-full font-bold text-base sm:text-lg transition-all duration-200
        ${
          active
            ? "bg-[#bfae3c] border-none text-white"
            : "border-2 border-[#bfae3c] bg-transparent text-white hover:bg-[#bfae3c]/20"
        }
      `}
    >
      {children}
    </button>
  );
}
