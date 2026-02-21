import { Sidebar as SidebarType } from "@/types/cv";

// Terminal formatting helpers
const tc = (s: string) => s.toLowerCase().replace(/ /g, "_");
const sh = (s: string) => "// " + tc(s);

interface Props {
  data: SidebarType;
}

const dotColor: Record<string, string> = {
  green: "var(--green-primary)",
  cyan: "var(--cyan-info)",
  amber: "var(--amber-warning)",
};

export default function Sidebar({ data }: Props) {
  const Divider = () => (
    <div
      style={{
        width: "100%",
        height: 1,
        background: "var(--border-primary)",
      }}
    />
  );

  const SectionHeader = ({ title }: { title: string }) => (
    <div
      className="section-header"
      style={{
        fontFamily: "var(--cv-font-code)",
        fontSize: 12,
        color: "var(--text-primary)",
        marginBottom: 0,
      }}
    >
      {sh(title)}
    </div>
  );

  return (
    <aside
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
      {/* Name block */}
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <div
          style={{
            fontFamily: "var(--cv-font-code)",
            fontSize: 18,
            fontWeight: 700,
            color: "var(--green-primary)",
          }}
        >
          {">"} {data.nameBlock.name.toLowerCase().replace(/ /g, "_")}
        </div>
        <div
          style={{
            fontFamily: "var(--cv-font-code)",
            fontSize: 13,
            color: "var(--text-primary)",
          }}
        >
          {tc(data.nameBlock.title)}
        </div>
        <div style={{ fontSize: 12, color: "var(--text-secondary)" }}>
          {"// " + data.nameBlock.subtitle.toLowerCase()}
        </div>
      </div>

      <Divider />

      {/* Contact */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <SectionHeader title="Contact Info" />
        {data.contact.map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span
              style={{
                fontFamily: "var(--cv-font-code)",
                fontSize: 12,
                fontWeight: 700,
                color: "var(--green-primary)",
              }}
            >
              $
            </span>
            <span
              style={{ fontSize: 12, color: "var(--text-secondary)" }}
            >
              {item.type === "link" ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  {item.value}
                </a>
              ) : (
                item.value.toLowerCase()
              )}
            </span>
          </div>
        ))}
      </div>

      <Divider />

      {/* Key Metrics */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <SectionHeader title="Key Metrics" />
        {data.keyMetrics.map((metric, i) => (
          <div
            key={i}
            style={{
              border: "1px solid var(--border-primary)",
              padding: "12px 16px",
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <div
              style={{
                fontFamily: "var(--cv-font-code)",
                fontSize: 24,
                fontWeight: 700,
                color: metric.accent
                  ? "var(--green-primary)"
                  : "var(--text-primary)",
              }}
            >
              {metric.value}
            </div>
            <div style={{ fontSize: 11, color: "var(--text-secondary)" }}>
              {tc(metric.label)}
            </div>
          </div>
        ))}
      </div>

      <Divider />

      {/* Tech Stack */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <SectionHeader title="Tech Stack" />
        {data.techStack.map((row, i) => (
          <div key={i} style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {row.skills.map((skill, j) => (
              <span
                key={j}
                style={{
                  fontFamily: "var(--cv-font-code)",
                  fontSize: 11,
                  padding: "4px 10px",
                  border: `1px solid ${
                    row.primary
                      ? "var(--green-primary)"
                      : "var(--border-primary)"
                  }`,
                  color: row.primary
                    ? "var(--green-primary)"
                    : "var(--text-primary)",
                }}
              >
                {skill.toLowerCase()}
              </span>
            ))}
          </div>
        ))}
      </div>

      <Divider />

      {/* Certifications */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <SectionHeader title="Certifications" />
        {data.certifications.map((cert, i) => (
          <div
            key={i}
            style={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <div
              style={{
                fontFamily: "var(--cv-font-code)",
                fontSize: 11,
                color: "var(--text-primary)",
              }}
            >
              {cert.name.toLowerCase()}
            </div>
            <div style={{ fontSize: 11, color: "var(--text-secondary)" }}>
              {cert.date}
            </div>
          </div>
        ))}
      </div>

      <Divider />

      {/* Leadership Areas */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <SectionHeader title="Leadership Areas" />
        {data.leadershipAreas.map((item, i) => (
          <div
            key={i}
            style={{ display: "flex", alignItems: "center", gap: 8 }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                flexShrink: 0,
                background: dotColor[item.color],
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontFamily: "var(--cv-font-code)",
                fontSize: 11,
                color: "var(--text-primary)",
              }}
            >
              {tc(item.text)}
            </span>
          </div>
        ))}
      </div>

      <Divider />

      {/* Languages */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <SectionHeader title="Languages" />
        {data.languages.map((item, i) => (
          <div
            key={i}
            style={{ display: "flex", alignItems: "center", gap: 8 }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                flexShrink: 0,
                background: dotColor[item.color],
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontFamily: "var(--cv-font-code)",
                fontSize: 11,
                color: "var(--text-primary)",
              }}
            >
              {tc(item.text)}
            </span>
          </div>
        ))}
      </div>
    </aside>
  );
}
