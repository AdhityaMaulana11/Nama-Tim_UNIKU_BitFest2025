export default function TabButton({ active, children, ...props }) {
  return (
    <button
      {...props}
      className={`
        px-8 py-3 rounded-full font-bold text-[1.1rem] text-white cursor-pointer
        transition-all duration-200 outline-none
        ${
          active
            ? "bg-[#bfae3c] border-0"
            : "border-2 border-[#bfae3c] bg-transparent hover:bg-[#bfae3c]/20"
        }
      `}
    >
      {children}
    </button>
  );
}
