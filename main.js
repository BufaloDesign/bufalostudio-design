// Búfalo Studio - State of AI Design Interactive Engine
document.addEventListener('DOMContentLoaded', () => {
  initLiveClock();
  initScrollProgress();
  initThemeScrollObserver();
  initDataScienceCanvas();
  initGalleryLightbox();
  initProjectModal();
  initNumberCounters();
  initParallaxSkills();
});

// Live Header Clock
function initLiveClock() {
  const clockEl = document.getElementById('live-clock');
  if (!clockEl) return;
  
  function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    const secs = String(now.getSeconds()).padStart(2, '0');
    clockEl.textContent = `${hours}:${mins}:${secs} UTC`;
  }
  updateTime();
  setInterval(updateTime, 1000);
}

// Top Scroll Progress Line
function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress-bar');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${scrollPercent}%`;
  });
}

// Chapter Scroll Observer for Dynamic Background Theme Transition
function initThemeScrollObserver() {
  const darkSections = [
    document.getElementById('capitulo-02'),
    document.getElementById('capitulo-04')
  ].filter(Boolean);

  if (!darkSections.length) return;

  const observer = new IntersectionObserver((entries) => {
    const isAnyDarkVisible = darkSections.some(sec => {
      const rect = sec.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.75 && rect.bottom > window.innerHeight * 0.25;
    });
    if (isAnyDarkVisible) {
      document.body.classList.add('theme-dark');
    } else {
      document.body.classList.remove('theme-dark');
    }
  }, {
    threshold: [0.1, 0.25, 0.5, 0.75]
  });

  darkSections.forEach(sec => observer.observe(sec));
  window.addEventListener('scroll', () => {
    const isAnyDarkVisible = darkSections.some(sec => {
      const rect = sec.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.75 && rect.bottom > window.innerHeight * 0.25;
    });
    if (isAnyDarkVisible) {
      document.body.classList.add('theme-dark');
    } else {
      document.body.classList.remove('theme-dark');
    }
  });
}

// Interactive Data Science Canvas Visualization
function initDataScienceCanvas() {
  const canvas = document.getElementById('data-science-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationFrameId;
  let t = 0;

  function resizeCanvas() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = 320;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const width = canvas.width;
    const height = canvas.height;

    // Draw Subtle Grid
    ctx.strokeStyle = 'rgba(68, 68, 68, 0.12)';
    ctx.lineWidth = 1;
    const gridSize = 40;
    for (let x = 0; x < width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Sine Telemetry Wave 1 (Muted Grey)
    ctx.beginPath();
    ctx.strokeStyle = '#444444';
    ctx.lineWidth = 2;
    for (let x = 0; x < width; x += 5) {
      const y = height / 2 + Math.sin(x * 0.01 + t * 0.03) * 45 + Math.cos(x * 0.02) * 20;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Sine Telemetry Wave 2 (Rojo Búfalo #DA0037 - Primary Metric)
    ctx.beginPath();
    ctx.strokeStyle = '#DA0037';
    ctx.lineWidth = 3;
    const points = [];
    for (let x = 0; x < width; x += 4) {
      const y = height / 2 + Math.sin(x * 0.015 - t * 0.04) * 65 + Math.sin(x * 0.005 + t * 0.02) * 35;
      points.push({x, y});
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Pulse Nodes on Red Line
    if (points.length > 0) {
      const activeIdx = Math.floor((Math.sin(t * 0.05) + 1) / 2 * (points.length - 1));
      const pt = points[activeIdx];
      if (pt) {
        ctx.beginPath();
        ctx.fillStyle = '#DA0037';
        ctx.arc(pt.x, pt.y, 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.strokeStyle = 'rgba(218, 0, 55, 0.4)';
        ctx.lineWidth = 2;
        ctx.arc(pt.x, pt.y, 14 + Math.sin(t * 0.1) * 6, 0, Math.PI * 2);
        ctx.stroke();

        // Data Label Tooltip
        ctx.fillStyle = '#171717';
        ctx.font = '11px "JetBrains Mono"';
        const val = ((pt.y / height) * 100).toFixed(1);
        ctx.fillText(`PREDICTIVE VAL: ${val}%`, pt.x + 12, pt.y - 12);
      }
    }

    t += 1;
    animationFrameId = requestAnimationFrame(draw);
  }

  draw();
}

// Lightbox for Product Photography Gallery
function initGalleryLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const modalImg = document.getElementById('lightbox-img');
  const modalTitle = document.getElementById('lightbox-title');
  const modalDesc = document.getElementById('lightbox-desc');
  const closeBtn = document.getElementById('lightbox-close');

  if (!modal || !modalImg) return;

  document.querySelectorAll('.gallery-trigger').forEach(card => {
    card.addEventListener('click', () => {
      const imgSrc = card.getAttribute('data-img');
      const title = card.getAttribute('data-title');
      const desc = card.getAttribute('data-desc');

      modalImg.src = imgSrc;
      modalTitle.textContent = title;
      modalDesc.textContent = desc;
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    });
  });

  const closeModal = () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}

// Project Modal Brief Builder
// Endpoint opcional para seguimiento de Leads en Google Sheets / Google Forms (Script App Webhook)
const GOOGLE_SHEETS_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbz_BUFALO_STUDIO_LEADS_SHEET/exec';

function initProjectModal() {
  const modal = document.getElementById('project-modal');
  const triggers = document.querySelectorAll('.trigger-project-modal');
  const closeBtn = document.getElementById('project-modal-close');
  const form = document.getElementById('project-brief-form');
  const successMsg = document.getElementById('project-form-success');

  if (!modal) return;

  triggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    });
  });

  const closeModal = () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    if (form) {
      form.reset();
      form.classList.remove('hidden');
    }
    if (successMsg) {
      successMsg.classList.add('hidden');
    }
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Extract Form Values
      const nameInput = document.getElementById('brief-name');
      const emailInput = document.getElementById('brief-email');
      const serviceInput = document.getElementById('brief-service');
      const messageInput = document.getElementById('brief-message');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const service = serviceInput ? serviceInput.value : '';
      const message = messageInput ? messageInput.value.trim() : '';

      // 1. Envío asíncrono a Google Sheets / Google Forms para Registro de Leads
      try {
        const formData = new FormData();
        formData.append('Nombre', name);
        formData.append('Email', email);
        formData.append('Servicio', service);
        formData.append('Mensaje', message);
        formData.append('Fecha', new Date().toLocaleString());

        fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
          method: 'POST',
          mode: 'no-cors',
          body: formData
        }).catch(() => {});
      } catch (err) {
        console.log('Tracking log:', err);
      }

      // 2. Formato del Mensaje Personalizado de WhatsApp
      const targetPhone = '56959397967';
      const waText = 
`¡Hola Búfalo Studio! 🦬

Quiero solicitar información y cotización para mi proyecto:

📌 *Nombre / Empresa:* ${name}
📧 *Correo:* ${email}
🛠️ *Servicio Requerido:* ${service}
📝 *Detalles del Proyecto:* ${message || 'Deseo coordinar una asesoría.'}

Quedo atento a su respuesta. ¡Gracias!`;

      const waUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(waText)}`;

      // Actualizar enlace directo en el modal por si el navegador bloquea ventanas emergentes
      const manualLink = document.getElementById('manual-wa-link');
      if (manualLink) {
        manualLink.href = waUrl;
      }

      // 3. Abrir WhatsApp de forma segura en pestaña/aplicación independiente (evita salir del sitio web)
      try {
        const tempLink = document.createElement('a');
        tempLink.href = waUrl;
        tempLink.target = '_blank';
        tempLink.rel = 'noopener noreferrer';
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
      } catch (err) {
        console.log('WA launch info:', err);
      }

      // 4. Mostrar estado de éxito en el sitio web (la pestaña del usuario permanece 100% activa)
      form.classList.add('hidden');
      if (successMsg) successMsg.classList.remove('hidden');
    });
  }
}

// Number Counter Animations
function initNumberCounters() {
  const counters = document.querySelectorAll('.counter-val');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseFloat(entry.target.getAttribute('data-target'));
        const suffix = entry.target.getAttribute('data-suffix') || '';
        let current = 0;
        const duration = 1500;
        const stepTime = 20;
        const steps = duration / stepTime;
        const increment = target / steps;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          entry.target.textContent = (target % 1 === 0 ? Math.floor(current) : current.toFixed(1)) + suffix;
        }, stepTime);

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

// Multi-Layer GSAP & Scroll Parallax for Chapter 04 Skills
function initParallaxSkills() {
  const section = document.getElementById('capitulo-04');
  const stage = document.getElementById('parallax-stage');
  const layerKanban = document.getElementById('parallax-layer-kanban');
  const layerEngineer = document.getElementById('parallax-layer-engineer');
  const layerHud = document.getElementById('parallax-layer-hud');

  if (!section || !stage) return;

  function updateParallax() {
    const rect = stage.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    
    if (rect.top < viewportHeight && rect.bottom > 0) {
      const scrollProgress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
      const scrollOffset = (scrollProgress - 0.5) * 200; // range -100 to +100

      if (layerKanban) {
        layerKanban.style.transform = `translate3d(0, ${scrollOffset * -0.35}px, 0) scale(1.1)`;
      }
      if (layerEngineer) {
        layerEngineer.style.transform = `translate3d(0, ${scrollOffset * 0.12}px, 0)`;
      }
      if (layerHud) {
        layerHud.style.transform = `translate3d(0, ${scrollOffset * -0.65}px, 0)`;
      }
    }
  }

  window.addEventListener('scroll', updateParallax, { passive: true });
  updateParallax();

  // Mouse Move Cursor Tilt Parallax
  stage.addEventListener('mousemove', (e) => {
    const rect = stage.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5;

    if (layerHud) {
      layerHud.style.transform += ` translate3d(${mouseX * 25}px, ${mouseY * 25}px, 0) rotate(${mouseX * 2}deg)`;
    }
    if (layerKanban) {
      layerKanban.style.transform += ` translate3d(${mouseX * -15}px, ${mouseY * -15}px, 0)`;
    }
  });
}

