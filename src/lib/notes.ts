import fs from "fs";
import path from "path";
import matter from "gray-matter";

const notesDir = path.join(process.cwd(), "content/notes");

export type NoteType = "thm" | "htb" | "note" | "book" | "otw" | "malware";

export type NoteMetadata = {
  slug: string;
  title: string;
  date: string;
  type: NoteType;
  summary: string;
  tags: string[];
};

export type Note = NoteMetadata & {
  content: string;
};

// Get metadata for all notes — used for the index page
export function getAllNotes(): NoteMetadata[] {
  const files = fs.readdirSync(notesDir);

  return files
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(".md", "");
      const raw = fs.readFileSync(path.join(notesDir, filename), "utf8");
      const { data } = matter(raw);
      return { slug, ...data } as NoteMetadata;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Get a single note with full content — used for individual note pages
export function getNoteBySlug(slug: string): Note {
  const filepath = path.join(notesDir, `${slug}.md`);
  const raw = fs.readFileSync(filepath, "utf8");
  const { data, content } = matter(raw);
  return { slug, ...data, content } as Note;
}

// Get all slugs — used by Next.js to know which pages to generate
export function getAllNoteSlugs(): string[] {
  return fs
    .readdirSync(notesDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(".md", ""));
}