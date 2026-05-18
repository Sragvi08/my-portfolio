import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between px-7 py-5 border-b border-[#1f1f23]">
      
      {/* Logo / name */}
      <Link href="/" className="font-mono text-sm text-muted hover:text-accent transition-colors">
        <span className="text-accent">~/</span>shragss
      </Link>

      {/* Nav links */}
      <ul className="flex gap-6 list-none">
        {[
          { label: "about", href: "/about" },
          { label: "projects", href: "/projects" },
          { label: "notes", href: "/notes" },
          { label: "resources", href: "/resources" },
        ].map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="font-mono text-sm text-muted hover:text-[#e4e4e7] transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Status indicator */}
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        <span className="font-mono text-[11px] text-[#52525b]">
          learning in public
        </span>
      </div>

    </nav>
  );
}