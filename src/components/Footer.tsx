export default function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px 28px",
        borderTop: "0.5px solid #1f1f23",
        marginTop: "4rem",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-mono-var), monospace",
          fontSize: "10px",
          color: "#3f3f46",
        }}
      >
        built with next.js · always a work in progress
      </span>
      <div style={{ display: "flex", gap: "16px" }}>
        <a
          href="https://github.com/Sragvi08"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--font-mono-var), monospace",
            fontSize: "10px",
            color: "#3f3f46",
            textDecoration: "none",
          }}
        >
          github
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--font-mono-var), monospace",
            fontSize: "10px",
            color: "#3f3f46",
            textDecoration: "none",
          }}
        >
          linkedin
        </a>
      </div>
    </footer>
  );
}
