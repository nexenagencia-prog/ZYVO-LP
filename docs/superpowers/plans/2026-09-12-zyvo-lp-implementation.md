# ZYVO Landing Page Implementation Plan

**Goal:** Build a production-ready, Apple-inspired landing page for ZYVO without touching ZYVO-2026.

**Architecture:** Standalone Next.js App Router project. ZYVO, Skills and Human Pro are presented as separate concepts, with Human Pro explicitly positioned as a tool inside ZYVO.

**Tech Stack:** Next.js 15, React 19, TypeScript, CSS.

## Constraints
- Do not modify ZYVO-2026.
- Keep Skills and Human Pro separate.
- Human Pro is a tool inside ZYVO.
- Apple-inspired visual system: monochrome base, glass, soft gradients, large editorial type, generous whitespace.
- Responsive on desktop and mobile.

## Tasks
1. Foundation: Next.js, metadata, TypeScript and project config.
2. Landing: navigation, hero, ZYVO explanation, Skills, Human Pro, process, intelligence section, CTA and footer.
3. Visual system: glassmorphism, responsive cards, soft gradients and high-end typography.
4. Verification: inspect repository and production build when dependency installation is available.
