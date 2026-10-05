import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export function Certifications({ items }) {
  return (
    <motion.section
      id="certifications"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="container-shell section-shell"
    >
      <div className="max-w-2xl">
        <span className="label-chip">Certifications</span>
        <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-slate-900 sm:text-4xl">Focused learning that keeps expanding my skill set.</h2>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {items.map((item) => (
          <article key={item.name + item.year} className="card-surface flex items-center justify-between gap-4 p-5">
            <div>
              <p className="text-lg font-semibold text-slate-900">{item.name}</p>
              <p className="mt-2 text-sm text-slate-600">{item.organization}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-500">{item.year}</p>
            </div>
            <a href={item.link} target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:text-slate-900" aria-label={`View certification for ${item.name}`}>
              <ExternalLink size={16} />
            </a>
          </article>
        ))}
      </div>
    </motion.section>
  );
}
