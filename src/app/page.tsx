import Link from "next/link";
import { getAllNotes } from "@/lib/notes";

export default function Home() {
  const recentNotes = getAllNotes().slice(0, 4);

  return (
    <main style={{ padding: "0 2rem" }}>
      {/* Hero */}
      <section
        style={{
          paddingTop: "4rem",
          paddingBottom: "3rem",
          position: "relative",
        }}
      >
        {/* Terminal decoration */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "4rem",
            textAlign: "right",
            fontFamily: "var(--font-mono-var), monospace",
            fontSize: "11px",
            color: "#22d3ee",
            opacity: 0.25,
            lineHeight: 2,
            display: "none",
          }}
          className="md-terminal"
        >
          <p>$ whoami</p>
          <p>cybersec student</p>
          <p>$ status</p>
          <p>always learning</p>
        </div>

        {/* Tag */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            fontFamily: "var(--font-mono-var), monospace",
            fontSize: "11px",
            color: "#22d3ee",
            background: "rgba(34,211,238,0.08)",
            border: "0.5px solid rgba(34,211,238,0.2)",
            padding: "4px 12px",
            borderRadius: "4px",
            marginBottom: "1.5rem",
            letterSpacing: "0.05em",
          }}
        >
          ms cybersecurity
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 700,
            color: "#fafafa",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            marginBottom: "1rem",
          }}
        >
          Learning in public.
          <br />
          <span style={{ color: "#22d3ee" }}>Breaking things</span> on purpose.
        </h1>

        {/* Subheading */}
        <p
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "15px",
            color: "#71717a",
            lineHeight: 1.8,
            maxWidth: "480px",
            marginBottom: "2rem",
          }}
        >
          This is my public learning journal — not a polished portfolio, but an{" "}
          <span style={{ color: "#a1a1aa" }}>honest record</span> of what
          I&apos;m figuring out. TryHackMe writeups, malware notes, and things I
          found interesting this week.
        </p>

        {/* CTA buttons */}
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <Link
            href="/notes"
            style={{
              fontFamily: "var(--font-mono-var), monospace",
              fontSize: "12px",
              padding: "10px 20px",
              background: "#22d3ee",
              color: "#0a0a0b",
              borderRadius: "4px",
              fontWeight: 500,
              letterSpacing: "0.04em",
              textDecoration: "none",
            }}
          >
            read my notes →
          </Link>
          <Link
            href="/projects"
            style={{
              fontFamily: "var(--font-mono-var), monospace",
              fontSize: "12px",
              padding: "10px 20px",
              background: "transparent",
              color: "#71717a",
              border: "0.5px solid #27272a",
              borderRadius: "4px",
              letterSpacing: "0.04em",
              textDecoration: "none",
            }}
          >
            see projects
          </Link>
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "0.5px solid #1f1f23" }} />

      {/* Currently exploring */}
      <section style={{ padding: "2.5rem 0" }}>
        <p
          style={{
            fontFamily: "var(--font-mono-var), monospace",
            fontSize: "10px",
            color: "#3f3f46",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "1.25rem",
          }}
        ></p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "12px",
          }}
        >
          {[
            {
              icon: "⚑",
              title: "TryHackMe / HTB",
              desc: "room writeups & walkthroughs",
            },
            {
              icon: "◈",
              title: "Malware Analysis",
              desc: "PMA notes & samples",
            },
            {
              icon: "◎",
              title: "Reading Log",
              desc: "books, papers, podcasts",
            },
          ].map((card) => (
            <div
              key={card.title}
              style={{
                background: "#111113",
                border: "0.5px solid #1f1f23",
                borderRadius: "8px",
                padding: "1rem",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono-var), monospace",
                  fontSize: "16px",
                  color: "#22d3ee",
                  marginBottom: "8px",
                }}
              >
                {card.icon}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#e4e4e7",
                  marginBottom: "4px",
                }}
              >
                {card.title}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono-var), monospace",
                  fontSize: "12px",
                  color: "#52525b",
                }}
              >
                {card.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "0.5px solid #1f1f23" }} />

      {/* Recent notes */}
      <section style={{ padding: "2.5rem 0" }}>
        <p
          style={{
            fontFamily: "var(--font-mono-var), monospace",
            fontSize: "10px",
            color: "#3f3f46",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "1.25rem",
          }}
        ></p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {recentNotes.length === 0 ? (
            <p
              style={{
                fontFamily: "var(--font-mono-var), monospace",
                fontSize: "12px",
                color: "#3f3f46",
              }}
            >
              no notes yet — drop a .md file in content/notes/
            </p>
          ) : (
            recentNotes.map((note) => (
              <Link
                key={note.slug}
                href={`/notes/${note.slug}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 0",
                  borderBottom: "0.5px solid #111113",
                  textDecoration: "none",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <NoteTag type={note.type} />
                  <span
                    style={{
                      fontFamily: "var(--font-syne), sans-serif",
                      fontSize: "13px",
                      color: "#a1a1aa",
                    }}
                  >
                    {note.title}
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-mono-var), monospace",
                    fontSize: "10px",
                    color: "#3f3f46",
                    flexShrink: 0,
                    marginLeft: "1rem",
                  }}
                >
                  {formatDate(note.date)}
                </span>
              </Link>
            ))
          )}
        </div>
        <div style={{ marginTop: "1.5rem" }}>
          <Link
            href="/notes"
            style={{
              fontFamily: "var(--font-mono-var), monospace",
              fontSize: "11px",
              color: "#71717a",
              textDecoration: "none",
            }}
          >
            all notes →
          </Link>
        </div>
      </section>
    </main>
  );
}

function NoteTag({ type }: { type: string }) {
  const styles: Record<string, { bg: string; color: string; border: string }> =
    {
      thm: {
        bg: "rgba(34,197,94,0.1)",
        color: "#22c55e",
        border: "rgba(34,197,94,0.2)",
      },
      htb: {
        bg: "rgba(239,68,68,0.1)",
        color: "#ef4444",
        border: "rgba(239,68,68,0.2)",
      },
      note: {
        bg: "rgba(168,85,247,0.1)",
        color: "#a855f7",
        border: "rgba(168,85,247,0.2)",
      },
      book: {
        bg: "rgba(251,191,36,0.1)",
        color: "#fbbf24",
        border: "rgba(251,191,36,0.2)",
      },
      otw: {
        bg: "rgba(59,130,246,0.1)",
        color: "#3b82f6",
        border: "rgba(59,130,246,0.2)",
      },
      malware: {
        bg: "rgba(249,115,22,0.1)",
        color: "#f97316",
        border: "rgba(249,115,22,0.2)",
      },
    };

  const s = styles[type] ?? styles.note;

  return (
    <span
      style={{
        fontFamily: "var(--font-mono-var), monospace",
        fontSize: "9px",
        padding: "2px 6px",
        borderRadius: "3px",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        background: s.bg,
        color: s.color,
        border: `0.5px solid ${s.border}`,
      }}
    >
      {type}
    </span>
  );
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}
