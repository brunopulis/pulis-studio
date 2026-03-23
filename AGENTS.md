# AGENTS.md - Accessible Astro Starter

## Commands

```bash
# Development
npm run dev          # Start dev server (http://localhost:4321)
npm run build        # Production build to ./dist
npm run preview      # Preview production build

# Code Quality
npx eslint .         # Run ESLint (includes jsx-a11y strict rules)
npx prettier --write .  # Format all files

# Type Checking
npx tsc --noEmit     # TypeScript type check
```

## Code Style

### TypeScript

- Strict mode enabled via `astro/tsconfigs/strict`
- Use path aliases: `@components/*`, `@layouts/*`, `@assets/*`, `@utils/*`
- Unused vars must be prefixed with `_` or destructured with `^_` pattern
- Avoid non-null assertions (`!`) - disabled in ESLint

### Formatting (Prettier)

- 2 space indent, no semicolons, single quotes
- Print width: 120 characters
- Plugins: prettier-plugin-astro, prettier-plugin-css-order, prettier-plugin-tailwindcss

### Naming Conventions

- **Components**: PascalCase (e.g., `FeaturedProjects.astro`)
- **Utils/Functions**: camelCase (e.g., `slugify.ts`, `getCollection`)
- **CSS classes**: kebab-case or Tailwind utilities
- **Constants**: SCREAMING_SNAKE_CASE for true constants

### Imports

```astro
---
// Path aliases for local modules
import Navigation from '@components/Navigation.astro'
import DefaultLayout from '@layouts/DefaultLayout.astro'

// External packages
import { Accordion, Card } from 'accessible-astro-components'
import { Icon } from 'astro-icon/components'
---
```

### Error Handling

- Use try/catch with async operations
- Provide meaningful error messages
- Let TypeScript types handle null checks where possible

## Accessibility Requirements (WCAG 2.2 AA)

1. **Semantic HTML**: Use `<button>`, `<nav>`, `<main>`, `<article>` appropriately
2. **Keyboard Navigation**: All interactive elements must be keyboard accessible
3. **Focus Indicators**: Never remove outlines without accessible alternatives
4. **Alt Text**: Meaningful descriptions or `alt=""` for decorative images
5. **Color Contrast**: 4.5:1 for text, 3:1 for large/non-text elements
6. **ARIA**: Only when native HTML is insufficient
7. **Heading Hierarchy**: Maintain proper h1-h6 order
8. **Forms**: Always use `<label>` with proper input types
9. **Motion**: Respect `prefers-reduced-motion`

## File Structure

```
src/
├── components/      # Astro components (use @components/* imports)
├── layouts/         # Page layouts (use @layouts/* imports)
├── pages/           # File-based routing
├── content/
│   └── projects/    # MDX content (via content collections)
├── assets/
│   └── scss/        # SCSS utilities
├── styles/
│   └── tailwind.css # Global Tailwind styles
├── utils/           # Utility functions (use @utils/* imports)
├── content.config.ts # Content collection schemas
└── env.d.ts         # Type definitions

public/
├── posts/           # Blog post images
├── projects/        # Project images
└── fonts/           # Web fonts (Atkinson Hyperlegible)
```

## Styling

- **Tailwind CSS v4** with Vite plugin (utility classes preferred)
- **SCSS** for custom utilities and global styles
- **Logical CSS properties**: `inline-start` instead of `left`
- **CSS custom properties** for theming (`var(--*)`)
- OKLCH color system for palette

## Key Patterns

### Astro Components

```astro
---
// Frontmatter: TypeScript logic
interface Props {
  title: string
  variant?: 'primary' | 'secondary'
}
const { title, variant = 'primary' } = Astro.props
---

<element class:list={['base', { variant: variant === 'variant' }]}>
  {title}
</element>

<style lang="scss">
  /* Scoped styles */
</style>
```

### Content Collections

```typescript
import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).default([]),
  }),
})
export const collections = { projects }
```

## Commit Format

```
type(scope): description

Types: feat, fix, docs, style, refactor, test, chore
Examples:
  feat(blog): add social sharing
  fix(navigation): resolve keyboard trap
  a11y(forms): improve error announcements
```

## Troubleshooting

- **Module not found**: Run `rm -rf node_modules && pnpm install`
- **Build failures**: Clear cache `rm -rf node_modules/.astro node_modules/.vite`
- **ESLint errors**: Check `.eslintrc.js` for current rules
