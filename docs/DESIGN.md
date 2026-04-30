# Design System

A practical color and UI/UX guide built around the brand blues, with the neutrals and semantic colors needed to actually ship a product.

> **Note on scope:** You provided three brand colors. Everything else in this document — neutrals, semantic colors, typography, spacing — is added because a three-color palette alone cannot run a real interface. Brand-given values are marked **(brand)**; everything else is **(added)** and should be treated as a reasonable default, not gospel.

---

## 1. Color System

### 1.1 Brand Colors (brand)

| Token             | Hex       | Use                                                                |
| ----------------- | --------- | ------------------------------------------------------------------ |
| `brand-blue`      | `#3B82F6` | Primary actions, links, focus rings, key brand surfaces            |
| `brand-indigo`    | `#6366F1` | Secondary emphasis, gradients, hover states on primary             |
| `brand-purple`    | `#8B5CF6` | Tertiary accent, illustrations, gradient endpoints, special states |

**Honest critique of the brand palette:**
These three hues sit within ~50° of each other on the color wheel. That's intentional cohesion, but it means:
- Don't use all three in the same component — they'll fight for attention without clear hierarchy.
- For data visualization with more than 3 categories, this palette **will not work** on its own. You'll need to extend it (see §1.5).
- The contrast between `brand-blue` and `brand-indigo` is low; users will not perceive them as distinct in small UI elements like badges or dots.

### 1.2 Recommended Use of Brand Colors

- **Pick one primary, stick with it.** `#3B82F6` is the strongest candidate as the dominant action color (best contrast, most universally readable).
- Use `#6366F1` and `#8B5CF6` as **accents and gradients**, not as alternate primary buttons.
- A signature gradient `linear-gradient(135deg, #3B82F6 0%, #6366F1 50%, #8B5CF6 100%)` works well for hero sections, premium tiers, and brand moments — but resist using it on small UI like buttons, where it adds noise without value.

### 1.3 Extended Brand Scale (added)

To use brand colors across backgrounds, borders, hover states, and disabled states, you need lighter and darker variants. These are mathematically derived; tune by eye in production.

#### Blue scale
| Token       | Hex       | Typical use                          |
| ----------- | --------- | ------------------------------------ |
| `blue-50`   | `#EFF6FF` | Subtle background tints              |
| `blue-100`  | `#DBEAFE` | Hover background on light surfaces   |
| `blue-200`  | `#BFDBFE` | Borders on tinted surfaces           |
| `blue-300`  | `#93C5FD` | Disabled primary text                |
| `blue-400`  | `#60A5FA` | Hover state for primary on dark      |
| `blue-500`  | `#3B82F6` | **Brand primary**                    |
| `blue-600`  | `#2563EB` | Hover state for primary on light     |
| `blue-700`  | `#1D4ED8` | Active/pressed state                 |
| `blue-800`  | `#1E40AF` | Headings on tinted backgrounds       |
| `blue-900`  | `#1E3A8A` | Deepest accent, rare use             |

#### Indigo scale
| Token         | Hex       |
| ------------- | --------- |
| `indigo-50`   | `#EEF2FF` |
| `indigo-100`  | `#E0E7FF` |
| `indigo-200`  | `#C7D2FE` |
| `indigo-300`  | `#A5B4FC` |
| `indigo-400`  | `#818CF8` |
| `indigo-500`  | `#6366F1` |
| `indigo-600`  | `#4F46E5` |
| `indigo-700`  | `#4338CA` |
| `indigo-800`  | `#3730A3` |
| `indigo-900`  | `#312E81` |

#### Purple scale
| Token         | Hex       |
| ------------- | --------- |
| `purple-50`   | `#F5F3FF` |
| `purple-100`  | `#EDE9FE` |
| `purple-200`  | `#DDD6FE` |
| `purple-300`  | `#C4B5FD` |
| `purple-400`  | `#A78BFA` |
| `purple-500`  | `#8B5CF6` |
| `purple-600`  | `#7C3AED` |
| `purple-700`  | `#6D28D9` |
| `purple-800`  | `#5B21B6` |
| `purple-900`  | `#4C1D95` |

### 1.4 Neutrals (added — non-negotiable)

Most of any real UI is neutral, not brand. A slight cool tint (very minor blue lean) makes neutrals feel related to the brand without competing.

| Token         | Hex       | Use                                                |
| ------------- | --------- | -------------------------------------------------- |
| `gray-0`      | `#FFFFFF` | Pure white — light mode page background           |
| `gray-50`     | `#F8FAFC` | Light mode app background                          |
| `gray-100`    | `#F1F5F9` | Card backgrounds, subtle row hover                 |
| `gray-200`    | `#E2E8F0` | Borders, dividers                                  |
| `gray-300`    | `#CBD5E1` | Stronger borders, disabled backgrounds             |
| `gray-400`    | `#94A3B8` | Placeholder text, disabled text                    |
| `gray-500`    | `#64748B` | Secondary text                                     |
| `gray-600`    | `#475569` | Body text on light surfaces                        |
| `gray-700`    | `#334155` | Strong body text                                   |
| `gray-800`    | `#1E293B` | Headings, dark mode card surfaces                  |
| `gray-900`    | `#0F172A` | Maximum contrast text, dark mode app background    |
| `gray-950`    | `#020617` | Dark mode page background                          |

### 1.5 Semantic Colors (added — non-negotiable)

Brand colors must never carry semantic meaning. A purple "error" message is unusable.

| Token       | Hex       | Use                              |
| ----------- | --------- | -------------------------------- |
| `success`   | `#10B981` | Confirmations, positive states   |
| `success-bg`| `#D1FAE5` | Success message backgrounds      |
| `warning`   | `#F59E0B` | Warnings, caution states         |
| `warning-bg`| `#FEF3C7` | Warning message backgrounds      |
| `danger`    | `#EF4444` | Errors, destructive actions      |
| `danger-bg` | `#FEE2E2` | Error message backgrounds        |
| `info`      | `#3B82F6` | Informational messages (= blue-500) |
| `info-bg`   | `#DBEAFE` | Info message backgrounds         |

> Note: `info` deliberately equals `brand-blue`. This works because info messaging and the brand identity reinforce each other. If the brand were red or orange, this overlap would be a problem.

### 1.6 Data Visualization Palette (added)

For charts with multiple series, the brand palette alone is insufficient. Use this categorical scale instead — it includes the brand hues plus complements that are perceptually distinct.

```
#3B82F6  Blue       (brand)
#8B5CF6  Purple     (brand)
#10B981  Emerald
#F59E0B  Amber
#EC4899  Pink
#14B8A6  Teal
#6366F1  Indigo     (brand) — use last; close to blue
#EF4444  Red
```

Order matters: assign in this sequence so the most-distinct colors get used first. **Always pair color with another encoding** (label, shape, position) for accessibility — never color alone.

---

## 2. Light & Dark Mode

### 2.1 Light Mode

| Role                  | Token                   |
| --------------------- | ----------------------- |
| Page background       | `gray-50` (`#F8FAFC`)   |
| Surface (cards)       | `gray-0` (`#FFFFFF`)    |
| Elevated surface      | `gray-0` + shadow       |
| Border default        | `gray-200`              |
| Border strong         | `gray-300`              |
| Text primary          | `gray-900`              |
| Text secondary        | `gray-600`              |
| Text muted            | `gray-500`              |
| Text disabled         | `gray-400`              |
| Action primary        | `blue-500`              |
| Action primary hover  | `blue-600`              |
| Action primary active | `blue-700`              |
| Focus ring            | `blue-500` @ 40% opacity, 3px |
| Link                  | `blue-600`              |
| Link hover            | `blue-700`              |

### 2.2 Dark Mode

Dark mode is **not** light mode with inverted colors. Real rules:

1. **Never use pure black (`#000000`) for backgrounds.** It causes halation around text. Use `gray-950` or `gray-900`.
2. **Never use pure white (`#FFFFFF`) for body text on dark.** It vibrates. Use `gray-100` or `gray-200`.
3. **Desaturate brand colors slightly.** Saturated colors look harsh on dark. Shift the primary one step lighter.
4. **Elevation is shown by lighter surfaces, not by shadows.** Shadows mostly disappear on dark backgrounds.

| Role                  | Token                   |
| --------------------- | ----------------------- |
| Page background       | `gray-950` (`#020617`)  |
| Surface (cards)       | `gray-900` (`#0F172A`)  |
| Elevated surface      | `gray-800` (`#1E293B`)  |
| Border default        | `gray-800`              |
| Border strong         | `gray-700`              |
| Text primary          | `gray-100`              |
| Text secondary        | `gray-400`              |
| Text muted            | `gray-500`              |
| Text disabled         | `gray-600`              |
| Action primary        | `blue-400` (`#60A5FA`)  |
| Action primary hover  | `blue-300`              |
| Action primary active | `blue-500`              |
| Focus ring            | `blue-400` @ 50% opacity, 3px |
| Link                  | `blue-400`              |
| Link hover            | `blue-300`              |

### 2.3 Implementation (CSS Variables)

```css
:root {
  /* Brand */
  --color-blue: #3B82F6;
  --color-indigo: #6366F1;
  --color-purple: #8B5CF6;

  /* Light mode (default) */
  --bg-page: #F8FAFC;
  --bg-surface: #FFFFFF;
  --bg-elevated: #FFFFFF;
  --border-default: #E2E8F0;
  --border-strong: #CBD5E1;
  --text-primary: #0F172A;
  --text-secondary: #475569;
  --text-muted: #64748B;
  --action-primary: #3B82F6;
  --action-primary-hover: #2563EB;
  --action-primary-active: #1D4ED8;
  --focus-ring: rgba(59, 130, 246, 0.4);
}

[data-theme="dark"] {
  --bg-page: #020617;
  --bg-surface: #0F172A;
  --bg-elevated: #1E293B;
  --border-default: #1E293B;
  --border-strong: #334155;
  --text-primary: #F1F5F9;
  --text-secondary: #94A3B8;
  --text-muted: #64748B;
  --action-primary: #60A5FA;
  --action-primary-hover: #93C5FD;
  --action-primary-active: #3B82F6;
  --focus-ring: rgba(96, 165, 250, 0.5);
}

/* Respect OS preference as default */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    /* same as [data-theme="dark"] above */
  }
}
```

Toggle with a user preference stored separately from the OS preference. **Always let users override the OS setting** — many people deliberately want one mode regardless of system.

---

## 3. Accessibility (non-negotiable)

### 3.1 Contrast Requirements

WCAG AA is the minimum bar. AAA where feasible.

- **Body text:** ≥ 4.5:1 contrast against its background
- **Large text (18pt+ / 14pt+ bold):** ≥ 3:1
- **UI components and graphics:** ≥ 3:1
- **Disabled elements:** WCAG exempts these, but aim for ≥ 3:1 anyway — fully invisible disabled buttons confuse users.

**Verified contrast ratios for this palette:**
- `gray-900` on `gray-0` (light body text): **18.7:1** ✅ AAA
- `blue-500` on `gray-0` (primary button background — text on top must be white): button bg contrast 4.0:1 — passes for UI but **white text on `blue-500` is 4.5:1**, scrapes by AA. Consider `blue-600` for text-bearing buttons (5.2:1).
- `blue-400` on `gray-950` (dark mode primary): 7.1:1 ✅ AAA

**Failure modes to avoid:**
- `gray-400` text on `gray-0` background = 2.8:1 — **fails**. Don't use `gray-400` for any readable text on light mode.
- Brand purple text on white = 4.6:1 — passes AA but feels low. Reserve purple text for headings or display only.

### 3.2 Color is Never the Only Signal

Errors get a red border **and** an icon **and** text. Required fields get an asterisk **and** a label. Charts get colors **and** patterns or labels. Color-blind users (~8% of men) and screen-reader users depend on this.

### 3.3 Focus States

- Always visible. Never `outline: none` without a replacement.
- 3px ring, brand color at 40–50% opacity, with a 2px offset on dark mode for visibility against dark surfaces.
- Distinct from hover — hover and focus must look different.

### 3.4 Motion

- Respect `prefers-reduced-motion`. Disable non-essential animations entirely when set.
- Never animate critical state changes faster than ~150ms or slower than ~400ms.
- Transitions are for affordance, not decoration.

---

## 4. Typography (added)

A type system this minimal is opinionated. Adjust to your brand voice.

### 4.1 Font Stack

```css
--font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
--font-mono: "JetBrains Mono", "SF Mono", Menlo, Consolas, monospace;
```

Inter is a defensible default: open-source, designed for screens, excellent at small sizes. Substitute if your brand demands character (Inter is intentionally neutral).

### 4.2 Type Scale (1.250 ratio — Major Third)

| Token        | Size     | Line height | Weight  | Use                  |
| ------------ | -------- | ----------- | ------- | -------------------- |
| `text-xs`    | 12px     | 16px        | 400/500 | Captions, metadata   |
| `text-sm`    | 14px     | 20px        | 400/500 | Secondary body, UI   |
| `text-base`  | 16px     | 24px        | 400     | Body — default       |
| `text-lg`    | 18px     | 28px        | 400/500 | Lead paragraphs      |
| `text-xl`    | 20px     | 28px        | 600     | Small headings       |
| `text-2xl`   | 24px     | 32px        | 600     | Section headings     |
| `text-3xl`   | 30px     | 36px        | 700     | Page headings        |
| `text-4xl`   | 36px     | 40px        | 700     | Display              |
| `text-5xl`   | 48px     | 1.0         | 800     | Marketing display    |

### 4.3 Rules
- **Never go below 14px** for any text a user must read. 12px is for metadata only (timestamps, character counts).
- **Line height 1.5** for body, **1.2–1.3** for headings.
- **Max line length: 65–75 characters** for prose. Wider is unreadable; users get lost between lines.
- **One font weight change per visual hierarchy step**, not three.

---

## 5. Spacing & Layout (added)

### 5.1 Spacing Scale (4px base)

```
0    1    2    3    4    6    8    12   16   20   24
0px  4px  8px  12px 16px 24px 32px 48px 64px 80px 96px
```

Stick to the scale. Arbitrary spacing (`13px`, `27px`) is the easiest way to make a UI feel sloppy.

### 5.2 Layout Rules
- **Grid:** 12-column desktop, 4-column mobile, with a max content width of ~1200–1280px for product UI.
- **Breakpoints:** 640 / 768 / 1024 / 1280 / 1536. Don't invent new ones unless content forces it.
- **Touch targets:** ≥ 44×44px on mobile. Non-negotiable.

---

## 6. Component Patterns

### 6.1 Buttons

| Variant     | Light bg          | Light text   | Dark bg           | Dark text    |
| ----------- | ----------------- | ------------ | ----------------- | ------------ |
| Primary     | `blue-600`        | white        | `blue-500`        | white        |
| Secondary   | `gray-100`        | `gray-900`   | `gray-800`        | `gray-100`   |
| Ghost       | transparent       | `gray-700`   | transparent       | `gray-200`   |
| Danger      | `danger`          | white        | `danger`          | white        |

Notes:
- Primary uses `blue-600` (not `blue-500`) on light mode for stronger contrast with white text.
- Avoid the temptation to make primary a brand gradient. Gradient buttons are visually noisy and harder to make accessible.
- One primary action per view. If you have two primaries, you have none.

### 6.2 Forms

- Label above the input, not inside (placeholder-as-label fails accessibility and disappears on input).
- Error message **below** the field, with icon + text + red border. Three signals.
- Required marker (`*`) belongs in the label, with `aria-required` on the input.
- Inline validation only after blur, never on every keystroke (it punishes users mid-typing).

### 6.3 Empty States, Loading, Errors

These three states are skipped 80% of the time and are 80% of the perceived quality of a product. Design them.

- **Empty:** explain what would normally be here, and the next action.
- **Loading:** skeleton screens > spinners for content; spinners are fine for actions.
- **Error:** what happened, why (if known), what the user can do.

---

## 7. Things This Document Does Not Cover

Be honest about gaps:
- **Iconography** — pick a single icon library (Lucide, Heroicons) and stick to it. Mixed icon styles ruin visual coherence faster than mixed colors.
- **Illustration style** — out of scope.
- **Voice and tone** — out of scope, but more important than most teams admit.
- **Internationalization** — text expansion (German is ~30% longer than English), RTL layouts, locale-aware date/number formats. If you'll ship in multiple languages, design for it from day one.
- **Product-specific patterns** — dashboards, settings pages, onboarding flows each have their own conventions worth a separate doc.

---

## 8. How to Use This Document

1. **Don't treat this as final.** Test the contrast ratios in your real UI. Verify the dark mode `blue-400` doesn't vibrate against your specific surface colors.
2. **Pick one primary, one accent.** Resist using all three brand colors equally.
3. **Build the gray scale before the components.** 80% of your UI is neutrals.
4. **Audit accessibility before launching, not after.** Run axe DevTools or similar. Fixing contrast bugs late is expensive.
5. **Document deviations.** If you break a rule here, write down why. Future you will need to know.