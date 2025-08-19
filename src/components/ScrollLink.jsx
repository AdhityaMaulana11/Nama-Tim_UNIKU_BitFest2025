import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ScrollLink({
  to,
  children,
  onClick,
  className = "",
  activeClassName = "text-[#002E5B] border-b-3 border-[#A48F03] pb-1",
  disableActive = false,
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  const scrollToSection = (id) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const offset = -80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // cek aktif berdasarkan scroll/hash
  useEffect(() => {
    if (to === "top") {
      setIsActive(location.pathname === "/" && !location.hash);
    } else {
      setIsActive(location.hash === `#${to}`);
    }
  }, [location, to]);

  const handleClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      scrollToSection(to);
    } else {
      navigate("/");
      setTimeout(() => scrollToSection(to), 50);
    }
    if (onClick) onClick();
  };

  return (
    <a
      href={to === "top" ? "/" : `#${to}`}
      onClick={handleClick}
      className={`${className} ${
        !disableActive && isActive ? activeClassName : ""
      }`}
    >
      {children}
    </a>
  );
}
