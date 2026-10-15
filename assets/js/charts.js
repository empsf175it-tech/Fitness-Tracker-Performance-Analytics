/**
 * PulseForge — Native Vanilla JavaScript Canvas Chart Engine (ES6+)
 * 
 * Zero external libraries, zero CDN dependencies.
 * Ultra-lightweight, retina-crisp rendering for:
 * 1. Multi-line charts with bezier curves, gradients, and dark-theme gridlines.
 * 2. Doughnut / Ring charts with customized segment arcs and central cutouts.
 * 
 * Drop-in interface compatible with standard Chart({ type, data, options }) syntax.
 * Production Quality: Zero console logs, 100% Vanilla JS.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.Chart = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  class VanillaChart {
    constructor(canvas, config) {
      if (!canvas) return;
      this.canvas = typeof canvas === 'string' ? document.getElementById(canvas) : canvas;
      if (!this.canvas || !this.canvas.getContext) return;
      this.ctx = this.canvas.getContext('2d');
      this.config = config || {};
      this.type = this.config.type || 'line';
      this.data = this.config.data || {};
      this.options = this.config.options || {};
      this.animationProgress = 1;

      this.handleResize = this.resize.bind(this);
      window.addEventListener('resize', this.handleResize);

      this.render();
    }

    destroy() {
      window.removeEventListener('resize', this.handleResize);
      if (this.ctx && this.canvas) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }
    }

    resize() {
      this.render();
    }

    setupCanvas() {
      const rect = this.canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const width = rect.width || this.canvas.parentElement.clientWidth || 400;
      const height = rect.height || 260;

      this.canvas.width = width * dpr;
      this.canvas.height = height * dpr;
      this.ctx.scale(dpr, dpr);

      return { width, height };
    }

    render() {
      if (!this.ctx) return;
      const { width, height } = this.setupCanvas();
      this.ctx.clearRect(0, 0, width, height);

      if (this.type === 'doughnut') {
        this.renderDoughnut(width, height);
      } else {
        this.renderLine(width, height);
      }
    }

    // -----------------------------------------------------------------------
    // Line Chart Renderer
    // -----------------------------------------------------------------------
    renderLine(width, height) {
      const ctx = this.ctx;
      const padding = { top: 28, right: 24, bottom: 36, left: 40 };
      const chartWidth = width - padding.left - padding.right;
      const chartHeight = height - padding.top - padding.bottom;

      const labels = this.data.labels || [];
      const datasets = this.data.datasets || [];
      if (!datasets.length || !labels.length) return;

      // Calculate min / max values
      let minVal = Infinity;
      let maxVal = -Infinity;

      datasets.forEach((ds) => {
        (ds.data || []).forEach((val) => {
          if (val < minVal) minVal = val;
          if (val > maxVal) maxVal = val;
        });
      });

      if (minVal === Infinity) minVal = 0;
      if (maxVal === -Infinity) maxVal = 100;
      if (minVal === maxVal) { minVal = 0; maxVal = maxVal * 1.2 || 10; }
      minVal = Math.max(0, Math.floor(minVal * 0.85));
      maxVal = Math.ceil(maxVal * 1.15);

      const valRange = maxVal - minVal || 1;

      // Draw horizontal grid lines & Y labels
      const gridSteps = 4;
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(46, 242, 194, 0.08)';
      ctx.fillStyle = '#9bb1b6';
      ctx.font = '11px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';

      for (let i = 0; i <= gridSteps; i++) {
        const yVal = minVal + (valRange / gridSteps) * (gridSteps - i);
        const yPos = padding.top + (chartHeight / gridSteps) * i;

        ctx.beginPath();
        ctx.moveTo(padding.left, yPos);
        ctx.lineTo(width - padding.right, yPos);
        ctx.stroke();

        ctx.fillText(Math.round(yVal), padding.left - 8, yPos);
      }

      // Draw X axis labels
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      const stepX = labels.length > 1 ? chartWidth / (labels.length - 1) : chartWidth / 2;

      labels.forEach((lbl, idx) => {
        const xPos = padding.left + idx * stepX;
        ctx.fillText(lbl, xPos, height - padding.bottom + 10);
      });

      // Draw Datasets
      datasets.forEach((ds) => {
        const data = ds.data || [];
        if (!data.length) return;

        const strokeColor = ds.borderColor || '#c6ff3d';
        const points = data.map((val, idx) => {
          const x = padding.left + idx * stepX;
          const normY = (val - minVal) / valRange;
          const y = padding.top + chartHeight - normY * chartHeight;
          return { x, y };
        });

        // Fill area under curve if requested
        if (ds.fill && points.length > 1) {
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(points[0].x, points[0].y);

          for (let i = 0; i < points.length - 1; i++) {
            const p0 = points[i];
            const p1 = points[i + 1];
            const cpx = (p0.x + p1.x) / 2;
            ctx.quadraticCurveTo(p0.x, p0.y, cpx, (p0.y + p1.y) / 2);
          }
          const last = points[points.length - 1];
          ctx.lineTo(last.x, last.y);
          ctx.lineTo(last.x, padding.top + chartHeight);
          ctx.lineTo(points[0].x, padding.top + chartHeight);
          ctx.closePath();

          const grad = ctx.createLinearGradient(0, padding.top, 0, padding.top + chartHeight);
          grad.addColorStop(0, strokeColor + '33');
          grad.addColorStop(1, strokeColor + '00');
          ctx.fillStyle = grad;
          ctx.fill();
          ctx.restore();
        }

        // Draw Line with bezier curve
        ctx.save();
        ctx.beginPath();
        if (ds.borderDash) {
          ctx.setLineDash(ds.borderDash);
        }
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = ds.borderWidth || 2.5;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';

        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 0; i < points.length - 1; i++) {
          const p0 = points[i];
          const p1 = points[i + 1];
          const mx = (p0.x + p1.x) / 2;
          const my = (p0.y + p1.y) / 2;
          ctx.quadraticCurveTo(p0.x, p0.y, mx, my);
        }
        const lastPt = points[points.length - 1];
        ctx.lineTo(lastPt.x, lastPt.y);
        ctx.stroke();
        ctx.restore();

        // Draw Data Points
        const ptColor = ds.pointBackgroundColor || strokeColor;
        const ptRadius = ds.pointRadius || 3.5;
        ctx.save();
        ctx.fillStyle = ptColor;
        ctx.strokeStyle = '#071a1f';
        ctx.lineWidth = 2;

        points.forEach((pt) => {
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, ptRadius, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        });
        ctx.restore();
      });

      // Draw Top Legend
      this.renderLegend(width, datasets);
    }

    renderLegend(width, datasets) {
      const ctx = this.ctx;
      let totalWidth = 0;
      const items = datasets.map((ds) => {
        const text = ds.label || '';
        ctx.font = '12px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
        const txtWidth = ctx.measureText(text).width;
        const itemWidth = 14 + 6 + txtWidth + 18;
        totalWidth += itemWidth;
        return { text, color: ds.borderColor || '#c6ff3d', width: itemWidth };
      });

      let startX = (width - totalWidth) / 2;
      const yPos = 12;

      ctx.textBaseline = 'middle';
      ctx.textAlign = 'left';

      items.forEach((item) => {
        ctx.fillStyle = item.color;
        ctx.fillRect(startX, yPos - 4, 12, 8);

        ctx.fillStyle = '#f4efe6';
        ctx.fillText(item.text, startX + 16, yPos);

        startX += item.width;
      });
    }

    // -----------------------------------------------------------------------
    // Doughnut / Ring Chart Renderer
    // -----------------------------------------------------------------------
    renderDoughnut(width, height) {
      const ctx = this.ctx;
      const ds = (this.data.datasets || [])[0];
      if (!ds || !ds.data || !ds.data.length) return;

      const labels = this.data.labels || [];
      const data = ds.data;
      const colors = ds.backgroundColor || ['#2ef2c2', '#c6ff3d', '#ff6a4d'];
      const total = data.reduce((sum, v) => sum + (Number(v) || 0), 0) || 1;

      const centerX = width / 2;
      const centerY = (height - 30) / 2;
      const radius = Math.min(centerX, centerY) - 10;
      const cutout = radius * 0.72;

      let startAngle = -Math.PI / 2;

      data.forEach((val, i) => {
        const sliceAngle = (val / total) * (Math.PI * 2);
        const endAngle = startAngle + sliceAngle;
        const color = colors[i % colors.length];

        ctx.save();
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, endAngle, false);
        ctx.arc(centerX, centerY, cutout, endAngle, startAngle, true);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();

        ctx.strokeStyle = ds.borderColor || '#071a1f';
        ctx.lineWidth = ds.borderWidth || 3;
        ctx.stroke();
        ctx.restore();

        startAngle = endAngle;
      });

      // Bottom Legend
      ctx.font = '11px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'left';

      let legTotalWidth = 0;
      const legItems = labels.map((lbl, idx) => {
        const text = lbl.replace(' (kcal)', '');
        const tw = ctx.measureText(text).width;
        const w = 12 + 6 + tw + 16;
        legTotalWidth += w;
        return { text, color: colors[idx % colors.length], width: w };
      });

      let lx = (width - legTotalWidth) / 2;
      const ly = height - 14;

      legItems.forEach((item) => {
        ctx.fillStyle = item.color;
        ctx.beginPath();
        ctx.arc(lx + 5, ly, 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#9bb1b6';
        ctx.fillText(item.text, lx + 14, ly);

        lx += item.width;
      });
    }
  }

  return VanillaChart;
});
