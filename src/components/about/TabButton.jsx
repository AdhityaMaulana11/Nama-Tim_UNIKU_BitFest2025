export default function TabButton({ active, children, ...props }) {
  return (
    <button
      {...props}
      className={`
        flex-1 md:flex-none
        px-4 sm:px-6 md:px-8 py-2 sm:py-3
        rounded-full font-semibold sm:font-bold
        text-sm sm:text-base md:text-[1.05rem]
        transition-all duration-200 outline-none
        ${
          active
            ? "bg-[#bfae3c] text-white shadow-md"
            : "border-2 border-[#bfae3c] text-[#bfae3c] hover:bg-[#bfae3c]/20"
        }
      `}
    >
      {children}
    </button>
  );
}
