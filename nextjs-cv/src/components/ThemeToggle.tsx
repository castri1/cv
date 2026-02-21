"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as "dark" | "light") || "light";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  }

  return (
    <button
      onClick={toggle}
      className="theme-toggle"
      style={{
        position: "fixed",
        top: 12,
        right: 12,
        fontFamily: "var(--cv-font-code)",
        fontSize: 12,
        color: "var(--green-primary)",
        background: "transparent",
        border: "1px solid var(--green-primary)",
        padding: "4px 12px",
        cursor: "pointer",
        zIndex: 1000,
        transition: "background 0.2s, color 0.2s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background =
          "var(--green-primary)";
        (e.currentTarget as HTMLButtonElement).style.color = "var(--bg-page)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = "transparent";
        (e.currentTarget as HTMLButtonElement).style.color =
          "var(--green-primary)";
      }}
    >
      {theme === "dark" ? "[ light ]" : "[ dark ]"}
    </button>
  );
}
