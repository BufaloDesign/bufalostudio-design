---
name: performance-audit
description: Performance optimization and Lighthouse audit benchmarks for Búfalo Studio
---

# Performance Audit Skill - Búfalo Studio

## Targets & Metrics
- **Lighthouse Performance Score**: > 95
- **Largest Contentful Paint (LCP)**: < 1.2s
- **First Input Delay (FID) / INP**: < 50ms
- **Cumulative Layout Shift (CLS)**: < 0.02

## Optimization Checklist
1. Preconnect to Google Fonts (`fonts.googleapis.com`).
2. Serve optimized product photography in WebP/AVIF format with width/height explicit attributes.
3. Use passive event listeners for GSAP scroll triggers.
