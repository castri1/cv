"use client";

import { useState, useEffect, useCallback } from "react";

export default function SidebarShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Hamburger — visible only on mobile via CSS */}
      <button
        type="button"
        className="sidebar-hamburger"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <svg
          width={20}
          height={20}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          role="img"
          aria-hidden
        >
          <title>Menu</title>
          {open ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      {/* Backdrop */}
      {open && (
        <button
          type="button"
          className="sidebar-backdrop"
          onClick={close}
          aria-label="Close menu"
          tabIndex={-1}
        />
      )}

      {/* Sidebar panel */}
      <aside
        className={`sidebar-panel ${open ? "sidebar-panel--open" : ""}`}
        style={{
          width: 320,
          minWidth: 320,
          background: "var(--bg-elevated)",
          borderRight: "1px solid var(--border-primary)",
          padding: "40px 32px",
          display: "flex",
          flexDirection: "column",
          gap: 32,
        }}
      >
        {children}
      </aside>
    </>
  );
}
