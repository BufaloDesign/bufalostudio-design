# Contexto del Proyecto: Búfalo Studio Design System

## 📌 Visión General
Plataforma web de Búfalo Studio construida bajo el concepto **"State of AI Design"**, fusionando ingeniería de software (Desarrollo Web / Astro), dirección de arte (Fotografía de Producto HD) y ciencia de datos (Visualización de datos y analítica UX).

---

## 🔗 Repositorio GitHub
- **URL**: [https://github.com/BufaloDesign/bufalostudio-design](https://github.com/BufaloDesign/bufalostudio-design)
- **Cuenta**: `BufaloDesign`
- **Rama activa**: `main`

---

## 🎨 Sistema de Diseño Editorial ("Dark Editorial" Búfalo)
1. **Paleta de Colores**:
   - **Fondo Principal (Modo Claro)**: `#EDEDED` (Gris humo).
   - **Fondo Secundario / Modo Oscuro / Fotografía / Cierre**: `#171717` (Casi negro).
   - **Texto Principal**: `#171717`
   - **Metadatos & Micro-copia**: `#444444` (Gris plomo).
   - **Acento (Rojo Búfalo)**: `#DA0037` (Uso disciplinado para CTAs principales, indicadores de pulso y subrayado al hover).

2. **Tipografía & Copywriting**:
   - **Titulares (Display)**: Inter / Helvetica Now (`Bold 700` y `Black 900`, `tracking-tighter`, `text-6xl` a `text-9xl`).
   - **Cuerpo (Body)**: Inter Regular `400` con `leading-relaxed` (150%).
   - **Micro-copia (Etiquetas técnicas)**: JetBrains Mono en `#444444`, mayúsculas y `tracking-widest`.
   - **Regla de Tono / Copywriting**: NO usar las palabras "PyMEs" ni "emprendedores" (evitar percepción de bajo presupuesto). Usar en su lugar **"Empresa"** y **"Marca"**.

---

## 🏛️ Arquitectura del Sitio (Single Page Scroll-Telling)
- **Hero Section**:
  - Micro-copia: `[ ESTUDIO DE DISEÑO & TECNOLOGÍA ]`
  - Titular H1: `Fuerza visual.<br>Precisión de datos.`
  - Subtítulo H2: `En Búfalo Studio no hacemos plantillas...`
  - Botón: `Iniciar Proyecto` (#DA0037)
- **Capítulo 01: INGENIERÍA (Desarrollo Web)**:
  - Titular H2: `Arquitectura web de alto rendimiento.`
  - Grid de tecnologías (Astro, HTML/Tailwind, WordPress Headless, SEO técnico).
- **Capítulo 02: ESTÉTICA (Fotografía de Producto)**:
  - Transición fluida a fondo `#171717` (Dark Mode).
  - Titular H2: `Dirección de arte que convierte.`
  - Galería inmersiva de 3 fotografías generadas en HD con visor Lightbox:
    - [Reloj Chrono Noir](assets/images/buffalo_watch.jpg)
    - [Perfume Nocturne](assets/images/buffalo_perfume.jpg)
    - [Auriculares Audiophile Pro](assets/images/buffalo_headphone.jpg)
- **Capítulo 03: INTELIGENCIA (Data Science)**:
  - Retorno fluido a fondo `#EDEDED`.
  - Titular H2: `El cerebro detrás de la interfaz.`
  - Canvas interactivo de telemetría en tiempo real con nodos de pulso carmesí `#DA0037`.
- **Cierre / Contacto**:
  - Titular H2: `Construyamos con impacto.`
  - Formulario modal dinámico para breves de proyecto.

---

## 📂 Habilidades / Skills Creadas (`bufalostudio-design/frontend-design`)
1. `ui-review/SKILL.md`
2. `responsive-design/SKILL.md`
3. `html-best-practices/SKILL.md`
4. `css-architecture/SKILL.md`
5. `accessibility/SKILL.md`
6. `performance-audit/SKILL.md`
7. `animation-design/SKILL.md`
8. `gsap/SKILL.md`
9. `tailwind-patterns/SKILL.md`

---

## ⚡ Comandos Útiles para Continuar
- **Ejecutar servidor local**: `npm run dev` o `python3 -m http.server 8085` (desde `/data/data/com.termux/files/home/bufalostudio-design`)
- **Sincronizar cambios a GitHub**:
  ```bash
  git add .
  git commit -m "update: descripción de cambios"
  git push origin main
  ```
