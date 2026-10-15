/**
 * PulseForge — Core UI Interactions & Biometric Engine
 * Magnetic cursor, scroll progress, ECG canvas, count-up, FAQ accordion,
 * testimonials carousel, pricing toggle, contact handler, auth state.
 */

(function () {
  'use strict';

  // -------------------------------------------------------------------------
  // 1. Toast Notification Helper
  // -------------------------------------------------------------------------
  function showToast(message, type = 'info') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `pf-toast ${type}`;

    const iconSvg = type === 'success'
      ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c6ff3d" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`
      : type === 'error'
      ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff6a4d" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`
      : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2ef2c2" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;

    toast.innerHTML = `
      ${iconSvg}
      <div style="flex: 1; font-size: 0.92rem; font-weight: 500;">${message}</div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px) scale(0.9)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }
  window.showToast = showToast;

  // -------------------------------------------------------------------------
  // 2. Custom Magnetic Cursor
  // -------------------------------------------------------------------------
  function initMagneticCursor() {
    const cursor = document.querySelector('.custom-cursor');
    const follower = document.querySelector('.custom-cursor-follower');

    if (!cursor || !follower || window.matchMedia('(pointer: coarse)').matches) return;

    let mouseX = -100, mouseY = -100;
    let followerX = -100, followerY = -100;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    });

    function renderFollower() {
      followerX += (mouseX - followerX) * 0.16;
      followerY += (mouseY - followerY) * 0.16;
      follower.style.left = `${followerX}px`;
      follower.style.top = `${followerY}px`;
      requestAnimationFrame(renderFollower);
    }
    requestAnimationFrame(renderFollower);

    // Interactive element hover
    const interactives = document.querySelectorAll('a, button, input, .tilt-card, .faq-question, .toggle-track');
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('active');
        follower.classList.add('active');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
        follower.classList.remove('active');
      });
    });
  }

  // -------------------------------------------------------------------------
  // 3. Scroll Progress Bar & Sticky Navbar Blur & Scroll Up Button
  // -------------------------------------------------------------------------
  function initScrollEffects() {
    const progressBar = document.querySelector('.scroll-progress-bar');
    const navbar = document.querySelector('.site-navbar');
    let scrollTopBtn = document.getElementById('scrollTopBtn');

    // Dynamically inject scroll up button if not already in markup
    if (!scrollTopBtn) {
      scrollTopBtn = document.createElement('button');
      scrollTopBtn.id = 'scrollTopBtn';
      scrollTopBtn.className = 'scroll-top-btn';
      scrollTopBtn.setAttribute('type', 'button');
      scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
      scrollTopBtn.setAttribute('title', 'Scroll to top');
      scrollTopBtn.innerHTML = `
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      `;
      document.body.appendChild(scrollTopBtn);
    }

    if (scrollTopBtn) {
      scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }

    window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;

      if (progressBar) {
        progressBar.style.width = `${scrolled}%`;
      }

      if (navbar) {
        if (winScroll > 30) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }

      if (scrollTopBtn) {
        if (winScroll > 280) {
          scrollTopBtn.classList.add('visible');
        } else {
          scrollTopBtn.classList.remove('visible');
        }
      }
    }, { passive: true });
  }

  // -------------------------------------------------------------------------
  // 4. Mobile Menu Drawer
  // -------------------------------------------------------------------------
  function initMobileMenu() {
    const toggle = document.querySelector('.mobile-nav-toggle');
    const drawer = document.querySelector('.mobile-menu-drawer');
    if (!toggle || !drawer) return;

    toggle.addEventListener('click', () => {
      const isOpen = drawer.classList.contains('open');
      if (isOpen) {
        drawer.classList.remove('open');
        toggle.classList.remove('open');
        document.body.style.overflow = '';
      } else {
        drawer.classList.add('open');
        toggle.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });

    drawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
        toggle.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // -------------------------------------------------------------------------
  // 5. Hero Live Animated ECG Canvas Strip
  // -------------------------------------------------------------------------
  function initEcgCanvas() {
    const canvas = document.getElementById('heroEcgCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;

    function resize() {
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }
    resize();
    window.addEventListener('resize', resize);

    // ECG wave points model
    const points = [];
    const maxPoints = 220;
    let step = 0;

    function getEcgY(t) {
      const mid = height / 2;
      const cycle = t % 75;

      if (cycle < 10) return mid; // Baseline
      if (cycle >= 10 && cycle < 15) return mid - 4; // P wave
      if (cycle >= 15 && cycle < 20) return mid;
      if (cycle >= 20 && cycle < 23) return mid + 6; // Q dip
      if (cycle >= 23 && cycle < 28) return mid - 22; // R peak
      if (cycle >= 28 && cycle < 32) return mid + 12; // S valley
      if (cycle >= 32 && cycle < 38) return mid;
      if (cycle >= 38 && cycle < 48) return mid - 7; // T wave
      return mid; // Isoelectric
    }

    function animateEcg() {
      step++;
      const currentY = getEcgY(step);
      points.push(currentY);
      if (points.length > maxPoints) points.shift();

      ctx.clearRect(0, 0, width, height);

      // Draw faint baseline
      ctx.strokeStyle = 'rgba(46, 242, 194, 0.12)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, height / 2);
      ctx.lineTo(width, height / 2);
      ctx.stroke();

      // Draw ECG line with gradient
      const grad = ctx.createLinearGradient(0, 0, width, 0);
      grad.addColorStop(0, 'rgba(46, 242, 194, 0.2)');
      grad.addColorStop(0.7, '#2ef2c2');
      grad.addColorStop(1, '#c6ff3d');

      ctx.strokeStyle = grad;
      ctx.lineWidth = 2.5;
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      ctx.shadowColor = '#c6ff3d';
      ctx.shadowBlur = 8;

      ctx.beginPath();
      const stepX = width / maxPoints;

      for (let i = 0; i < points.length; i++) {
        const x = i * stepX;
        const y = points[i];
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Lead tip pulse dot
      if (points.length > 0) {
        const lastX = (points.length - 1) * stepX;
        const lastY = points[points.length - 1];
        ctx.fillStyle = '#c6ff3d';
        ctx.beginPath();
        ctx.arc(lastX, lastY, 4, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.shadowBlur = 0;
      requestAnimationFrame(animateEcg);
    }

    requestAnimationFrame(animateEcg);
  }

  // -------------------------------------------------------------------------
  // 6. Number Count-Up Animations
  // -------------------------------------------------------------------------
  function initCountUps() {
    const counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseFloat(el.getAttribute('data-counter'));
          const prefix = el.getAttribute('data-prefix') || '';
          const suffix = el.getAttribute('data-suffix') || '';
          const decimals = target % 1 !== 0 ? 1 : 0;
          const duration = 1800;
          const startTime = performance.now();

          function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out expo
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const currentVal = easeProgress * target;

            el.textContent = `${prefix}${currentVal.toLocaleString('en-US', {
              minimumFractionDigits: decimals,
              maximumFractionDigits: decimals
            })}${suffix}`;

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            }
          }

          requestAnimationFrame(updateCounter);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.3 });

    counters.forEach((c) => observer.observe(c));
  }

  // -------------------------------------------------------------------------
  // 7. FAQ Accordion
  // -------------------------------------------------------------------------
  function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach((item) => {
      const questionBtn = item.querySelector('.faq-question');
      if (!questionBtn) return;

      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        faqItems.forEach((other) => other.classList.remove('open'));
        if (!isOpen) {
          item.classList.add('open');
        }
      });
    });
  }

  // -------------------------------------------------------------------------
  // 8. Testimonials Carousel
  // -------------------------------------------------------------------------
  function initTestimonialsCarousel() {
    const cards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.slider-btn-prev');
    const nextBtn = document.querySelector('.slider-btn-next');
    if (!cards.length) return;

    let currentIndex = 0;

    function showSlide(index) {
      cards.forEach((c, idx) => {
        c.classList.toggle('active', idx === index);
      });
      currentIndex = index;
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        let prev = currentIndex - 1;
        if (prev < 0) prev = cards.length - 1;
        showSlide(prev);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        let next = (currentIndex + 1) % cards.length;
        showSlide(next);
      });
    }

    // Auto rotate every 6s
    let autoInterval = setInterval(() => {
      let next = (currentIndex + 1) % cards.length;
      showSlide(next);
    }, 6000);

    const wrapper = document.querySelector('.testimonials-wrapper');
    if (wrapper) {
      wrapper.addEventListener('mouseenter', () => clearInterval(autoInterval));
      wrapper.addEventListener('mouseleave', () => {
        autoInterval = setInterval(() => {
          let next = (currentIndex + 1) % cards.length;
          showSlide(next);
        }, 6000);
      });
    }
  }

  // -------------------------------------------------------------------------
  // 9. Monthly / Yearly Pricing Switch
  // -------------------------------------------------------------------------
  function initPricingToggle() {
    const toggle = document.querySelector('.toggle-track');
    const monthlyLabel = document.querySelector('.switch-monthly');
    const yearlyLabel = document.querySelector('.switch-yearly');
    const priceVals = document.querySelectorAll('.price-val');
    if (!toggle || !priceVals.length) return;

    let isYearly = false;

    function updatePrices() {
      toggle.classList.toggle('yearly', isYearly);
      if (monthlyLabel) monthlyLabel.classList.toggle('active', !isYearly);
      if (yearlyLabel) yearlyLabel.classList.toggle('active', isYearly);

      priceVals.forEach((p) => {
        const monthly = p.getAttribute('data-monthly');
        const yearly = p.getAttribute('data-yearly');
        p.textContent = isYearly ? `$${yearly}` : `$${monthly}`;
      });
    }

    toggle.addEventListener('click', () => {
      isYearly = !isYearly;
      updatePrices();
    });

    if (monthlyLabel) {
      monthlyLabel.addEventListener('click', () => {
        isYearly = false;
        updatePrices();
      });
    }

    if (yearlyLabel) {
      yearlyLabel.addEventListener('click', () => {
        isYearly = true;
        updatePrices();
      });
    }
  }

  // -------------------------------------------------------------------------
  // 10. Contact Form Client-Side Submission
  // -------------------------------------------------------------------------
  function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Sending telemetry...</span>`;

      const formData = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        role_type: form.role_type ? form.role_type.value : 'Athlete',
        message: form.message.value.trim()
      };

      setTimeout(() => {
        if (window.PulseForgeStore) {
          window.PulseForgeStore.addContactInquiry(formData);
        }
        showToast('Message transmitted directly to PulseForge Team!', 'success');
        form.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }, 400);
    });
  }

  // -------------------------------------------------------------------------
  // 11. Navbar Auth State Sync
  // -------------------------------------------------------------------------
  function checkAuthState() {
    const navCta = document.getElementById('navAuthCta');
    const navLoginBtn = document.getElementById('navLoginBtn');

    if (window.PulseForgeStore) {
      const user = window.PulseForgeStore.getCurrentUser();
      if (user && user.name) {
        if (navCta) {
          navCta.href = 'dashboard.html';
          navCta.innerHTML = '<span>Dashboard</span>';
        }
        if (navLoginBtn) {
          navLoginBtn.title = `Athlete Portal • Logged in as ${user.name} (Click to switch user or sign out)`;
        }
      } else {
        if (navCta) {
          navCta.href = 'dashboard.html';
          navCta.innerHTML = '<span>Dashboard</span>';
        }
      }
    }
  }

  // -------------------------------------------------------------------------
  // DOM Ready
  // -------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    initMagneticCursor();
    initScrollEffects();
    initMobileMenu();
    initEcgCanvas();
    initCountUps();
    initFaqAccordion();
    initTestimonialsCarousel();
    initPricingToggle();
    initContactForm();
    checkAuthState();
  });
})();
