import { getNoteBySlug, getAllNoteSlugs } from "@/lib/notes";
import { remark } from "remark";
import remarkHtml from "remark-html";
import Link from "next/link";

export function generateStaticParams() {
  return getAllNoteSlugs().map((slug) => ({ slug }));
}

export default async function NotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  const processed = await remark().use(remarkHtml).process(note.content);
  const contentHtml = processed.toString();

  return (
    <main className="px-7 py-12 max-w-3xl mx-auto">
      <Link
        href="/notes"
        className="font-mono text-[11px] text-muted hover:text-accent transition-colors mb-8 inline-block"
      >
        ← back to notes
      </Link>

      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <NoteTag type={note.type} />
          <span className="font-mono text-[10px] text-[#3f3f46]">
            {formatDate(note.date)}
          </span>
        </div>
        <h1 className="font-sans text-3xl font-bold text-[#fafafa] leading-tight mb-4">
          {note.title}
        </h1>
        {note.summary && (
          <p className="font-sans text-sm text-muted leading-relaxed">
            {note.summary}
          </p>
        )}
        {note.tags && (
          <div className="flex gap-3 flex-wrap mt-4">
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
      </div>

      <hr className="border-[#1f1f23] mb-10" />

      <div
        className="prose-note"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
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
