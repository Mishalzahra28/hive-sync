import { Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

import { paths } from '@/constants/paths'

const SoonBadge = ({ rotate = '-rotate-3' }: { rotate?: string }) => (
  <span className={`inline-flex ml-1 py-0.5 px-2.5 bg-primary/10 text-primary text-xs rounded-full font-medium ${rotate}`}>
    soon
  </span>
)

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative max-w-[1500px] w-full mx-auto px-5 md:px-10 pb-12 pt-24 bg-background">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative bg-card/30 backdrop-blur-2xl border border-border/50 rounded-[40px] p-6 md:p-12 overflow-hidden shadow-2xl">
        {/* Abstract Background Detail */}
        <div className="absolute -top-24 -right-24 size-64 bg-primary/5 blur-[100px] rounded-full" />
        <div className="absolute -bottom-24 -left-24 size-64 bg-primary/5 blur-[100px] rounded-full" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <Link
                href="/"
                className="text-3xl font-bold tracking-tight text-foreground hover:text-primary transition-colors font-syne"
              >
                HiveSync<span className="text-primary">.</span>
              </Link>
              <p className="text-muted-foreground text-lg leading-relaxed font-inter max-w-sm">
                Engineering high-performance digital products for startups and enterprises that refuse to settle.
              </p>
            </div>

            {/* CTA */}
            <div className="p-6 rounded-3xl bg-primary/5 border border-primary/10 space-y-4 max-w-sm">
              <h4 className="text-foreground font-bold font-syne">Ready to ship?</h4>
              <p className="text-sm text-muted-foreground font-inter">Let&apos;s turn your vision into shippable software.</p>
              <Link
                href={paths.getStarted}
                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all"
              >
                Start a Project <span className="text-lg">→</span>
              </Link>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 flex flex-wrap gap-x-12 gap-y-12 md:gap-x-16 lg:gap-x-24">
            {/* Services */}
            <div className="space-y-6 min-w-[160px]">
              <h4 className="uppercase text-xs text-foreground font-black tracking-[0.15em] font-syne">
                Services
              </h4>
              <nav className="flex flex-col gap-4">
                {[
                  { label: 'Web Development', href: '#services' },
                  { label: 'Mobile Apps', href: '#services' },
                  { label: 'UI/UX Design', href: '#services' },
                  { label: 'Cloud Solutions', href: '#services' },
                  { label: 'DevOps', href: '#services' },
                ].map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="text-muted-foreground text-sm font-medium hover:text-primary transition-colors font-inter"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Company */}
            <div className="space-y-6 min-w-[160px]">
              <h4 className="uppercase text-xs text-foreground font-black tracking-[0.15em] font-syne">
                Company
              </h4>
              <nav className="flex flex-col gap-4">
                {[
                  { label: 'About Us', href: '#about' },
                  { label: 'Portfolio', href: '#portfolio' },
                  { label: 'Careers', href: paths.careers },
                  { label: 'Our Process', href: '#process' },
                  { label: 'Blog', href: '#', soon: true },
                ].map(({ label, href, soon }) => (
                  <Link
                    key={label}
                    href={href}
                    className="text-muted-foreground text-sm font-medium hover:text-primary transition-colors flex items-center gap-2 font-inter"
                  >
                    {label}
                    {soon && <SoonBadge />}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Support */}
            <div className="space-y-6 min-w-[160px]">
              <h4 className="uppercase text-xs text-foreground font-black tracking-[0.15em] font-syne">
                Connect
              </h4>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:hello@hivesync.io"
                  className="text-muted-foreground text-sm font-medium hover:text-primary transition-colors font-inter truncate"
                >
                  hello@hivesync.io
                </a>
                <div className="flex gap-3 pt-2">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    className="size-10 rounded-xl bg-foreground/5 flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all border border-border/50"
                  >
                    <Linkedin className="size-5" />
                  </a>
                  <a
                    href="https://x.com"
                    target="_blank"
                    className="size-10 rounded-xl bg-foreground/5 flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all border border-border/50"
                  >
                    <Twitter className="size-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-muted-foreground font-inter">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <p>© {currentYear} HiveSync. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/legal/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/legal/tos" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
