# 03 — Deliverables & Claude Prompts

# Zafran — Deliverables & Claude Prompts

## Deliverables to request

1. **Logo system**
    - Primary wordmark (Latin + Arabic)
    - Monogram (Z / ز)
    - App icon (1024×1024, with safe area)
    - Lockups: horizontal, stacked, monogram-only
2. **Color system**
    - Primary, secondary, neutrals, anchor dark, accent
    - Hex + RGB + HSL
    - WCAG AA contrast pairings (text on background)
3. **Type system**
    - Arabic + Latin pairing
    - Display, Heading 1–3, Body, Caption, Mono
    - Sample type specimen (AR + EN at parity)
4. **Iconography style guide**
    - 12 starter icons covering commerce, social, AI
5. **Brand pattern / motif**
    - One ornamental pattern + one functional motif (loader, divider, badge)
6. **Sample applications** (mockups)
    - App icon
    - Landing page hero (AR + EN)
    - Instagram story template
    - Instagram post template
    - In-app empty state
    - Email header
7. **Voice & messaging guide**
    - 5 taglines (AR + EN)
    - 1 elevator pitch (AR + EN)
    - 1 product manifesto (200 words, AR + EN)

## Constraints — must respect

- Bilingual parity: Arabic RTL + English LTR.
- Reads as "social commerce," not "ERP / SaaS dashboard."
- Culturally legible to a MENA seller; not alienating to a global audience.
- No robot mascots. No neon AI. No generic shopping-cart icon as the primary symbol.

---

## Prompt 1 — Three identity directions (start here)

```
You are a senior brand designer. Using the attached brief for Zafran (a SaaS that turns an Instagram seller's page into a storefront in 4 minutes), generate THREE distinct identity directions.

For each direction, deliver:
1. A one-line creative concept (the big idea).
2. A logo sketch described in detail (wordmark + monogram + symbol).
3. A 5-color palette with hex codes and named roles.
4. A type pairing (Arabic font + Latin font) with rationale.
5. One sample landing-page hero, fully written in BOTH Arabic and English.
6. A short note on what kind of seller each direction would resonate with most.

Optimize for: small-to-medium Instagram sellers in MENA who are not technical, who want to sell more (not build a store), and who already have a beautiful Instagram feed.

Avoid: robot/AI clichés, neon cyberpunk, generic SaaS purple, enterprise look-and-feel, anything that feels like a CMS.
```

## Prompt 2 — Pick a direction and expand

```
Using direction [X] from the previous reply, expand into a full identity system:
- Logo lockups (horizontal, stacked, monogram, app icon at 1024px)
- Full color system with WCAG AA contrast pairs
- Type scale (Display, H1, H2, H3, Body, Caption) in Arabic + Latin
- 12 UI icons (commerce, social, AI categories — 4 each)
- 1 ornamental pattern + 1 functional motif (a loader and a badge)
- Mockups: app icon, landing hero (AR + EN), Instagram story template, Instagram post template, in-app empty state, email header
```

## Prompt 3 — Voice & messaging

```
Write Zafran's voice and messaging guide:
- Brand voice: 5 traits with do/don't examples (AR + EN)
- 5 taglines (AR + EN) — short, sharp, seller-centric
- 1 elevator pitch in 2–3 sentences (AR + EN)
- 1 product manifesto, 200 words (AR + EN), addressed to the Instagram seller
- 6 in-app microcopy samples (empty state, success, error, AI processing, onboarding step 1, paywall) in AR + EN

Tone: direct, encouraging, jargon-free. Speak to a seller, not a developer.
```

## Prompt 4 — Stress-test against positioning

```
Review the identity you produced and stress-test it against these statements. For each, mark PASS / FAIL / PARTIAL with a one-line reason:
1. A non-technical Instagram seller in Damascus would feel this is "for them."
2. The brand reads as social commerce, not as a SaaS dashboard.
3. Arabic and English feel equally native — neither is an afterthought.
4. The AI shows up as "magic," not as "machinery."
5. It does not look like Shopify, Linktree, or a generic e-commerce CMS.
6. It would look at home next to a polished Instagram feed.
7. It avoids robot mascots, neon AI tropes, and generic shopping-cart icons.
```
