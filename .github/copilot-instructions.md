# Pimp My Pixel - AI Coding Agent Instructions

## Project Overview
This is a modern portfolio website for Andreas Hesse, built with Next.js 14 and deployed as a static site to GitHub Pages. The site showcases professional experience, skills, and contact information with a focus on privacy and performance.

## Architecture & Tech Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with shadcn/ui components
- **Build**: Static export (`next build`) for GitHub Pages
- **Package Manager**: Bun (see `bun.lock`)
- **Deployment**: GitHub Actions CI/CD to Pages
- **Theme**: next-themes with light/dark mode toggle

## Key Architectural Patterns

### 1. Single-Page Application Structure
- All content lives in `app/page.tsx` as a single component
- Sections: Hero, About, Experience, Skills, Contact
- Smooth scrolling navigation with anchor links

### 2. Data-Driven Components
- Experience data sourced from `data/experiences.json`
- JSON structure includes achievements, references, tech stacks
- Example: `ExperienceCard` component maps over experience array

### 3. Privacy-First Contact System
- Contact info obfuscated by default using `ObfuscatedContact` component
- Click-to-reveal pattern prevents email/phone harvesting
- References use `ObfuscatedReference` for similar protection

### 4. Component Organization
- UI components in `components/ui/` (shadcn/ui pattern)
- Custom components in `components/` root
- Theme provider wraps entire app in `app/layout.tsx`

### 5. Static Export Configuration
- `next.config.mjs` configured for static export
- `output: 'export'` with trailing slashes
- Images unoptimized, TypeScript/ESLint errors ignored during build

## Development Workflow

### Local Development
```bash
bun dev  # Start dev server
bun build  # Build for production
bun run export  # Export static files (same as build for this config)
```

### Adding New Content
1. Update data files (e.g., `data/experiences.json`)
2. Modify components if data structure changes
3. Test theme switching and responsive design
4. Verify contact obfuscation works

### Component Creation Pattern
```tsx
// Example: New section component
export function NewSection() {
  return (
    <section id="new-section" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-bold mb-6 sticky top-32">Title</h2>
          </div>
          <div className="lg:col-span-8">
            {/* Content */}
          </div>
        </div>
      </div>
    </section>
  )
}
```

## Design System Conventions

### Layout Grid
- Max width: `max-w-7xl` (1280px)
- Grid: `lg:grid-cols-12` with `gap-12`
- Sidebar: `lg:col-span-4`, Content: `lg:col-span-8`
- Sticky headings: `sticky top-32`

### Color Scheme
- Primary: `text-primary` (theme-aware)
- Muted: `text-muted-foreground`
- Background sections alternate with `bg-muted/30`

### Animation & Interaction
- Hover effects: `hover:scale-105 transition-transform duration-200`
- Cards: `hover:shadow-lg transition-all duration-300`
- Theme toggle: Smooth icon transitions

### Typography Scale
- Hero: `text-6xl lg:text-6xl`
- Section headers: `text-4xl font-bold`
- Body large: `text-xl leading-relaxed`
- Body: `text-lg leading-relaxed`

## Data Structure Patterns

### Experience JSON Schema
```json
{
  "id": "unique-slug",
  "dateRange": "2023 — Present",
  "badge": "Current",
  "title": "Job Title",
  "company": "Company • Description",
  "achievements": ["Bullet points"],
  "whyLoved": "Personal reflection",
  "reference": {
    "name": "Name",
    "title": "Title",
    "obfuscatedEmail": "xXXX@XX.XXX",
    "realEmail": "real@email.com"
  },
  "techStack": ["Tech1", "Tech2"],
  "hasExternalLink": false
}
```

## Deployment & CI/CD
- GitHub Actions workflow in `.github/workflows/deploy.yml`
- Triggers on push to `main` branch
- Uses Bun for dependency installation
- Builds and deploys static files to GitHub Pages

## Key Files to Reference
- `app/page.tsx` - Main application component
- `data/experiences.json` - Experience data
- `components/ExperienceCard.tsx` - Data mapping example
- `components/obfuscated-contact.tsx` - Privacy pattern
- `components/theme-toggle.tsx` - Theme switching
- `next.config.mjs` - Build configuration

## Common Tasks
- **Add experience**: Update `experiences.json`, test ExperienceCard rendering
- **Modify contact**: Use ObfuscatedContact pattern for privacy
- **Add section**: Follow grid layout pattern with sticky sidebar
- **Update skills**: Add to skills section in page.tsx
- **Change theme**: Modify CSS variables in globals.css or component styles

## Performance Considerations
- Static export eliminates server-side rendering overhead
- Particles animation optimized with `fpsLimit: 120`
- Images use external CDNs (devicon, custom URLs)
- Minimal JavaScript bundle due to static nature</content>
<parameter name="filePath">/Users/andreas/Documents/github.io/pimpmypixel.github.io/.github/copilot-instructions.md