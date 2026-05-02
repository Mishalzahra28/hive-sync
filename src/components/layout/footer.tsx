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
    <footer className="my-8 px-4 max-w-5xl text-base mx-auto bg-background">
      <div className="relative bg-muted rounded-3xl max-w-5xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center gap-6 shadow-sm border border-border">
        <div className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-10 px-2 md:px-8 flex-1">
          <div className="flex flex-col items-start gap-2">
            <Link
              href="/"
              className="flex flex-row gap-1 items-center justify-start text-2xl font-bold tracking-tight text-foreground hover:text-primary transition-colors"
              style={{ fontFamily: 'var(--font-urbanist), sans-serif' }}
            >
              HiveSync
            </Link>
            <p className="text-muted-foreground font-medium text-sm w-full md:w-4/5 leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              Full-stack software development and IT services for businesses ready to scale and compete.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-16 items-start">
            {/* Services */}
            <div className="flex flex-col gap-2 md:gap-4">
              <h4 className="uppercase text-xs text-muted-foreground font-bold tracking-[0.15em]" style={{ fontFamily: 'var(--font-urbanist), sans-serif' }}>
                Services
              </h4>
              <div className="flex flex-wrap md:flex-col gap-2 text-sm items-start">
                {[
                  { label: 'Web Development', href: '#services' },
                  { label: 'Mobile Apps', href: '#services' },
                  { label: 'Cloud Solutions', href: '#services' },
                  { label: 'UI/UX Design', href: '#services' },
                  { label: 'DevOps & CI/CD', href: '#services' },
                  { label: 'IT Consulting', href: '#services' },
                ].map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="text-muted-foreground whitespace-nowrap font-medium hover:text-primary transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Company */}
            <div className="hidden md:flex flex-col gap-1 md:gap-4">
              <h4 className="uppercase text-xs text-muted-foreground font-bold tracking-[0.15em] whitespace-nowrap" style={{ fontFamily: 'var(--font-urbanist), sans-serif' }}>
                Company
              </h4>
              <div className="flex flex-col gap-2 text-sm items-start">
                {[
                  { label: 'About Us', href: '#about' },
                  { label: 'Our Process', href: '#process' },
                  { label: 'Portfolio', href: '#portfolio' },
                  { label: 'Careers', href: paths.careers },
                  { label: 'Blog', href: '#', soon: true },
                  { label: 'Contact Us', href: '#contact' },
                ].map(({ label, href, soon }) => (
                  <Link
                    key={label}
                    href={href}
                    className="text-muted-foreground whitespace-nowrap font-medium hover:text-primary transition-colors flex items-center"
                  >
                    {label}
                    {soon && <SoonBadge />}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-3 px-4 md:px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-muted-foreground">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 items-start sm:items-center">
          <p className="whitespace-nowrap">
            ©{currentYear} HiveSync. All rights reserved.
          </p>
          <div className="flex flex-row gap-4">
            <Link href="/legal/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/legal/tos" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="nofollow noopener"
            aria-label="HiveSync on LinkedIn"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="w-5 h-5 fill-current" />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="nofollow noopener"
            aria-label="HiveSync on X (Twitter)"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Twitter className="w-5 h-5 fill-current" />
          </a>
        </div>
      </div>
    </footer>
  )
}
