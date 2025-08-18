function TabButton({ label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-t-lg font-medium transition-all duration-200 
        ${
          isActive
            ? "bg-[#0a3d91] text-white shadow-md"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
    >
      {label}
    </button>
  );
}

export default TabButton;
