import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar({ items, activeSection }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f8f6f3]/85 backdrop-blur-xl">
      <nav className="container-shell flex items-center justify-between py-3 sm:py-4" aria-label="Main navigation">
        <a href="#home" className="flex items-center gap-3 text-sm font-semibold tracking-[0.18em] text-slate-900 uppercase">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-xs tracking-[0.12em]">
            YN
          </span>
          Your Name
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm font-medium transition-colors ${
                activeSection === item.id ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:text-slate-900 md:hidden"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-[#f8f6f3]/95 md:hidden">
          <div className="container-shell flex flex-col gap-2 py-4">
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileOpen(false)}
                className={`rounded-xl px-3 py-2 text-sm font-medium transition ${
                  activeSection === item.id ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
