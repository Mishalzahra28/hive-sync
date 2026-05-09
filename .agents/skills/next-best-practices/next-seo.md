# Next.js SEO — Performance & Rendering

## Why Rendering Strategy Matters for SEO

Google's crawler renders JavaScript, but it prioritises fast, fully-server-rendered HTML. Client-side-rendered (CSR) content may be indexed later or incompletely. Choose the right strategy per route.

---

## Rendering Strategy Reference

| Strategy | How | SEO impact | Best for |
|---|---|---|---|
| **SSG** | `generateStaticParams` + no `cache` option | Excellent — instant HTML | Blogs, docs, marketing pages |
| **ISR** | `revalidate: N` (seconds) | Excellent — fresh + fast | Product pages, news, pricing |
| **SSR** | `cache: 'no-store'` | Good — server renders per request | Personalised pages, real-time data |
| **CSR** | `'use client'` + `useEffect` fetch | Poor — JS must run first | Avoid for SEO-critical content |

### SSG Example

```tsx
// app/blog/[slug]/page.tsx
export async function generateStaticParams() {
  const posts = await fetchAllPosts()
  return posts.map(post => ({ slug: post.slug }))
}

export default async function BlogPost({ params }) {
  const post = await fetchPost(params.slug)   // cached at build time
  return <article>{post.content}</article>
}
```

### ISR Example

```tsx
// app/products/[slug]/page.tsx
async function fetchProduct(slug: string) {
  const res = await fetch(`https://api.mysite.com/products/${slug}`, {
    next: { revalidate: 3600 },   // re-generate every 1 hour
  })
  return res.json()
}
```

### On-Demand Revalidation

```ts
// app/api/revalidate/route.ts
import { revalidatePath, revalidateTag } from 'next/cache'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  const { path, tag, secret } = await req.json()
  if (secret !== process.env.REVALIDATE_SECRET) {
    return Response.json({ error: 'Invalid secret' }, { status: 401 })
  }
  if (tag) revalidateTag(tag)
  if (path) revalidatePath(path)
  return Response.json({ revalidated: true })
}
```

---

## `next/image` — Core Web Vitals (LCP)

**LCP (Largest Contentful Paint)** is a top Google ranking factor. Always use `next/image` for above-the-fold images.

```tsx
import Image from 'next/image'

// Hero image — add `priority` to preload it (critical for LCP)
<Image
  src="/hero.jpg"
  alt="Descriptive alt text — never leave empty on content images"
  width={1200}
  height={600}
  priority
  sizes="100vw"
/>

// Below-fold image — lazy loaded by default
<Image
  src={product.image}
  alt={product.name}
  width={400}
  height={400}
  sizes="(max-width: 768px) 100vw, 400px"
/>
```

**Key rules:**
- Add `priority` to the first visible image on each page
- Always write meaningful `alt` text — empty `alt=""` only for decorative images
- Set `sizes` accurately — it controls which resolution the browser downloads
- Never use `<img>` for content images; `next/image` handles WebP conversion, lazy loading, and responsive srcsets automatically

---

## `next/font` — Layout Stability (CLS)

**CLS (Cumulative Layout Shift)** penalises pages that shift after fonts load. `next/font` self-hosts fonts with zero CLS.

```tsx
// app/layout.tsx
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  )
}
```

```css
/* globals.css */
body { font-family: var(--font-inter), sans-serif; }
h1, h2, h3 { font-family: var(--font-playfair), serif; }
```

---

## Dynamic OG Images

Next.js can generate per-page OG images at runtime using `ImageResponse`. Place the file alongside `page.tsx`:

```tsx
// app/blog/[slug]/opengraph-image.tsx
import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Blog post OG image'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image({ params }: { params: { slug: string } }) {
  const post = await fetchPost(params.slug)

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0f172a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <p style={{ color: '#94a3b8', fontSize: 28 }}>{post.category}</p>
        <h1 style={{ color: '#f8fafc', fontSize: 64, fontWeight: 700, lineHeight: 1.2 }}>
          {post.title}
        </h1>
        <p style={{ color: '#64748b', fontSize: 24 }}>mysite.com</p>
      </div>
    ),
    { ...size }
  )
}
```

Next.js auto-wires the generated image URL into the page's Open Graph metadata.

---

## Core Web Vitals Quick Wins

| Metric | Target | Next.js technique |
|---|---|---|
| **LCP** | < 2.5s | `priority` on hero image, ISR/SSG, CDN |
| **CLS** | < 0.1 | `next/font`, explicit `width`/`height` on images |
| **INP** | < 200ms | Minimise JS in client components, code-split |
| **TTFB** | < 800ms | SSG/ISR, edge runtime, `cache: 'force-cache'` |

---

## `lang` Attribute

Always set the `lang` attribute on `<html>`. Screen readers and Google use it for language detection:

```tsx
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">   {/* or "ar" for Arabic, "fr" for French */}
      <body>{children}</body>
    </html>
  )
}
```

---

## Checklist

- [ ] Hero image has `priority` prop
- [ ] All images use `next/image` with meaningful `alt` text
- [ ] `next/font` used — no external font CDN calls
- [ ] `<html lang="...">` set in root layout
- [ ] Blog/product pages use SSG or ISR, not CSR
- [ ] Core Web Vitals measured in [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Dynamic OG images generated per page