import { BriefcaseBusiness, GitBranch, Mail } from 'lucide-react';

export function Footer({ links }) {
  return (
    <footer className="border-t border-slate-200 bg-white/60">
      <div className="container-shell flex flex-col items-center justify-between gap-4 py-7 sm:flex-row">
        <p className="text-sm text-slate-600">© 2026 Your Name. Built with React &amp; Tailwind CSS.</p>

        <div className="flex items-center gap-3 text-slate-600">
          <a href={links.github} target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white transition hover:border-slate-300 hover:text-slate-900" aria-label="GitHub">
            <GitBranch size={16} />
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white transition hover:border-slate-300 hover:text-slate-900" aria-label="LinkedIn">
            <BriefcaseBusiness size={16} />
          </a>
          <a href={`mailto:${links.email}`} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white transition hover:border-slate-300 hover:text-slate-900" aria-label="Email">
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
