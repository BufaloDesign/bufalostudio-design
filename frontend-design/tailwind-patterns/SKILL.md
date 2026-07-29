---
name: tailwind-patterns
description: Custom Tailwind CSS pattern library and utility configs for Búfalo Studio
---

# Tailwind Patterns Skill - Búfalo Studio

## Config Extension
```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        'buffalo-light': '#EDEDED',
        'buffalo-dark': '#171717',
        'buffalo-muted': '#444444',
        'buffalo-red': '#DA0037',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    }
  }
}
```

## Utility Classes
- Headings: `font-sans font-black tracking-tighter text-6xl md:text-8xl`
- Microcopy: `font-mono text-xs uppercase tracking-widest text-[#444444]`
- Red Button CTA: `bg-[#DA0037] text-[#EDEDED] hover:bg-[#b5002d] transition-all px-8 py-4 font-bold tracking-tight shadow-lg`
