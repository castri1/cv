import type { Sidebar as SidebarType, ContactItem } from "@/types/cv";
import SidebarShell from "./SidebarShell";

// Terminal formatting helpers
const tc = (s: string) => s.toLowerCase().replace(/ /g, "_");
const sh = (s: string) => "// " + tc(s);

const iconProps = { width: 14, height: 14, fill: "currentColor", "aria-hidden": true, role: "img" } as const;

function ContactIcon({ item }: { item: ContactItem }) {
  if (item.type === "email") {
    return (
      <svg {...iconProps} viewBox="0 0 24 24">
        <title>Email</title>
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    );
  }
  if (item.type === "phone") {
    return (
      <svg {...iconProps} viewBox="0 0 24 24">
        <title>WhatsApp</title>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 0 1-4.106-1.138l-.294-.176-2.862.85.85-2.862-.176-.294A7.96 7.96 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
      </svg>
    );
  }
  if (item.type === "location") {
    return (
      <svg {...iconProps} viewBox="0 0 24 24">
        <title>Location</title>
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
      </svg>
    );
  }
  if (item.url?.includes("github")) {
    return (
      <svg {...iconProps} viewBox="0 0 24 24">
        <title>GitHub</title>
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    );
  }
  if (item.url?.includes("linkedin")) {
    return (
      <svg {...iconProps} viewBox="0 0 24 24">
        <title>LinkedIn</title>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    );
  }
  return null;
}

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
        fontSize: 13,
        fontWeight: 700,
        color: "var(--green-primary)",
        marginBottom: 0,
      }}
    >
      {sh(title)}
    </div>
  );

  return (
    <SidebarShell>
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
            <span style={{ color: "var(--green-primary)", display: "flex", flexShrink: 0 }}>
              <ContactIcon item={item} />
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
              ) : item.type === "email" ? (
                <a
                  href={`mailto:${item.value}`}
                  className="contact-link"
                >
                  {item.value.toLowerCase()}
                </a>
              ) : item.type === "phone" ? (
                <a
                  href={`https://wa.me/${item.value.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  {item.value.toLowerCase()}
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
    </SidebarShell>
  );
}
