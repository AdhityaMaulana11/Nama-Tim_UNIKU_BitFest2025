function TabButton({ active, children, ...props }) {
  return (
    <button
      {...props}
      style={{
        padding: "0.75rem 2rem",
        borderRadius: "2rem",
        fontWeight: "bold",
        fontSize: "1.1rem",
        border: active ? "none" : "2px solid #bfae3c",
        background: active ? "#bfae3c" : "transparent",
        color: "#fff",
        outline: "none",
        cursor: "pointer",
        transition: "all 0.2s",
      }}
      onMouseOver={e => {
        if (!active) e.target.style.background = "#bfae3c22";
      }}
      onMouseOut={e => {
        if (!active) e.target.style.background = "transparent";
      }}
    >
      {children}
    </button>
  );
}

export default TabButton;
