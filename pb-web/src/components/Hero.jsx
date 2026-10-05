import { motion } from 'framer-motion';
import { ArrowRight, BriefcaseBusiness, Download, GitBranch, Mail } from 'lucide-react';

export function Hero({ profile, links }) {
  return (
    <section id="home" className="container-shell section-shell pt-8 sm:pt-12">
      <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <span className="label-chip">{profile.tag}</span>
          <h1 className="mt-6 max-w-xl text-4xl font-semibold tracking-[-0.06em] text-slate-900 sm:text-5xl lg:text-6xl">
            Hi, I&apos;m {profile.name}. 
          </h1>
          <p className="mt-4 max-w-xl text-xl font-medium text-slate-700 sm:text-2xl">
            {profile.headline}
          </p>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">{profile.intro}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
            <a
              href={links.resume}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400 hover:text-slate-900"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-slate-600">
            <a href={links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm transition hover:border-slate-300 hover:text-slate-900">
              <GitBranch size={16} />
              GitHub
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm transition hover:border-slate-300 hover:text-slate-900">
              <BriefcaseBusiness size={16} />
              LinkedIn
            </a>
            <a href={`mailto:${links.email}`} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm transition hover:border-slate-300 hover:text-slate-900">
              <Mail size={16} />
              Email
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="relative"
        >
          <div className="card-surface relative overflow-hidden p-4 sm:p-6">
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-slate-200/90 blur-3xl" />
            <div className="absolute -bottom-14 -left-10 h-32 w-32 rounded-full bg-slate-300/80 blur-3xl" />
            <div className="relative rounded-[1.5rem] border border-slate-200 bg-[#f3f1ec] p-5">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Profile</p>
                  <p className="mt-2 text-xl font-semibold text-slate-900">{profile.name}</p>
                </div>
                <span className="rounded-full border border-slate-300 bg-white px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-600">
                  {profile.currentYear}
                </span>
              </div>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Education</p>
                  <p className="mt-2 text-base font-medium text-slate-800">{profile.education}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Focus</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {['Web', 'AI', 'ML', 'Problem Solving'].map((item) => (
                      <span key={item} className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Career interests</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    {profile.careerGoals.map((goal) => (
                      <li key={goal} className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-slate-900" />
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
