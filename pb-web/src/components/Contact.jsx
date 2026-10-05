import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BriefcaseBusiness, GitBranch, Mail } from 'lucide-react';

export function Contact({ links }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = 'Name is required.';
    }

    if (!formData.email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }

    if (!formData.message.trim()) {
      nextErrors.message = 'Message is required.';
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="container-shell section-shell"
    >
      <div className="max-w-2xl">
        <span className="label-chip">Contact</span>
        <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-slate-900 sm:text-4xl">Let&apos;s build something useful.</h2>
        <p className="mt-4 text-base leading-7 text-slate-600">I&apos;m open to internship, freelance, and software development opportunities where I can contribute and keep learning.</p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="card-surface p-6 sm:p-7">
          <div className="space-y-5">
            <a href={`mailto:${links.email}`} className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-slate-300">
              <span className="inline-flex items-center gap-3 text-slate-800">
                <Mail size={18} />
                {links.email}
              </span>
              <ArrowUpRight size={16} className="text-slate-500" />
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-slate-300">
              <span className="inline-flex items-center gap-3 text-slate-800">
                <BriefcaseBusiness size={18} />
                LinkedIn
              </span>
              <ArrowUpRight size={16} className="text-slate-500" />
            </a>
            <a href={links.github} target="_blank" rel="noreferrer" className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-slate-300">
              <span className="inline-flex items-center gap-3 text-slate-800">
                <GitBranch size={18} />
                GitHub
              </span>
              <ArrowUpRight size={16} className="text-slate-500" />
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="card-surface p-6 sm:p-7" noValidate>
          <div className="grid gap-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">Name</label>
              <input id="name" name="name" value={formData.name} onChange={handleChange} className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200" placeholder="Your name" />
              {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">Email</label>
              <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200" placeholder="you@example.com" />
              {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="5" className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200" placeholder="Tell me about your project or opportunity" />
              {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
            </div>

            <div className="flex items-center justify-between gap-4">
              <button type="submit" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800">
                Send Message
              </button>
              {submitted && <p className="text-sm font-medium text-emerald-600">Message drafted successfully.</p>}
            </div>
          </div>
        </form>
      </div>
    </motion.section>
  );
}
