import { Main } from "@/types/cv";

interface Props {
  data: Main;
}

// Terminal formatting helpers
const tc = (s: string) => s.toLowerCase().replace(/ /g, "_");
const sh = (s: string) => "// " + tc(s);
const dateBrackets = (s: string) => "[" + s.toLowerCase() + "]";
const companyLine = (company: string, location: string | null) => {
  const base = "$ " + company.toLowerCase();
  return location ? base + " — " + location.toLowerCase() : base;
};
const bulletPrefix = (s: string) => "++ " + s.toLowerCase();

const Divider = ({ green }: { green?: boolean }) => (
  <div
    style={{
      width: "100%",
      height: 1,
      background: green ? "var(--green-primary)" : "var(--border-primary)",
    }}
  />
);

const SectionHeader = ({ title }: { title: string }) => (
  <div
    className="section-header"
    style={{
      fontFamily: "var(--cv-font-code)",
      fontSize: 13,
      fontWeight: 700,
      color: "var(--green-primary)",
    }}
  >
    {sh(title)}
  </div>
);

export default function MainContent({ data }: Props) {
  return (
    <main
      style={{
        flex: 1,
        padding: "40px 48px",
        display: "flex",
        flexDirection: "column",
        gap: 40,
        minWidth: 0,
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span
            style={{
              fontFamily: "var(--cv-font-code)",
              fontSize: 32,
              fontWeight: 700,
              color: "var(--green-primary)",
            }}
          >
            {">"}
          </span>
          <span
            style={{
              fontFamily: "var(--cv-font-code)",
              fontSize: 28,
              fontWeight: 700,
              color: "var(--text-primary)",
            }}
          >
            {data.header.name.toLowerCase()}
          </span>
        </div>
        <div style={{ fontSize: 13, color: "var(--text-secondary)" }}>
          {"// " + data.header.subtitle.toLowerCase()}
        </div>
      </div>

      <Divider green />

      {/* Summary */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <SectionHeader title="Professional Summary" />
        {data.summary.map((para, i) => (
          <p
            key={i}
            style={{
              fontSize: 13,
              color: "var(--text-secondary)",
              lineHeight: 1.7,
            }}
          >
            {para.toLowerCase()}
          </p>
        ))}
      </div>

      <Divider />

      {/* Experience */}
      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <SectionHeader title="Work Experience" />
        {data.experience.map((role, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 16,
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--cv-font-code)",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "var(--text-primary)",
                }}
              >
                {">"} {tc(role.title)}
              </span>
              <span
                style={{
                  fontFamily: "var(--cv-font-code)",
                  fontSize: 12,
                  color: "var(--green-primary)",
                  whiteSpace: "nowrap",
                }}
              >
                {dateBrackets(role.date)}
              </span>
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text-secondary)" }}>
              {companyLine(role.company, role.location)}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                paddingLeft: 16,
              }}
            >
              {role.bullets.map((b, j) => (
                <div
                  key={j}
                  style={{
                    fontSize: 12,
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                  }}
                >
                  <span style={{ fontWeight: 700, color: "var(--green-primary)" }}>++</span>{" " + b.toLowerCase()}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Divider />

      {/* Education */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <SectionHeader title="Education" />
        {data.education.map((edu, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <div
                style={{
                  fontFamily: "var(--cv-font-code)",
                  fontSize: 14,
                  fontWeight: 700,
                  color: "var(--text-primary)",
                }}
              >
                {">"} {edu.degree.toLowerCase()}
              </div>
              <div style={{ fontSize: 12, color: "var(--text-secondary)" }}>
                {companyLine(edu.school, edu.location)}
              </div>
            </div>
            <span
              style={{
                fontFamily: "var(--cv-font-code)",
                fontSize: 12,
                color: "var(--green-primary)",
                whiteSpace: "nowrap",
              }}
            >
              {dateBrackets(edu.date)}
            </span>
          </div>
        ))}
      </div>

      <Divider />

      {/* Achievements */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <SectionHeader title="Notable Achievements" />
        <div
          style={{
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          {data.achievements.map((ach, i) => (
            <div
              key={i}
              style={{
                flex: "1 1 200px",
                border: "1px solid var(--border-primary)",
                padding: 16,
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--cv-font-code)",
                  fontSize: 12,
                  fontWeight: 700,
                  color: "var(--green-primary)",
                }}
              >
                {ach.title ? `[${ach.title.toLowerCase()}]` : "[!]"}
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                }}
              >
                {ach.text.toLowerCase()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
