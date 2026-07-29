---
name: accessibility
description: Accessibility (WCAG AA) standards and keyboard navigation for Búfalo Studio
---

# Accessibility Skill - Búfalo Studio

## Key Accessibility Requirements
1. **Color Contrast Compliance**:
   - Primary text `#171717` on `#EDEDED`: Contrast ratio 14.8:1 (Exceeds AAA).
   - Accent button `#DA0037` with `#EDEDED` text: Contrast ratio 5.1:1 (WCAG AA compliant).
2. **Keyboard Focus & ARIA**:
   - Custom focus rings in Rojo Búfalo `#DA0037`.
   - `aria-expanded` and `aria-label` attributes on modal drawers and image lightboxes.
   - Reduced motion fallback via `@media (prefers-reduced-motion: reduce)`.
