import { ArrowRight, ArrowUpRight, CheckCircle2, Mail, MessageCircle, Send, Sparkles } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { ServiceScene } from '../components/ServiceScene'
import { servicePillars } from '../content/home'

const nextSteps = [
  ['01', 'Share the context', 'Tell us what you are building, fixing, or trying to understand.'],
  ['02', 'We review the fit', 'We will look at the request and identify the most useful starting point.'],
  ['03', 'Choose the next move', 'We will come back with a clear response and a practical way forward.'],
]

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [contactMethod, setContactMethod] = useState('Email')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setError('The contact service is not configured yet. Please try again shortly.')
      return
    }

    setSending(true)

    try {
      await emailjs.sendForm(serviceId, templateId, event.currentTarget, { publicKey })
      setSubmitted(true)
      event.currentTarget.reset()
    } catch {
      setError('We could not send your enquiry right now. Please try again or contact us directly.')
    } finally {
      setSending(false)
    }
  }

  return (
    <main className="bg-brand-cream">
      <section className="relative isolate overflow-hidden bg-brand-navy pb-16 pt-28 text-brand-cream sm:pb-24 sm:pt-44">
        <ServiceScene variant="advisory" />
        <div className="pointer-events-none absolute right-[-12rem] top-[-12rem] size-[32rem] rounded-full border border-brand-gold/15" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-[-14rem] left-[-10rem] size-[28rem] rounded-full border border-white/8" aria-hidden="true" />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-9 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-24 lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-gold">Start a conversation</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[0.98] sm:text-7xl">Bring us the next important move.</h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/72 sm:mt-7 sm:text-xl sm:leading-8">
              Tell us where the business is going, where it is getting stuck, or what you want to
              build next. We will help make the starting point clear.
            </p>
          </div>
          <div className="border-l border-brand-gold/40 pl-5 lg:mb-2 lg:pl-6">
            <p className="text-sm font-bold text-white">A considered first conversation.</p>
            <p className="mt-3 text-sm leading-6 text-white/60">Share enough context for us to understand the opportunity. A useful response starts with a useful question.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-brand-border bg-white py-16 sm:py-28">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24 lg:px-8">
          <aside>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-gold-dark">What happens next</p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-brand-navy sm:text-5xl">A simple route to a useful conversation.</h2>
            <div className="mt-8 border-y border-brand-border sm:mt-10">
              {nextSteps.map(([number, title, description]) => (
                <div key={number} className="border-b border-brand-border py-6 last:border-b-0">
                  <span className="text-xs font-black tracking-[0.18em] text-brand-gold-dark">{number}</span>
                  <h3 className="mt-3 text-lg font-black text-brand-navy">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-brand-slate">{description}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 space-y-4 text-sm text-brand-slate">
              <p className="flex items-center gap-3"><Mail className="size-4 text-brand-gold-dark" aria-hidden="true" /> Written enquiries welcome.</p>
              <p className="flex items-center gap-3"><MessageCircle className="size-4 text-brand-gold-dark" aria-hidden="true" /> WhatsApp conversations available.</p>
              <p className="flex items-center gap-3"><Sparkles className="size-4 text-brand-gold-dark" aria-hidden="true" /> No hard sell. Just a clear next step.</p>
            </div>
          </aside>

          <div className="min-w-0 rounded-xl border border-brand-border bg-brand-cream p-4 sm:rounded-2xl sm:p-8">
            {submitted ? (
              <div className="flex min-h-[28rem] flex-col items-start justify-center">
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-brand-gold text-brand-navy"><CheckCircle2 className="size-6" aria-hidden="true" /></span>
                <p className="mt-7 text-xs font-black uppercase tracking-[0.2em] text-brand-gold-dark">Enquiry received</p>
                <h2 className="mt-3 text-3xl font-black text-brand-navy sm:text-4xl">Thank you for the context.</h2>
                <p className="mt-4 max-w-lg text-base leading-7 text-brand-slate">Your message is ready for review. We will come back with a considered response and the most useful next step.</p>
                <Button variant="subtle" className="mt-8" onClick={() => setSubmitted(false)}>
                  Send another enquiry <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
              </div>
            ) : (
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <input type="hidden" name="time" value={new Date().toLocaleString()} readOnly />
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-gold-dark">Your enquiry</p>
                  <h2 className="mt-3 text-2xl font-black leading-tight text-brand-navy sm:text-4xl">What would you like to work on?</h2>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-bold text-brand-navy">Name<input required name="name" autoComplete="name" placeholder="Your name" className="min-h-12 w-full rounded-lg border border-brand-border bg-white px-4 text-base font-normal outline-none transition placeholder:text-brand-slate/55 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20" /></label>
                  <label className="grid gap-2 text-sm font-bold text-brand-navy">Work email<input required type="email" name="email" autoComplete="email" placeholder="you@company.com" className="min-h-12 w-full rounded-lg border border-brand-border bg-white px-4 text-base font-normal outline-none transition placeholder:text-brand-slate/55 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20" /></label>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-bold text-brand-navy">Company<input name="company" autoComplete="organization" placeholder="Company name" className="min-h-12 w-full rounded-lg border border-brand-border bg-white px-4 text-base font-normal outline-none transition placeholder:text-brand-slate/55 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20" /></label>
                  <label className="grid gap-2 text-sm font-bold text-brand-navy">Service area<select required name="service" defaultValue="" className="min-h-12 w-full rounded-lg border border-brand-border bg-white px-4 text-base font-normal outline-none transition focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20"><option value="" disabled>Select a pillar</option>{servicePillars.map((pillar) => <option key={pillar.slug} value={pillar.slug}>{pillar.title}</option>)}<option value="other">Something else</option></select></label>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-bold text-brand-navy">Timeline<select name="timeline" defaultValue="" className="min-h-12 w-full rounded-lg border border-brand-border bg-white px-4 text-base font-normal outline-none transition focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20"><option value="">Choose a timeline</option><option>Exploring now</option><option>Next 1-3 months</option><option>Within 6 months</option><option>Planning ahead</option></select></label>
                  <label className="grid gap-2 text-sm font-bold text-brand-navy">Best way to reach you<select name="contactMethod" value={contactMethod} onChange={(event) => setContactMethod(event.target.value)} className="min-h-12 w-full rounded-lg border border-brand-border bg-white px-4 text-base font-normal outline-none transition focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20"><option>Email</option><option>WhatsApp</option><option>Phone</option></select></label>
                </div>
                <label className="grid gap-2 text-sm font-bold text-brand-navy">
                  {contactMethod === 'WhatsApp' ? 'WhatsApp number' : contactMethod === 'Phone' ? 'Phone number' : 'Preferred email'}
                  <input
                    required
                    name="contact_details"
                    type={contactMethod === 'Email' ? 'email' : 'tel'}
                    autoComplete={contactMethod === 'Email' ? 'email' : 'tel'}
                    placeholder={contactMethod === 'WhatsApp' ? '+234 800 000 0000' : contactMethod === 'Phone' ? '+234 800 000 0000' : 'you@company.com'}
                    className="min-h-12 w-full rounded-lg border border-brand-border bg-white px-4 text-base font-normal outline-none transition placeholder:text-brand-slate/55 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20"
                  />
                </label>
                <label className="grid gap-2 text-sm font-bold text-brand-navy">Tell us about the opportunity<textarea required name="message" rows={6} placeholder="What are you trying to achieve, and what is making it difficult right now?" className="w-full resize-y rounded-lg border border-brand-border bg-white px-4 py-3 text-base font-normal leading-6 outline-none transition placeholder:text-brand-slate/55 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20" /></label>
                {error ? <p role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700">{error}</p> : null}
                <div className="flex flex-col gap-4 border-t border-brand-border pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-sm text-xs leading-5 text-brand-slate">By sending this enquiry, you are asking JSA Rising to review the information and respond about the request.</p>
                  <Button className="w-full sm:w-auto" type="submit" variant="navy" disabled={sending} aria-busy={sending}>
                    {sending ? 'Sending...' : 'Send enquiry'} <Send className="size-4" aria-hidden="true" />
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="bg-brand-navy py-14 text-brand-cream sm:py-20">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-gold">Prefer to explore first?</p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">See the nine ways we can help.</h2>
          </div>
          <Link to="/#service-pillars" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/20 px-5 text-sm font-bold text-white transition hover:border-brand-gold hover:text-brand-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold sm:w-auto">Explore service pillars <ArrowUpRight className="size-4" aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
  )
}
