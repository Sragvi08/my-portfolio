export default function Footer() {
  return (
    <footer className="flex items-center justify-between px-7 py-4 mt-16 border-t border-[#1f1f23]">

      <span className="font-mono text-[10px] text-[#3f3f46]">
        built with next.js · always a work in progress
      </span>

      <div className="flex gap-4">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[10px] text-[#3f3f46] hover:text-muted transition-colors"
        >
          github
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[10px] text-[#3f3f46] hover:text-muted transition-colors"
        >
          linkedin
        </a>
      </div>

    </footer>
  );
}