import { Mail, Menu, Phone, Send } from 'lucide-react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import logoImage from '../assets/Logo.png'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services/digital-solutions' },
  { label: 'Contact', to: '/contact' },
]

export function Layout() {
  return (
    <div className="min-h-screen bg-brand-navy text-brand-slate">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-brand-gold focus:px-4 focus:py-3 focus:font-bold focus:text-brand-navy"
      >
        Skip to main content
      </a>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-40 text-white">
        <nav
          className="mx-auto flex min-h-24 max-w-7xl items-center justify-between px-4 pt-3 sm:px-6 lg:px-8"
          aria-label="Primary navigation"
        >
          <Link
            to="/"
            className="pointer-events-auto inline-flex items-center gap-3 rounded-full border border-white/10 bg-brand-navy/38 px-3 py-2 text-white shadow-2xl shadow-black/10 outline-none backdrop-blur-xl focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-brand-navy"
            aria-label="JSA Rising Business Network home"
          >
            <img
              src={logoImage}
              alt="JSA Rising Business Network logo"
              className="size-10 rounded-full border border-brand-gold/30 object-cover shadow-sm shadow-brand-navy/20"
            />
            <span className="hidden leading-tight sm:block">
              <span className="block text-base font-extrabold text-white">JSA Rising</span>
              <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-brand-muted">
                Business Network
              </span>
            </span>
          </Link>

          <div className="pointer-events-auto flex items-center gap-2 rounded-full border border-white/10 bg-brand-navy/38 p-1.5 shadow-2xl shadow-black/10 backdrop-blur-xl">
            {navItems.slice(1).map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `hidden rounded-full px-4 py-2 text-sm font-semibold outline-none transition hover:text-brand-gold focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-brand-navy sm:inline-flex ${
                    isActive ? 'text-white' : 'text-brand-muted'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="hidden min-h-11 items-center justify-center rounded-full bg-brand-gold px-5 text-sm font-bold text-brand-navy transition hover:bg-brand-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold sm:inline-flex"
            >
              Get In Touch
            </Link>
            <Link
              to="/contact"
              className="inline-flex size-11 items-center justify-center rounded-full bg-brand-gold text-brand-navy transition hover:bg-brand-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold sm:hidden"
              aria-label="Open contact page"
            >
              <Menu className="size-5" aria-hidden="true" />
            </Link>
          </div>
        </nav>
      </header>

      <Outlet />

      <footer className="flex min-h-svh snap-start items-center bg-brand-navy text-brand-cream">
        <div className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-10 rounded-lg border border-white/10 bg-white/6 p-6 shadow-2xl shadow-black/10 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-gold">
                Your Success, Our Commitment.
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Ready to build, automate, and scale with confidence?
              </h2>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-brand-gold px-6 py-3 text-base font-bold text-brand-navy transition hover:bg-brand-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold"
              >
                Get In Touch Today
              </Link>
            </div>
          </div>

          <div className="grid gap-8 border-b border-white/10 py-10 md:grid-cols-3">
            <div>
              <p className="text-lg font-bold text-white">JSA Rising Business Network</p>
              <p className="mt-3 max-w-sm text-sm leading-6 text-white/72">
                Business services, cloud technology, automation, and sector-focused growth
                support.
              </p>
            </div>
            <div>
              <p className="font-bold text-white">Contact shortcuts</p>
              <ul className="mt-3 space-y-3 text-sm text-white/72">
                <li className="flex items-center gap-3">
                  <Phone className="size-4 text-brand-gold" aria-hidden="true" />
                  Phone: to be wired
                </li>
                <li className="flex items-center gap-3">
                  <Send className="size-4 text-brand-gold" aria-hidden="true" />
                  WhatsApp: to be wired
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="size-4 text-brand-gold" aria-hidden="true" />
                  Email: to be wired
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-white">Explore</p>
              <div className="mt-3 flex flex-wrap gap-3 text-sm">
                <Link className="text-white/72 underline-offset-4 hover:text-brand-gold hover:underline" to="/">
                  Home
                </Link>
                <Link
                  className="text-white/72 underline-offset-4 hover:text-brand-gold hover:underline"
                  to="/services/cloud-devops-services"
                >
                  Services
                </Link>
                <Link
                  className="text-white/72 underline-offset-4 hover:text-brand-gold hover:underline"
                  to="/contact"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <p className="pt-6 text-xs text-white/55">
            (c) 2026 JSA Rising Business Network. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
