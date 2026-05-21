export default function ResourcesPage() {
  const resources = [
    {
      category: "// books",
      items: [
        {
          title: "Practical Malware Analysis",
          author: "Sikorski & Honig",
          status: "reading",
          notes: "The go-to book for malware analysis. Dense but worth it.",
          link: "https://nostarch.com/malware",
        },
        {
          title: "The Web Application Hacker's Handbook",
          author: "Stuttard & Pinto",
          status: "planned",
          notes: "Comprehensive web security reference.",
          link: null,
        },
        {
          title: "Hacking: The Art of Exploitation",
          author: "Jon Erickson",
          status: "planned",
          notes: "Low-level exploitation fundamentals.",
          link: null,
        },
      ],
    },
    {
      category: "// platforms",
      items: [
        {
          title: "TryHackMe",
          author: "tryhackme.com",
          status: "active",
          notes:
            "Best platform for guided learning. Where I spend most of my practice time.",
          link: "https://tryhackme.com",
        },
        {
          title: "HackTheBox",
          author: "hackthebox.com",
          status: "active",
          notes: "More challenging, less guided. Good for pushing yourself.",
          link: "https://hackthebox.com",
        },
        {
          title: "OverTheWire",
          author: "overthewire.org",
          status: "active",
          notes:
            "War games for learning Linux and basic exploitation concepts.",
          link: "https://overthewire.org",
        },
        {
          title: "Let's Defend",
          author: "letsdefend.io",
          status: "planned",
          notes: "Blue team focused platform. SOC analyst training.",
          link: "https://letsdefend.io",
        },
      ],
    },
    {
      category: "// tools",
      items: [
        {
          title: "Wireshark",
          author: "network analysis",
          status: "learning",
          notes: "Packet analysis. Essential for network forensics.",
          link: "https://wireshark.org",
        },
        {
          title: "Ghidra",
          author: "reverse engineering",
          status: "learning",
          notes:
            "NSA's open source reverse engineering framework. Using it for PMA labs.",
          link: "https://ghidra-sre.org",
        },
        {
          title: "Metasploit",
          author: "exploitation framework",
          status: "learning",
          notes: "Industry standard exploitation framework.",
          link: "https://metasploit.com",
        },
      ],
    },
  ];

  return (
    <main style={{ padding: "3rem 2rem", maxWidth: "720px", margin: "0 auto" }}>
      {/* Header */}
      <div style={{ marginBottom: "3rem" }}>
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
          Resources & Reading
        </h1>
        <p
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "14px",
            color: "#71717a",
            lineHeight: 1.7,
          }}
        >
          Books, platforms, and tools I actually use or plan to. Not a curated
          awesome list — just what&apos;s on my radar.
        </p>
      </div>

      {/* Resource sections */}
      <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        {resources.map((section) => (
          <div key={section.category}>
            <p
              style={{
                fontFamily: "var(--font-mono-var), monospace",
                fontSize: "10px",
                color: "#3f3f46",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              {section.category}
            </p>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "1px" }}
            >
              {section.items.map((item) => (
                <div
                  key={item.title}
                  style={{
                    padding: "1rem 0",
                    borderBottom: "0.5px solid #111113",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: "1rem",
                      marginBottom: "0.4rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontFamily: "var(--font-syne), sans-serif",
                            fontSize: "14px",
                            fontWeight: 500,
                            color: "#e4e4e7",
                            textDecoration: "none",
                          }}
                        >
                          {item.title} →
                        </a>
                      ) : (
                        <span
                          style={{
                            fontFamily: "var(--font-syne), sans-serif",
                            fontSize: "14px",
                            fontWeight: 500,
                            color: "#e4e4e7",
                          }}
                        >
                          {item.title}
                        </span>
                      )}
                      <span
                        style={{
                          fontFamily: "var(--font-mono-var), monospace",
                          fontSize: "10px",
                          color: "#3f3f46",
                        }}
                      >
                        {item.author}
                      </span>
                    </div>
                    <StatusBadge status={item.status} />
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-syne), sans-serif",
                      fontSize: "12px",
                      color: "#52525b",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.notes}
                  </p>
                </div>
              ))}
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
      reading: {
        bg: "rgba(34,211,238,0.1)",
        color: "#22d3ee",
        border: "rgba(34,211,238,0.2)",
      },
      active: {
        bg: "rgba(34,197,94,0.1)",
        color: "#22c55e",
        border: "rgba(34,197,94,0.2)",
      },
      learning: {
        bg: "rgba(168,85,247,0.1)",
        color: "#a855f7",
        border: "rgba(168,85,247,0.2)",
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
