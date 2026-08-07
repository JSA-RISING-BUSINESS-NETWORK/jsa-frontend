import { ArrowUpRight, ChevronDown, Mail, Menu, Phone, Send, X } from 'lucide-react'
import { lazy, Suspense, useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import logoImage from '../assets/Logo.png'
import { servicePillars } from '../content/home'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services/digital-solutions' },
  { label: 'Contact', to: '/contact' },
]

const FooterScene = lazy(() =>
  import('./ui/footer-scene').then((module) => ({
    default: module.FooterScene,
  })),
)

export function Layout() {
  const location = useLocation()
  const [serviceSectionActive, setServiceSectionActive] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const serviceSection = document.getElementById('service-pillars')

    if (!serviceSection) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => setServiceSectionActive(entry.isIntersecting),
      { threshold: 0.45 },
    )

    observer.observe(serviceSection)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

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
          className={`mx-auto flex min-h-24 items-center justify-between px-4 pt-3 transition-all duration-500 sm:px-6 motion-reduce:transition-none lg:px-8 ${
            serviceSectionActive ? 'lg:max-w-[96rem]' : 'lg:max-w-7xl'
          }`}
          aria-label="Primary navigation"
        >
          <Link
            to="/"
            className="pointer-events-auto inline-flex items-center gap-3 rounded-full border border-white/12 bg-brand-slate/18 px-3 py-2 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_10px_28px_rgba(3,10,24,0.1)] outline-none backdrop-blur-md backdrop-saturate-125 focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-brand-navy"
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

          <div className="pointer-events-auto relative flex items-center gap-2 rounded-full border border-white/12 bg-brand-slate/18 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_10px_28px_rgba(3,10,24,0.1)] backdrop-blur-md backdrop-saturate-125">
            {navItems.slice(1).map((item) =>
              item.label === 'Services' ? (
                <div key={item.to} className="relative hidden sm:block">
                  <button
                    type="button"
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold outline-none transition hover:text-brand-gold focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-brand-navy ${
                      servicesOpen ? 'text-white' : 'text-brand-muted'
                    }`}
                    aria-expanded={servicesOpen}
                    aria-controls="desktop-services-menu"
                    onClick={() => setServicesOpen((open) => !open)}
                  >
                    Services
                    <ChevronDown
                      className={`size-4 transition-transform duration-300 ${
                        servicesOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {servicesOpen ? (
                    <div
                      id="desktop-services-menu"
                      className="absolute right-0 top-[calc(100%+0.75rem)] max-h-[calc(100svh-8rem)] w-[min(38rem,calc(100vw-2rem))] overflow-x-hidden overflow-y-auto overscroll-contain rounded-2xl border border-white/14 bg-brand-navy/92 p-3 text-white shadow-[0_24px_70px_rgba(3,10,24,0.28),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl"
                    >
                      <div className="flex items-center justify-between border-b border-white/10 px-3 pb-3">
                        <p className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-brand-gold">
                          Service pillars
                        </p>
                        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white/45">
                          09 offerings
                        </span>
                      </div>
                      <div className="grid gap-1 pt-2 sm:grid-cols-3">
                        {servicePillars.map((pillar) => (
                          <Link
                            key={pillar.slug}
                            to={`/services/${pillar.slug}`}
                            onClick={() => setServicesOpen(false)}
                            className="group rounded-xl border border-transparent px-3 py-3 transition hover:border-white/10 hover:bg-white/8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
                          >
                            <span className="text-[0.62rem] font-black tracking-[0.18em] text-brand-gold/80">
                              {pillar.number}
                            </span>
                            <span className="mt-1 flex items-start justify-between gap-2 text-sm font-bold text-white/85 group-hover:text-white">
                              {pillar.title}
                              <ArrowUpRight className="size-4 shrink-0 text-white/35 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-gold" aria-hidden="true" />
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              ) : (
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
              ),
            )}
            <Link
              to="/contact"
              className="hidden min-h-11 items-center justify-center rounded-full bg-brand-gold px-5 text-sm font-bold text-brand-navy transition hover:bg-brand-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold sm:inline-flex"
            >
              Get In Touch
            </Link>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full bg-brand-gold text-brand-navy transition hover:bg-brand-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold sm:hidden"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => {
                setMobileMenuOpen((open) => !open)
                if (mobileMenuOpen) setServicesOpen(false)
              }}
            >
              {mobileMenuOpen ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <Menu className="size-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
        <div
          id="mobile-navigation"
          className={`pointer-events-auto absolute inset-x-4 top-[5.5rem] max-h-[calc(100svh-6.5rem)] overflow-x-hidden overflow-y-auto overscroll-contain rounded-2xl border border-white/14 bg-brand-navy/42 shadow-[0_24px_70px_rgba(3,10,24,0.24),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md transition duration-300 sm:hidden motion-reduce:transition-none ${
            mobileMenuOpen
              ? 'visible translate-y-0 opacity-100'
              : 'pointer-events-none invisible -translate-y-2 opacity-0'
          }`}
          aria-hidden={!mobileMenuOpen}
          inert={!mobileMenuOpen}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <p className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-brand-gold">
              Navigation / 01
            </p>
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white/45">
              JSA Rising
            </span>
          </div>
          <div className="grid gap-1 p-3">
            {navItems.map((item, index) =>
              item.label === 'Services' ? (
                <div key={item.to}>
                  <button
                    type="button"
                    className={`group flex min-h-14 w-full items-center justify-between rounded-xl border px-4 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold ${
                      servicesOpen
                        ? 'border-white/12 bg-white/10 text-white'
                        : 'border-transparent text-brand-muted hover:border-white/8 hover:bg-white/6 hover:text-white'
                    }`}
                    aria-expanded={servicesOpen}
                    aria-controls="mobile-services-menu"
                    onClick={() => setServicesOpen((open) => !open)}
                  >
                    <span className="flex items-center gap-4">
                      <span className="text-[0.65rem] font-black tracking-[0.18em] text-brand-gold/80">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-base font-bold">{item.label}</span>
                    </span>
                    <ChevronDown
                      className={`size-5 text-white/45 transition duration-300 ${
                        servicesOpen ? 'rotate-180 text-brand-gold' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {servicesOpen ? (
                    <div id="mobile-services-menu" className="ml-5 border-l border-brand-gold/30 py-2 pl-3">
                      {servicePillars.map((pillar) => (
                        <Link
                          key={pillar.slug}
                          to={`/services/${pillar.slug}`}
                          onClick={() => {
                            setServicesOpen(false)
                            setMobileMenuOpen(false)
                          }}
                          className="group flex min-h-11 items-center justify-between gap-3 rounded-lg px-3 text-sm text-brand-muted transition hover:bg-white/6 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
                        >
                          <span className="flex min-w-0 items-center gap-3">
                            <span className="text-[0.6rem] font-black tracking-[0.16em] text-brand-gold/80">
                              {pillar.number}
                            </span>
                            <span className="truncate font-semibold">{pillar.title}</span>
                          </span>
                          <ArrowUpRight className="size-4 shrink-0 text-white/30 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-gold" aria-hidden="true" />
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => {
                    setServicesOpen(false)
                    setMobileMenuOpen(false)
                  }}
                  className={({ isActive }) =>
                    `group flex min-h-14 items-center justify-between rounded-xl border border-transparent px-4 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold ${
                      isActive
                        ? 'border-white/12 bg-white/10 text-white'
                        : 'text-brand-muted hover:border-white/8 hover:bg-white/6 hover:text-white'
                    }`
                  }
                >
                  <span className="flex items-center gap-4">
                    <span className="text-[0.65rem] font-black tracking-[0.18em] text-brand-gold/80">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-base font-bold">{item.label}</span>
                  </span>
                  <ArrowUpRight
                    className="size-5 text-white/35 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-gold motion-reduce:transition-none"
                    aria-hidden="true"
                  />
                </NavLink>
              ),
            )}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 inline-flex min-h-14 items-center justify-between rounded-xl bg-brand-gold px-4 text-sm font-black text-brand-navy transition hover:bg-brand-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
            >
              <span className="flex items-center gap-4">
                <span className="text-[0.65rem] font-black tracking-[0.18em]">04</span>
                <span>Get In Touch</span>
              </span>
              <ArrowUpRight className="size-5" aria-hidden="true" />
            </Link>
          </div>
          <div className="flex items-center gap-3 border-t border-white/10 px-5 py-3 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-white/40">
            <span className="size-1.5 rounded-full bg-brand-gold" aria-hidden="true" />
            Build. Automate. Scale.
          </div>
        </div>
      </header>

      <Outlet />

      <footer className="relative isolate snap-start overflow-hidden border-t border-white/10 bg-brand-navy py-16 text-brand-cream sm:py-20">
        <Suspense fallback={null}>
          <FooterScene />
        </Suspense>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 rounded-2xl border border-white/12 bg-white/6 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-gold">
                Your Success, Our Commitment.
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight text-white sm:text-5xl">
                Ready to build, automate, and scale with confidence?
              </h2>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-gold px-6 py-3 text-base font-bold text-brand-navy transition hover:-translate-y-0.5 hover:bg-brand-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                Get In Touch Today
              </Link>
            </div>
          </div>

          <div className="grid gap-8 border-b border-white/10 py-10 md:grid-cols-[1.25fr_1fr_0.75fr]">
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
