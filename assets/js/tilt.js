/**
 * PulseForge 3D Tilt Engine
 * Perspective tilt, dynamic glare layer, translateZ depth preservation,
 * and mobile gyroscope / tap fallback. Center-aligned card architecture.
 */

(function () {
  'use strict';

  function initTilt() {
    const cards = document.querySelectorAll('.tilt-card, [data-tilt]');

    cards.forEach((card) => {
      // Ensure glare element exists
      let glare = card.querySelector('.tilt-glare');
      if (!glare) {
        glare = document.createElement('div');
        glare.className = 'tilt-glare';
        card.appendChild(glare);
      }

      // Max tilt angle
      const maxTilt = parseFloat(card.getAttribute('data-tilt-max')) || 14;
      const perspective = 1000;

      card.style.transformStyle = 'preserve-3d';
      if (card.parentElement) {
        card.parentElement.style.perspective = `${perspective}px`;
      }

      function handleMouseMove(e) {
        const rect = card.getBoundingClientRect();
        const cardX = e.clientX - rect.left;
        const cardY = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((cardY - centerY) / centerY) * -maxTilt;
        const rotateY = ((cardX - centerX) / centerX) * maxTilt;

        card.style.transform = `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;

        // Update glare position
        const glareX = (cardX / rect.width) * 100;
        const glareY = (cardY / rect.height) * 100;
        glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.18), transparent 65%)`;
        glare.style.opacity = '1';
      }

      function handleMouseLeave() {
        card.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease';
        glare.style.opacity = '0';

        setTimeout(() => {
          card.style.transition = '';
        }, 500);
      }

      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
      card.addEventListener('mouseenter', () => {
        card.style.transition = 'transform 0.1s ease-out';
      });

      // Touch / Tap fallback for mobile devices
      card.addEventListener('touchstart', () => {
        card.style.transform = `perspective(${perspective}px) rotateX(4deg) rotateY(-4deg) scale3d(0.98, 0.98, 0.98)`;
      }, { passive: true });

      card.addEventListener('touchend', () => {
        setTimeout(() => {
          card.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        }, 300);
      }, { passive: true });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTilt);
  } else {
    initTilt();
  }

  window.PulseForgeTilt = { init: initTilt };
})();
