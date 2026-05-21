export default function ProjectsPage() {
  const projects = [
    {
      title: "Malware Analysis Lab",
      description:
        "An isolated VM environment for safely analyzing malware samples. Built with FlareVM and REMnux. Documents my setup and analysis workflow.",
      status: "in progress",
      tags: ["malware", "flarevm", "remnux"],
      link: null,
    },
    {
      title: "TryHackMe Writeups",
      description:
        "Documented walkthroughs of completed TryHackMe rooms. Focus on explaining the why behind each step, not just the commands.",
      status: "ongoing",
      tags: ["ctf", "writeups", "thm"],
      link: "/notes",
    },
    {
      title: "Home Lab",
      description:
        "Personal network lab for practicing defensive security. Running pfSense, Security Onion, and a few vulnerable VMs for practice.",
      status: "planned",
      tags: ["networking", "homelab", "defensive"],
      link: null,
    },
  ];

  return (
    <main style={{ padding: "3rem 2rem", maxWidth: "720px", margin: "0 auto" }}>
      <div style={{ marginBottom: "2.5rem" }}>
        <div
          style={{
            fontFamily: "var(--font-mono-var), monospace",
            fontSize: "11px",
            color: "#22d3ee",
            letterSpacing: "0.1em",
            marginBottom: "1rem",
          }}
        ></div>
        <h1
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "2rem",
            fontWeight: 700,
            color: "#fafafa",
            marginBottom: "0.75rem",
          }}
        >
          Things I&apos;ve Built
        </h1>
        <p
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "14px",
            color: "#71717a",
            lineHeight: 1.7,
          }}
        >
          A mix of labs, tools, and ongoing work. Some finished, some in
          progress, some just ideas I&apos;m moving toward.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {projects.map((project) => (
          <div
            key={project.title}
            style={{
              background: "#111113",
              border: "0.5px solid #1f1f23",
              borderRadius: "8px",
              padding: "1.5rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: "1rem",
                marginBottom: "0.75rem",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "#e4e4e7",
                }}
              >
                {project.title}
              </h2>
              <StatusBadge status={project.status} />
            </div>

            <p
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontSize: "13px",
                color: "#71717a",
                lineHeight: 1.7,
                marginBottom: "1rem",
              }}
            >
              {project.description}
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "var(--font-mono-var), monospace",
                      fontSize: "9px",
                      color: "#3f3f46",
                      letterSpacing: "0.06em",
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  style={{
                    fontFamily: "var(--font-mono-var), monospace",
                    fontSize: "11px",
                    color: "#22d3ee",
                    textDecoration: "none",
                  }}
                >
                  view →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, { bg: string; color: string; border: string }> =
    {
      complete: {
        bg: "rgba(34,197,94,0.1)",
        color: "#22c55e",
        border: "rgba(34,197,94,0.2)",
      },
      "in progress": {
        bg: "rgba(251,191,36,0.1)",
        color: "#fbbf24",
        border: "rgba(251,191,36,0.2)",
      },
      ongoing: {
        bg: "rgba(59,130,246,0.1)",
        color: "#3b82f6",
        border: "rgba(59,130,246,0.2)",
      },
      planned: {
        bg: "rgba(63,63,70,0.3)",
        color: "#52525b",
        border: "rgba(63,63,70,0.5)",
      },
    };

  const s = styles[status] ?? styles.planned;

  return (
    <span
      style={{
        fontFamily: "var(--font-mono-var), monospace",
        fontSize: "9px",
        padding: "3px 8px",
        borderRadius: "3px",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        flexShrink: 0,
        background: s.bg,
        color: s.color,
        border: `0.5px solid ${s.border}`,
      }}
    >
      {status}
    </span>
  );
}
