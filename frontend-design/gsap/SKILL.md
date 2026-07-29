---
name: gsap
description: GSAP and ScrollTrigger implementation guide for Búfalo Studio
---

# GSAP Animation Skill - Búfalo Studio

## Setup & Implementation
- Load GSAP core and ScrollTrigger via CDN / NPM.
- Register ScrollTrigger plugin: `gsap.registerPlugin(ScrollTrigger);`.

## ScrollTrigger Code Examples
```javascript
// Section Theme Scroll Trigger
ScrollTrigger.create({
  trigger: "#capitulo-02",
  start: "top 50%",
  end: "bottom 50%",
  onEnter: () => document.body.classList.add("theme-dark"),
  onLeave: () => document.body.classList.remove("theme-dark"),
  onEnterBack: () => document.body.classList.add("theme-dark"),
  onLeaveBack: () => document.body.classList.remove("theme-dark")
});
```
