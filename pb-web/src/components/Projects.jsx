import { motion } from 'framer-motion';
import { ArrowUpRight, GitBranch } from 'lucide-react';

export function Projects({ projects }) {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="container-shell section-shell"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <span className="label-chip">Projects</span>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-slate-900 sm:text-4xl">I build practical projects that turn ideas into working software.</h2>
        </div>
        <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition hover:text-slate-900">
          View All Projects
          <ArrowUpRight size={15} />
        </a>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <article key={project.title + index} className="card-surface group flex h-full flex-col overflow-hidden p-5 transition duration-300 hover:-translate-y-1 hover:border-slate-300">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
              <div className="h-44 w-full bg-[radial-gradient(circle_at_top_left,_rgba(148,163,184,0.5),_transparent_60%),linear-gradient(135deg,#f8fafc_0%,#e2e8f0_100%)] transition duration-300 group-hover:scale-[1.02]" />
            </div>

            <div className="mt-5 flex flex-1 flex-col">
              <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{project.description}</p>
              <p className="mt-4 text-sm font-medium text-slate-800">Problem solved</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">{project.problem}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-700">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3 pt-4">
                <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-900">
                  <GitBranch size={14} />
                  GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-900">
                  Live Demo
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  );
}
