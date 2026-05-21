export default function ProjectsPage() {
  const projects = [
    {
      title: "Malware Analysis Lab",
      description:
        "A isolated VM environment for safely analyzing malware samples. Built with FlareVM and REMnux. Documents my setup and analysis workflow.",
      status: "in progress",
      tags: ["malware", "flarevm", "remnux"],
      link: null,
    },
    {
      title: "TryHackMe Writeups",
      description:
        "Documented walkthroughs of completed TryHackMe rooms. Focus on explaining the why behind each step, not just the commands.",
      status: "ongoing",
      tags: ["ctf", "writeups", "thm"],
      link: "/notes",
    },
    {
      title: "Home Lab",
      description:
        "Personal network lab for practicing defensive security. Running pfSense, Security Onion, and a few vulnerable VMs for practice.",
      status: "planned",
      tags: ["networking", "homelab", "defensive"],
      link: null,
    },
  ];

  return (
    <main className="px-7 py-12 max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <div className="font-mono text-[11px] text-accent tracking-widest mb-3"></div>
        <h1 className="font-sans text-3xl font-bold text-[#fafafa] mb-3">
          Things I&apos;ve Built
        </h1>
        <p className="font-sans text-sm text-muted leading-relaxed max-w-lg">
          A mix of labs, tools, and ongoing work. Some finished, some in
          progress, some just ideas I&apos;m moving toward.
        </p>
      </div>

      {/* Projects grid */}
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-card border border-[#1f1f23] rounded-lg p-6 hover:border-[#3f3f46] transition-colors"
          >
            {/* Title row */}
            <div className="flex items-start justify-between gap-4 mb-3">
              <h2 className="font-sans text-base font-medium text-[#e4e4e7]">
                {project.title}
              </h2>
              <StatusBadge status={project.status} />
            </div>

            {/* Description */}
            <p className="font-sans text-sm text-muted leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Footer row */}
            <div className="flex items-center justify-between">
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[9px] text-[#3f3f46] tracking-widest"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  className="font-mono text-[11px] text-accent hover:opacity-70 transition-opacity"
                >
                  view →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    complete: "bg-green-500/10 text-green-400 border-green-500/20",
    "in progress": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    ongoing: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    planned: "bg-[#1f1f23] text-[#52525b] border-[#27272a]",
  };

  return (
    <span
      className={`font-mono text-[9px] px-2 py-0.5 rounded border tracking-widest uppercase shrink-0 ${
        styles[status] ?? styles.planned
      }`}
    >
      {status}
    </span>
  );
}
