---
name: css-architecture
description: Modular CSS architecture and custom design token system for Búfalo Studio
---

# CSS Architecture Skill - Búfalo Studio

## Architecture Overview
- **Custom Properties (Design Tokens)**:
  ```css
  :root {
    --bg-light: #EDEDED;
    --bg-dark: #171717;
    --text-dark: #171717;
    --text-muted: #444444;
    --text-light: #EDEDED;
    --accent-red: #DA0037;
    --font-sans: 'Inter', system-ui, sans-serif;
    --font-mono: 'JetBrains Mono', monospace;
  }
  ```
- **Theme Transitions**:
  - Smooth theme switching on body with `transition: background-color 0.6s cubic-bezier(0.16, 1, 0.3, 1), color 0.6s cubic-bezier(0.16, 1, 0.3, 1)`.
- **Rojo Búfalo Hover Underline**:
  - `.btn-buffalo-underline` pseudos expanding from center/left with 2px height `#DA0037`.
