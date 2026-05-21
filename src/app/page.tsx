import Link from "next/link";
import { getAllNotes } from "@/lib/notes";

export default function Home() {
  const recentNotes = getAllNotes().slice(0, 4);

  return (
    <main>
      {/* Hero */}
      <section className="px-7 pt-16 pb-12 relative">
        <div className="absolute right-7 top-16 text-right font-mono text-[11px] text-accent opacity-30 leading-loose hidden md:block">
          <p>$ whoami</p>
          <p>cybersec student</p>
          <p>$ status</p>
          <p>always learning</p>
        </div>

        <div className="inline-flex items-center gap-2 font-mono text-[11px] text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded mb-6 tracking-widest">
          ms cybersecurity
        </div>

        <h1 className="font-sans text-4xl font-bold text-[#fafafa] leading-tight tracking-tight mb-4">
          Learning in public.
          <br />
          <span className="text-accent">Breaking things</span> on purpose.
        </h1>

        <p className="font-sans text-[15px] text-muted leading-relaxed max-w-lg mb-8">
          This is my public learning journal — not a polished portfolio, but an{" "}
          <span className="text-[#a1a1aa]">honest record</span> of what I&apos;m
          figuring out. TryHackMe writeups, malware notes, and things I found
          interesting this week.
        </p>

        <div className="flex gap-3 items-center">
          <Link
            href="/notes"
            className="font-mono text-xs px-5 py-2.5 bg-accent text-[#0a0a0b] rounded font-medium tracking-wider hover:bg-accent/90 transition-colors"
          >
            read my notes →
          </Link>
          <Link
            href="/projects"
            className="font-mono text-xs px-5 py-2.5 bg-transparent text-muted border border-[#27272a] rounded tracking-wider hover:text-[#e4e4e7] hover:border-[#3f3f46] transition-colors"
          >
            see projects
          </Link>
        </div>
      </section>

      <hr className="border-[#1f1f23] mx-7" />

      {/* Currently exploring */}
      <section className="px-7 py-9">
        <p className="font-mono text-[10px] text-[#3f3f46] tracking-widest uppercase mb-5"></p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              icon: "🚩",
              title: "TryHackMe / HTB",
              desc: "room writeups & walkthroughs",
            },
            {
              icon: "🐛",
              title: "Malware Analysis",
              desc: "PMA notes & samples",
            },
            {
              icon: "📖",
              title: "Reading Log",
              desc: "books, papers, podcasts",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-card border border-[#1f1f23] rounded-lg p-4 hover:border-[#3f3f46] transition-colors"
            >
              <div className="text-base mb-2">{card.icon}</div>
              <div className="font-sans text-sm font-medium text-[#e4e4e7] mb-1">
                {card.title}
              </div>
              <div className="font-mono text-xs text-[#52525b]">
                {card.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-[#1f1f23] mx-7" />

      {/* Recent notes — now pulls from real markdown files */}
      <section className="px-7 py-9">
        <p className="font-mono text-[10px] text-[#3f3f46] tracking-widest uppercase mb-5"></p>
        <div className="flex flex-col">
          {recentNotes.map((note) => (
            <Link
              key={note.slug}
              href={`/notes/${note.slug}`}
              className="flex items-center justify-between py-3 border-b border-[#111113] hover:opacity-80 transition-opacity"
            >
              <div className="flex items-center gap-3">
                <NoteTag type={note.type} />
                <span className="font-sans text-sm text-[#a1a1aa]">
                  {note.title}
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#3f3f46] shrink-0 ml-4">
                {formatDate(note.date)}
              </span>
            </Link>
          ))}
        </div>

        {/* Link to all notes */}
        <div className="mt-6">
          <Link
            href="/notes"
            className="font-mono text-[11px] text-muted hover:text-accent transition-colors"
          >
            all notes →
          </Link>
        </div>
      </section>
    </main>
  );
}

function NoteTag({ type }: { type: string }) {
  const styles: Record<string, string> = {
    thm: "bg-green-500/10 text-green-400 border-green-500/20",
    htb: "bg-red-500/10 text-red-400 border-red-500/20",
    note: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    book: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    otw: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    malware: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  };

  return (
    <span
      className={`font-mono text-[9px] px-1.5 py-0.5 rounded border tracking-widest uppercase ${
        styles[type] ?? styles.note
      }`}
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
