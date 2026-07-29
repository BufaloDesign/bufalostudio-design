---
name: responsive-design
description: Fluid responsive layout and viewport adaptation guidelines for Búfalo Studio
---

# Responsive Design Skill - Búfalo Studio

## Layout Guidelines
1. **Mobile-First & Touch-Optimized**:
   - Minimum target tap size: 48px.
   - Dynamic font sizing with fluid clamps: `clamp(2.5rem, 8vw, 6rem)` for display headings.
2. **Breakpoints**:
   - `sm`: 640px (Mobile landscape & small tablets)
   - `md`: 768px (Tablets)
   - `lg`: 1024px (Laptops & desktops)
   - `xl`: 1280px+ (Large editorial display screens)
3. **Scroll-Telling Layout**:
   - Full viewport height (`min-h-screen`) chapters with dynamic padding.
   - Sticky chapter indicators for desktop viewers.
