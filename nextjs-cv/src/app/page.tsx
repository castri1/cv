import { readFileSync } from "fs";
import path from "path";
import { CVData } from "@/types/cv";
import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";

function getCVData(): CVData {
  const filePath = path.join(process.cwd(), "public", "cv-data.json");
  const raw = readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as CVData;
}

export async function generateMetadata() {
  try {
    const data = getCVData();
    return { title: data.meta.title };
  } catch {
    return { title: "CV" };
  }
}

export default function Home() {
  let data: CVData;
  try {
    data = getCVData();
  } catch (e) {
    return (
      <div
        style={{
          padding: 40,
          fontFamily: "'JetBrains Mono', monospace",
          color: "var(--green-primary)",
        }}
      >
        <p>// error loading cv-data.json: {String(e)}</p>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "40px 20px",
        minHeight: "100vh",
        background: "var(--bg-page)",
      }}
    >
      <div
        style={{
          width: 1100,
          maxWidth: "100%",
          background: "var(--bg-page)",
          border: "1px solid var(--green-primary)",
          borderTopWidth: 3,
          display: "flex",
          flexDirection: "row",
          alignSelf: "flex-start",
        }}
        className="cv-layout"
      >
        <Sidebar data={data.sidebar} />
        <MainContent data={data.main} />
      </div>
    </div>
  );
}
