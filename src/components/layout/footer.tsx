import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import Logo from '@/components/common/logo'
import { paths } from '@/constants/paths'

const serviceLinks = [
  { label: 'Web Development', href: paths.services },
  { label: 'AI Solutions', href: paths.services },
  { label: 'Mobile Apps', href: paths.services },
  { label: 'UI/UX Design', href: paths.services },
  { label: 'Cloud & DevOps', href: paths.services },
]

const companyLinks = [
  { label: 'Work', href: paths.caseStudies },
  { label: 'Process', href: paths.process },
  { label: 'Pricing', href: paths.pricing },
  { label: 'Careers', href: paths.careers },
  { label: 'Contact', href: paths.contact },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/legal/privacy-policy' },
  { label: 'Terms of Service', href: '/legal/tos' },
]

const footerHeadingClassName =
  'uppercase text-sm text-foreground font-black tracking-[0.24em] font-inter'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative max-w-[1600px] w-full mx-auto px-5 md:px-10 pb-12 pt-24 bg-background">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative bg-muted/40 backdrop-blur-2xl border border-border rounded-[40px] p-6 md:p-12 overflow-hidden shadow-2xl">
        <div className="absolute -top-24 -right-24 size-64 bg-primary/5 blur-[100px] rounded-full" />
        <div className="absolute -bottom-24 -left-24 size-64 bg-primary/5 blur-[100px] rounded-full" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <Logo width={140} className="drop-shadow-none h-8 md:h-10" />
              <p className="text-muted-foreground text-lg leading-relaxed font-inter max-w-sm">
                Engineering high-performance digital products for startups and enterprises that refuse to settle.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-muted/50 border border-border flex flex-col gap-4 max-w-sm">
              <h3 className="text-foreground font-bold font-syne">Ready to ship?</h3>
              <p className="text-sm text-muted-foreground font-inter">Let&apos;s turn your vision into shippable software.</p>
              <Link
                href={paths.getStarted}
                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all font-inter"
              >
                Start a Project <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-12 md:gap-x-16 lg:gap-x-20">
            <div className="flex flex-col gap-6 min-w-[160px]">
              <h3 className={footerHeadingClassName}>
                Services
              </h3>
              <nav className="flex flex-col gap-4" aria-label="Footer services">
                {serviceLinks.map(({ label, href }) => (
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

            <div className="flex flex-col gap-6 min-w-[160px]">
              <h3 className={footerHeadingClassName}>
                Company
              </h3>
              <nav className="flex flex-col gap-4" aria-label="Footer company">
                {companyLinks.map(({ label, href }) => (
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

            <div className="flex flex-col gap-6 min-w-[160px] md:justify-self-end">
              <h3 className={footerHeadingClassName}>
                Connect
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Email</p>
                  <a
                    href="mailto:hello@hivesync.io"
                    className="text-muted-foreground text-sm font-medium hover:text-primary transition-colors font-inter truncate"
                  >
                    hello@hivesync.io
                  </a>
                </div>

                <Link
                  href={paths.book}
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all font-inter"
                >
                  Book a Call <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-muted-foreground font-inter">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <p>&copy; {currentYear} HiveSync. All rights reserved.</p>
          <nav className="flex items-center gap-6" aria-label="Legal links">
            {legalLinks.map(({ label, href }) => (
              <Link key={label} href={href} className="hover:text-primary transition-colors">
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
