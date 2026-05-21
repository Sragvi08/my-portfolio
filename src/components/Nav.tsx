import Link from "next/link";

export default function Nav() {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "18px 28px",
        borderBottom: "0.5px solid #1f1f23",
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-mono-var), monospace",
          fontSize: "13px",
          color: "#71717a",
          textDecoration: "none",
        }}
      >
        <span style={{ color: "#22d3ee" }}>~/</span>sragvi
      </Link>

      <ul
        style={{
          display: "flex",
          gap: "24px",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        {[
          { label: "about", href: "/about" },
          { label: "projects", href: "/projects" },
          { label: "notes", href: "/notes" },
          { label: "resources", href: "/resources" },
        ].map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              style={{
                fontFamily: "var(--font-mono-var), monospace",
                fontSize: "13px",
                color: "#71717a",
                textDecoration: "none",
              }}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            backgroundColor: "#22d3ee",
            display: "inline-block",
            animation: "pulse 2s infinite",
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-mono-var), monospace",
            fontSize: "11px",
            color: "#52525b",
          }}
        >
          learning in public
        </span>
      </div>
    </nav>
  );
}
