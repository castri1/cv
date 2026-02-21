"use client";

import { useState } from "react";

export default function PrintButton() {
  const [loading, setLoading] = useState(false);

  async function handleExport() {
    setLoading(true);
    try {
      const [{ default: html2canvas }, { default: jsPDF }] = await Promise.all([
        import("html2canvas"),
        import("jspdf"),
      ]);

      const element = document.querySelector(".cv-layout") as HTMLElement;
      if (!element) return;

      const scale = 1.5;
      const canvas = await html2canvas(element, {
        scale,
        useCORS: true,
        logging: false,
        backgroundColor: getComputedStyle(document.documentElement)
          .getPropertyValue("--bg-page")
          .trim() || "#0A0A0A",
      });

      // Convert canvas pixels to mm (96dpi → mm: px / scale * 25.4 / 96)
      const pxToMm = (px: number) => (px / scale * 25.4) / 96;
      const pageW = pxToMm(canvas.width);
      const pageH = pxToMm(canvas.height);

      const pdf = new jsPDF({
        orientation: pageW > pageH ? "landscape" : "portrait",
        unit: "mm",
        format: [pageW, pageH],
      });

      pdf.addImage(canvas.toDataURL("image/jpeg", 0.85), "JPEG", 0, 0, pageW, pageH);

      pdf.save("daniel-castrillon-cv.pdf");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleExport}
      type="button"
      disabled={loading}
      className="print-button"
      style={{
        fontFamily: "var(--cv-font-code)",
        fontSize: 12,
        color: "var(--green-primary)",
        background: "transparent",
        border: "1px solid var(--green-primary)",
        padding: "4px 12px",
        cursor: loading ? "wait" : "pointer",
        transition: "background 0.2s, color 0.2s",
        opacity: loading ? 0.6 : 1,
      }}
      onMouseEnter={(e) => {
        if (loading) return;
        (e.currentTarget as HTMLButtonElement).style.background = "var(--green-primary)";
        (e.currentTarget as HTMLButtonElement).style.color = "var(--bg-page)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = "transparent";
        (e.currentTarget as HTMLButtonElement).style.color = "var(--green-primary)";
      }}
    >
      {loading ? "[ ... ]" : "[ pdf ]"}
    </button>
  );
}
