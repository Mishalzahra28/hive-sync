import clsx from 'clsx'
import Image from 'next/image'

// DESIGN.md color mapping:
// Light bg:  gray-50 (#F8FAFC) → blue-100 (#DBEAFE) → indigo-300 (#A5B4FC)
// Dark bg:   gray-950 (#020617) → indigo-950 (#1e1b4b) → indigo-700 (#4338CA) → indigo-500 (#6366F1)
// Arc:       gray-950 core → indigo-500 (#6366F1) halo
// Text primary:   gray-900 (#0F172A) / dark gray-100 (#F1F5F9)
// Text muted:     gray-500 (#64748B) / dark gray-400 (#94A3B8)
// CTA gradient:   blue-600 (#2563EB) → indigo-500 (#6366F1) → purple-400 (#A78BFA)

const FUIHeroWithBorders = () => {
  return (
    <section className="relative min-h-[calc(100vh-50px)] overflow-hidden pt-24 bg-[linear-gradient(to_bottom,#F8FAFC,#DBEAFE_40%,#A5B4FC_88%)] dark:bg-[linear-gradient(to_bottom,#020617,#1e1b4b_40%,#4338CA_74%,#6366F1_88%)]">

      {/* Bottom arc — gray-950 surface with indigo-500 radial halo */}
      <div className="absolute left-1/2 top-[calc(100%-90px)] lg:top-[calc(100%-150px)] h-[500px] w-[700px] md:h-[500px] md:w-[1100px] lg:h-[750px] lg:w-[100%] -translate-x-1/2 rounded-[100%] bg-[#F8FAFC] bg-[radial-gradient(closest-side,#F8FAFC_82%,#6366F1)] dark:bg-[#020617] dark:bg-[radial-gradient(closest-side,#020617_82%,#6366F1)]" />

      {/* Grid border lines */}
      <div className="absolute left-0 top-0 z-0 grid h-full w-full grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)] border-b border-[#E2E8F0] dark:border-[#1E293B]">
        <div className="col-span-1 flex h-full items-center justify-center" />
        <div className="col-span-1 flex h-full items-center justify-center border-x border-[#E2E8F0]/60 dark:border-white/10" />
        <div className="col-span-1 flex h-full items-center justify-center" />
      </div>

      {/* Ambient glow blobs */}
      {/* Bottom center — indigo-500 glow */}
      <figure className="pointer-events-none absolute -bottom-[70%] left-1/2 z-0 block aspect-square w-[520px] -translate-x-1/2 rounded-full bg-[#6366F1]/30 blur-[200px]" />
      {/* Top-left — blue-100 in light, gray-800 in dark */}
      <figure className="pointer-events-none absolute left-[4vw] top-[64px] z-20 hidden aspect-square w-[32vw] rounded-full bg-[#DBEAFE] opacity-60 blur-[100px] dark:bg-[#1E293B] dark:opacity-50 md:block" />
      {/* Bottom-right — blue-100 in light, gray-800 in dark */}
      <figure className="pointer-events-none absolute bottom-[-50px] right-[7vw] z-20 hidden aspect-square w-[30vw] rounded-full bg-[#DBEAFE] opacity-60 blur-[100px] dark:bg-[#1E293B] dark:opacity-50 md:block" />

      <div className="relative z-10 flex flex-col divide-y divide-[#E2E8F0]/60 dark:divide-white/10 pt-[35px] pb-24">

        {/* Social proof pill */}
        <div className="flex flex-col items-center justify-end">
          <div className="flex items-center gap-2 border border-b-0 border-[#CBD5E1]/60 dark:border-white/10 px-4 py-2">
            <span className="inline-block h-2 w-2 rounded-full bg-[#3B82F6]" />
            <p className="text-sm tracking-tight text-[#64748B] dark:text-[#94A3B8]">
              200+ projects delivered · trusted by 50+ companies worldwide
            </p>
          </div>
        </div>

        {/* Headline block */}
        <div>
          <div className="mx-auto flex min-h-[300px] max-w-[85vw] shrink-0 flex-col items-center justify-center gap-4 px-2 py-12 sm:px-10 lg:px-24">
            <h1 className="text-pretty text-center text-4xl font-extrabold leading-tight tracking-tight text-[#0F172A] dark:text-[#F1F5F9] sm:text-5xl md:text-6xl md:max-w-3xl" style={{ fontFamily: 'var(--font-syne), sans-serif' }}>
              Maximize Your Day, <br /><span className="text-blue-500">Minimize Distractions</span>
            </h1>
            <h2 className="max-w-2xl text-pretty text-center text-sm text-[#64748B] dark:text-[#94A3B8] md:text-lg leading-relaxed opacity-80" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              Hive Sync empowers you to take control of your time with seamless task management, helping you stay focused and productive.
            </h2>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex items-start justify-center px-8 sm:px-24">
          <div className="flex w-full max-w-[80vw] flex-col items-center justify-start md:max-w-[392px]">

            {/* Primary CTA — "Download for Mac" (Dark blue in image) */}
            <a href="#" className="w-full cursor-pointer">
              <div
                className={clsx(
                  'flex h-12 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold text-white shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]',
                  'bg-[#1E40AF] dark:bg-[#3B82F6]',
                )}
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                <Image 
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" 
                  width={16}
                  height={16}
                  className="h-4 w-4 invert" 
                  alt="Apple" 
                />
                Download for Mac
              </div>
            </a>

            {/* Secondary — "Book a demo" (White in image) */}
            <a href="#" className="w-full cursor-pointer mt-3">
              <div
                className={clsx(
                  'flex h-12 w-full items-center justify-center rounded-xl text-sm font-semibold transition-all hover:bg-white/90 shadow-sm border border-border',
                  'bg-white text-slate-900',
                )}
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                Book a demo
              </div>
            </a>
            <p className="mt-6 text-xs text-[#64748B] dark:text-[#94A3B8] font-medium opacity-60">
              30-day trial, no credit card required
            </p>
          </div>
        </div>

        {/* Projects showcase will be placed below this section in page.tsx */}

      </div>
    </section>
  )
}

export default FUIHeroWithBorders


// ─── Animated Logo Cloud ────────────────────────────────────────────────────

const logos = [
  {
    name: 'Vercel',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881430/vercel_wordmark_dark_mhv8u8.svg',
  },
  {
    name: 'Nextjs',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881475/nextjs_logo_dark_gfkf8m.svg',
  },
  {
    name: 'Prime',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/t2awrrfzdvmg1chnzyfr.svg',
  },
  {
    name: 'Trustpilot',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tkfspxqmjflfllbuqxsi.svg',
  },
  {
    name: 'Webflow',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/nymiivu48d5lywhf9rpf.svg',
  },
  {
    name: 'Airbnb',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/pmblusboe7vkw8vxdknx.svg',
  },
  {
    name: 'Tina',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/afqhiygywyphuou6xtxc.svg',
  },
  {
    name: 'Stackoverflow',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/ts1j4mkooxqmscgptafa.svg',
  },
  {
    name: 'Mistral',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tyos2ayezryjskox3wzs.svg',
  },
]

export const AnimatedLogoCloud = () => {
  return (
    <div className="w-full py-12">
      <div className="mx-auto w-full px-4 md:px-8">
        <div
          className="group relative mt-6 flex gap-6 overflow-hidden p-2"
          style={{
            maskImage:
              'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)',
          }}
        >
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="flex shrink-0 animate-x-slider flex-row justify-around gap-6"
              >
                {logos.map((logo, key) => (
                  <Image
                    key={key}
                    src={logo.url}
                    width={112}
                    height={40}
                    className="h-10 w-28 flex-none px-2 brightness-0 dark:invert"
                    alt={logo.name}
                  />
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
