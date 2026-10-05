import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Sparkles } from 'lucide-react';

export function About({ profile }) {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="container-shell section-shell"
    >
      <div className="max-w-3xl">
        <span className="label-chip">About</span>
        <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-slate-900 sm:text-4xl">
          Building software with curiosity and intention.
        </h2>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="card-surface p-6 sm:p-8">
          <p className="text-base leading-8 text-slate-700">{profile.about}</p>
        </div>

        <div className="space-y-6">
          <div className="card-surface flex items-start gap-4 p-5">
            <div className="rounded-xl bg-slate-900 p-3 text-white">
              <GraduationCap size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Education</p>
              <p className="mt-2 text-base font-medium text-slate-900">{profile.education}</p>
              <p className="text-sm text-slate-600">{profile.college}</p>
            </div>
          </div>

          <div className="card-surface flex items-start gap-4 p-5">
            <div className="rounded-xl bg-slate-900 p-3 text-white">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Location</p>
              <p className="mt-2 text-base font-medium text-slate-900">{profile.location}</p>
            </div>
          </div>

          <div className="card-surface flex items-start gap-4 p-5">
            <div className="rounded-xl bg-slate-900 p-3 text-white">
              <Sparkles size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Approach</p>
              <p className="mt-2 text-base font-medium text-slate-900">Clean code, thoughtful UX, and continuous improvement.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
