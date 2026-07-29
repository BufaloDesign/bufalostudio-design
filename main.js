// Búfalo Studio - State of AI Design Interactive Engine
document.addEventListener('DOMContentLoaded', () => {
  initLiveClock();
  initScrollProgress();
  initThemeScrollObserver();
  initDataScienceCanvas();
  initGalleryLightbox();
  initProjectModal();
  initNumberCounters();
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
  const chapterEstetica = document.getElementById('capitulo-02');
  if (!chapterEstetica) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
        document.body.classList.add('theme-dark');
      } else {
        // If not in Chapter 2, revert to default editorial light mode
        document.body.classList.remove('theme-dark');
      }
    });
  }, {
    threshold: [0.1, 0.25, 0.5, 0.75]
  });

  observer.observe(chapterEstetica);
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
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.classList.add('hidden');
      if (successMsg) successMsg.classList.remove('hidden');
      setTimeout(() => {
        closeModal();
        form.reset();
        form.classList.remove('hidden');
        if (successMsg) successMsg.classList.add('hidden');
      }, 3000);
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
