import { motion } from 'framer-motion';

export function LearningJourney({ steps }) {
  return (
    <motion.section
      id="journey"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="container-shell section-shell"
    >
      <div className="max-w-2xl">
        <span className="label-chip">Learning Journey</span>
        <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-slate-900 sm:text-4xl">A steady path from learning to building.</h2>
      </div>

      <div className="mt-10 grid gap-4">
        {steps.map((step, index) => (
          <div key={step} className="card-surface flex gap-4 p-4 sm:p-5">
            <div className="flex min-w-[2.5rem] items-start justify-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                {index + 1}
              </div>
            </div>
            <p className="text-base leading-7 text-slate-700">{step}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
