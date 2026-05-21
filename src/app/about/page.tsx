import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="px-7 py-12 max-w-2xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <div className="font-mono text-[11px] text-accent tracking-widest mb-3"></div>
        <h1 className="font-sans text-3xl font-bold text-[#fafafa] mb-6">
          Hey, I&apos;m Sragvi.
        </h1>
        <p className="font-sans text-sm text-muted leading-relaxed mb-4">
          I&apos;m a master&apos;s student in cybersecurity, currently figuring
          out how all of this fits together — networking, malware, exploitation,
          defense. This is where I document that process publicly.
        </p>
        <p className="font-sans text-sm text-muted leading-relaxed">
          I&apos;m not an expert. I&apos;m someone who finds this field
          genuinely interesting and is putting in the work to get good at it.
          These notes are written for my future self first and if they help
          someone else too, even better.
        </p>
      </div>

      <hr className="border-[#1f1f23] mb-12" />

      {/* Currently */}
      <div className="mb-12">
        <p className="font-mono text-[10px] text-[#3f3f46] tracking-widest uppercase mb-6"></p>
        <div className="flex flex-col gap-4">
          {[
            {
              label: "studying",
              value: "MS Cybersecurity — NJIT",
            },
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
            <div key={item.label} className="flex gap-6">
              <span className="font-mono text-[11px] text-[#3f3f46] w-28 shrink-0 pt-0.5">
                {item.label}
              </span>
              <span className="font-sans text-sm text-[#a1a1aa] leading-relaxed">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-[#1f1f23] mb-12" />

      {/* Background */}
      <div className="mb-12">
        <p className="font-mono text-[10px] text-[#3f3f46] tracking-widest uppercase mb-6"></p>
        <p className="font-sans text-sm text-muted leading-relaxed mb-4">
          [Write 2-3 sentences about your background here. Where did you study
          before? What got you into cybersecurity? Keep it honest and
          conversational — not a LinkedIn summary.]
        </p>
        <p className="font-sans text-sm text-muted leading-relaxed">
          [What are you working toward? What kind of role or area of security
          interests you most? Internships, research, industry?]
        </p>
      </div>

      <hr className="border-[#1f1f23] mb-12" />

      {/* This site */}
      <div className="mb-12">
        <p className="font-mono text-[10px] text-[#3f3f46] tracking-widest uppercase mb-6"></p>
        <p className="font-sans text-sm text-muted leading-relaxed mb-4">
          I built this to force myself to write about what I&apos;m learning.
          Writing makes you realize what you actually understand versus what you
          just think you understand.
        </p>
        <p className="font-sans text-sm text-muted leading-relaxed">
          It also serves as a portfolio — but one that shows process, not just
          outcomes. Anyone can list tools on a resume. Fewer people can explain
          clearly why EternalBlue works or what confused them about a concept
          and how they resolved it.
        </p>
      </div>

      <hr className="border-[#1f1f23] mb-12" />

      {/* Links */}
      <div>
        <p className="font-mono text-[10px] text-[#3f3f46] tracking-widest uppercase mb-6"></p>
        <div className="flex flex-col gap-3">
          {[
            { label: "github", href: "https://github.com/Sragvi08" },
            {
              label: "linkedin",
              href: "https://www.linkedin.com/in/sragvi-shetty-143143229/",
            },
            { label: "email", href: "sragv.ii12@gmail.com" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group w-fit"
            >
              <span className="font-mono text-[11px] text-[#3f3f46] w-28">
                {link.label}
              </span>
              <span className="font-mono text-[11px] text-muted group-hover:text-accent transition-colors">
                {link.href} →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
