import Link from "next/link";
import { getAllNotes } from "@/lib/notes";

export default function NotesPage() {
  const notes = getAllNotes();

  return (
    <main className="px-7 py-12 max-w-3xl mx-auto">
      <div className="mb-10">
        <div className="font-mono text-[11px] text-accent tracking-widest mb-3"></div>
        <h1 className="font-sans text-3xl font-bold text-[#fafafa] mb-3">
          My Learning Journal
        </h1>
        <p className="font-sans text-sm text-muted leading-relaxed max-w-lg">
          Raw notes, writeups, and reflections. Written for my future self
          first, anyone else second.
        </p>
      </div>

      <div className="flex gap-2 flex-wrap mb-8">
        {["all", "thm", "htb", "otw", "note", "book", "malware"].map((tag) => (
          <span
            key={tag}
            className="font-mono text-[10px] px-3 py-1 rounded border border-[#1f1f23] text-muted hover:border-[#3f3f46] hover:text-[#e4e4e7] transition-colors cursor-pointer tracking-widest"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-px">
        {notes.map((note) => (
          <Link
            key={note.slug}
            href={`/notes/${note.slug}`}
            className="group flex flex-col gap-2 py-5 border-b border-[#111113] hover:opacity-80 transition-opacity"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <NoteTag type={note.type} />
                <span className="font-sans text-sm text-[#e4e4e7] group-hover:text-accent transition-colors">
                  {note.title}
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#3f3f46] shrink-0 ml-4">
                {formatDate(note.date)}
              </span>
            </div>
            {note.summary && (
              <p className="font-sans text-xs text-muted leading-relaxed">
                {note.summary}
              </p>
            )}
            {note.tags && (
              <div className="flex gap-2 flex-wrap">
                {note.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[9px] text-[#3f3f46] tracking-widest"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>
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
