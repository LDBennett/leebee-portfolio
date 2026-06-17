# Lee Bennett — Developer Portfolio

Personal developer portfolio and interactive resume for Lee Bennett, Full-Stack Engineer based in Pittsburgh, PA.

## Stack

- **Framework:** Astro v5 (static output)
- **Styling:** Tailwind CSS v4 (CSS-first, no config file)
- **Animations:** Motion (v12) — scroll reveal, hero stagger, 3D card tilt
- **Icons:** astro-icon with Lucide and Simple Icons iconsets
- **Content:** Astro Content Collections — projects and resume entries as JSON; project/resume notes as MDX
- **Deploy:** Cloudflare Pages

## Architecture

The codebase follows [Feature-Sliced Design (FSD)](https://feature-sliced.design/) for the frontend and Domain-Driven Design principles for content collections.

```
src/
├── shared/        # Reusable primitives, global styles, layouts, utilities
├── entities/      # Core domain objects — Project, ResumeEntry, ResumeNote
├── features/      # (reserved for explicit user interactions)
├── widgets/       # Composed page sections — Hero, Skills, Projects, Resume, Footer
└── pages/         # Astro routes
```

Content lives in `src/content/` with strict Zod schema validation:

```
src/content/
├── projects/      # JSON — project metadata
├── projectNotes/  # MDX — project case studies
└── resume/        # JSON — work history entries
```

## Local Development

```sh
pnpm install
pnpm dev          # starts at http://localhost:4321
pnpm build        # production build to ./dist/
pnpm preview      # preview the build locally
```

### Live Data (optional)

The hero section shows live "Now Playing" games and recent D&D rolls from external APIs. Set these in `.env` for local development:

```env
PUBLIC_GAMES_API_URL=http://localhost:3000
PUBLIC_ROLLS_API_URL=http://localhost:5173
```

For production, set `PUBLIC_GAMES_API_URL` and `PUBLIC_ROLLS_API_URL` as environment variables in Cloudflare Pages. If the APIs are unavailable the placeholders render gracefully.

## Deploy

Hosted on Cloudflare Pages:

- **Build command:** `pnpm build`
- **Output directory:** `dist`
- **Node version:** 20
