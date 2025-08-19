export default function TabButton({ active, children, ...props }) {
  return (
    <button
      {...props}
      className={`
        px-6 py-3 rounded-full font-bold text-base sm:text-lg transition-all duration-200
        ${
          active
            ? "bg-[#A48F03] border-none text-white"
            : "border-2 border-[#A48F03] bg-transparent text-white hover:bg-[#A48F03]/20"
        }
      `}
    >
      {children}
    </button>
  );
}