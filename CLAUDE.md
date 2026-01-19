# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

The Fynnx is a marketing/landing page website for a software development agency. It's a React single-page application built with Vite and styled with Tailwind CSS (loaded via CDN).

## Commands

- `npm install` - Install dependencies
- `npm run dev` - Start development server on port 3000
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run preview` - Preview production build

## Architecture

**Entry Points:**
- `index.html` - HTML shell with Tailwind config and global styles
- `index.tsx` - React entry point, renders App to `#root`
- `App.tsx` - Main component that composes all page sections

**Components (`components/`):**
Landing page sections rendered in order:
1. Navigation
2. HeroSection
3. ProblemSection
4. ApproachSection
5. ServicesSection
6. CredibilitySection
7. PhilosophySection
8. FinalCTA
9. Footer

**Styling:**
- Tailwind CSS loaded via CDN in `index.html`
- Custom Tailwind config defined inline in `index.html` (brand colors, fonts)
- Brand colors: `brand-black`, `brand-charcoal`, `brand-gray`, `brand-blue`, `brand-red`
- Fonts: Space Grotesk (headings), Inter (body)
- Global noise texture overlay and grid background defined in `index.html` styles

**Path Aliases:**
- `@/*` maps to project root (configured in `vite.config.ts` and `tsconfig.json`)

## Deployment

Deployed to Netlify. Configuration in `netlify.toml`:
- Build command: `npm run build`
- Publish directory: `dist`
- SPA redirect configured for client-side routing

## Environment Variables

- `GEMINI_API_KEY` - Set in `.env.local` (exposed to client as `process.env.GEMINI_API_KEY`)
