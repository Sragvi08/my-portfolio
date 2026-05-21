import Link from "next/link";

export default function AboutPage() {
  return (
    <main style={{ padding: "3rem 2rem", maxWidth: "680px", margin: "0 auto" }}>
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
            marginBottom: "1.5rem",
          }}
        >
          Hey, I&apos;m Sragvi!
        </h1>
        <p
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "14px",
            color: "#71717a",
            lineHeight: 1.8,
            marginBottom: "1rem",
          }}
        >
          I&apos;m a master&apos;s student in cybersecurity, currently figuring
          out how all of this fits together — networking, malware, exploitation,
          defense. This is where I document that process publicly.
        </p>
        <p
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "14px",
            color: "#71717a",
            lineHeight: 1.8,
          }}
        >
          I&apos;m not an expert. I&apos;m someone who finds this field
          genuinely interesting and is putting in the work to get good at it.
          These notes are written for my future self first — if they help
          someone else too, even better.
        </p>
      </div>

      <hr
        style={{
          border: "none",
          borderTop: "0.5px solid #1f1f23",
          marginBottom: "3rem",
        }}
      />

      {/* Currently */}
      <div style={{ marginBottom: "3rem" }}>
        <p
          style={{
            fontFamily: "var(--font-mono-var), monospace",
            fontSize: "10px",
            color: "#3f3f46",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}
        ></p>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[
            { label: "studying", value: "MS Cybersecurity — NJIT" },
            {
              label: "practicing",
              value: "TryHackMe, HackTheBox, OverTheWire",
            },
            {
              label: "reading",
              value: "Practical Malware Analysis — Sikorski & Honig",
            },
            {
              label: "interested in",
              value: "malware analysis, threat hunting, blue team ops",
            },
          ].map((item) => (
            <div key={item.label} style={{ display: "flex", gap: "2rem" }}>
              <span
                style={{
                  fontFamily: "var(--font-mono-var), monospace",
                  fontSize: "11px",
                  color: "#3f3f46",
                  width: "100px",
                  flexShrink: 0,
                  paddingTop: "2px",
                }}
              >
                {item.label}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontSize: "14px",
                  color: "#a1a1aa",
                  lineHeight: 1.6,
                }}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <hr
        style={{
          border: "none",
          borderTop: "0.5px solid #1f1f23",
          marginBottom: "3rem",
        }}
      />

      {/* Background */}
      <div style={{ marginBottom: "3rem" }}>
        <p
          style={{
            fontFamily: "var(--font-mono-var), monospace",
            fontSize: "10px",
            color: "#3f3f46",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}
        ></p>
        <p
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "14px",
            color: "#71717a",
            lineHeight: 1.8,
            marginBottom: "1rem",
          }}
        >
          Write 2-3 honest sentences about your background here. Where did you
          study before? What got you into cybersecurity?
        </p>
        <p
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "14px",
            color: "#71717a",
            lineHeight: 1.8,
          }}
        >
          What are you working toward? What kind of role or area of security
          interests you most?
        </p>
      </div>

      <hr
        style={{
          border: "none",
          borderTop: "0.5px solid #1f1f23",
          marginBottom: "3rem",
        }}
      />

      {/* Why this site */}
      <div style={{ marginBottom: "3rem" }}>
        <p
          style={{
            fontFamily: "var(--font-mono-var), monospace",
            fontSize: "10px",
            color: "#3f3f46",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}
        ></p>
        <p
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "14px",
            color: "#71717a",
            lineHeight: 1.8,
            marginBottom: "1rem",
          }}
        >
          I built this to force myself to write about what I&apos;m learning.
          Writing makes you realize what you actually understand versus what you
          just think you understand.
        </p>
        <p
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "14px",
            color: "#71717a",
            lineHeight: 1.8,
          }}
        >
          It also serves as a portfolio — but one that shows process, not just
          outcomes. Anyone can list tools on a resume. Fewer people can explain
          clearly why EternalBlue works or what confused them about a concept
          and how they resolved it.
        </p>
      </div>

      <hr
        style={{
          border: "none",
          borderTop: "0.5px solid #1f1f23",
          marginBottom: "3rem",
        }}
      />

      {/* Links */}
      <div>
        <p
          style={{
            fontFamily: "var(--font-mono-var), monospace",
            fontSize: "10px",
            color: "#3f3f46",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}
        ></p>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[
            { label: "github", href: "https://github.com/Sragvi08" },
            {
              label: "linkedin",
              href: "https://www.linkedin.com/in/sragvi-shetty-143143229/",
            },
            { label: "email", href: "mailto:sragv.ii12@gmail.com" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2rem",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono-var), monospace",
                  fontSize: "11px",
                  color: "#3f3f46",
                  width: "100px",
                }}
              >
                {link.label}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono-var), monospace",
                  fontSize: "11px",
                  color: "#71717a",
                }}
              >
                {link.href} →
              </span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
