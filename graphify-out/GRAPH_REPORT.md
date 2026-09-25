# Graph Report - CicloIt  (2026-09-25)

## Corpus Check
- 38 files · ~734,445 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 116 nodes · 268 edges · 12 communities (9 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `7ba5be33`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- TranslationContext.jsx
- useTranslation
- package.json
- ui.jsx
- devDependencies
- Nav.jsx
- waLink
- Planes.jsx
- Home.jsx
- LoRaWAN.jsx

## God Nodes (most connected - your core abstractions)
1. `useTranslation()` - 44 edges
2. `waLink()` - 15 edges
3. `Eyebrow()` - 11 edges
4. `Reveal()` - 9 edges
5. `Tick()` - 7 edges
6. `TranslationProvider()` - 5 edges
7. `scripts` - 4 edges
8. `Arrow()` - 4 edges
9. `Cursos()` - 4 edges
10. `Home()` - 4 edges

## Surprising Connections (you probably didn't know these)
- `ImpactSection()` --calls--> `useTranslation()`  [EXTRACTED]
  src/components/jabali/ImpactSection.jsx → src/context/TranslationContext.jsx
- `JabaliNav()` --calls--> `useTranslation()`  [EXTRACTED]
  src/components/jabali/JabaliNav.jsx → src/context/TranslationContext.jsx
- `LanguageSwitcher()` --calls--> `useTranslation()`  [EXTRACTED]
  src/components/jabali/LanguageSwitcher.jsx → src/context/TranslationContext.jsx
- `ProjectSection()` --calls--> `useTranslation()`  [EXTRACTED]
  src/components/jabali/ProjectSection.jsx → src/context/TranslationContext.jsx
- `ResourcesSection()` --calls--> `useTranslation()`  [EXTRACTED]
  src/components/jabali/ResourcesSection.jsx → src/context/TranslationContext.jsx

## Import Cycles
- None detected.

## Communities (12 total, 3 thin omitted)

### Community 0 - "TranslationContext.jsx"
Cohesion: 0.12
Nodes (16): FeatureCard(), ImpactSection(), JabaliNav(), TABS, LanguageSwitcher(), OPTIONS, ProjectSection(), ResourcesSection() (+8 more)

### Community 1 - "useTranslation"
Cohesion: 0.16
Nodes (14): Footer(), LanguageSwitcher(), Nav(), NAV_ITEMS, NAV_KEYS, ThemeToggle(), CicloMark(), useTranslation() (+6 more)

### Community 2 - "package.json"
Cohesion: 0.10
Nodes (20): lucide-react, author, dependencies, lucide-react, react, react-dom, react-router-dom, description (+12 more)

### Community 3 - "ui.jsx"
Cohesion: 0.36
Nodes (5): Arrow(), Reveal(), useReveal(), Planes(), Servicios()

### Community 4 - "devDependencies"
Cohesion: 0.15
Nodes (13): autoprefixer, devDependencies, autoprefixer, playwright, tailwindcss, @tailwindcss/vite, vite, @vitejs/plugin-react (+5 more)

### Community 5 - "Nav.jsx"
Cohesion: 0.33
Nodes (4): App(), Eyebrow(), Contacto(), Privacidad()

### Community 8 - "waLink"
Cohesion: 0.60
Nodes (3): waLink(), Cursos(), Starlink()

## Knowledge Gaps
- **29 isolated node(s):** `name`, `version`, `description`, `main`, `dev` (+24 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `useTranslation()` connect `useTranslation` to `TranslationContext.jsx`, `ui.jsx`, `Nav.jsx`, `waLink`, `Planes.jsx`, `Home.jsx`, `LoRaWAN.jsx`?**
  _High betweenness centrality (0.182) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.048) - this node is a cross-community bridge._
- **What connects `name`, `version`, `description` to the rest of the system?**
  _29 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `TranslationContext.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.1225071225071225 - nodes in this community are weakly interconnected._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._