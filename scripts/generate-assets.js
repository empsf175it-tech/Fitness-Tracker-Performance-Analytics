const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'public', 'images');

const assets = [
  // 1. HERO RUNNER
  {
    file: 'hero/hero-runner.jpg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600" fill="none">
      <defs>
        <radialGradient id="h-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#2ef2c2" stop-opacity="0.35"/>
          <stop offset="60%" stop-color="#0b2a30" stop-opacity="0.2"/>
          <stop offset="100%" stop-color="#071a1f" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="h-lime-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#c6ff3d"/>
          <stop offset="100%" stop-color="#2ef2c2"/>
        </linearGradient>
        <linearGradient id="h-ember-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ff6a4d"/>
          <stop offset="100%" stop-color="#c6ff3d"/>
        </linearGradient>
      </defs>
      <rect width="800" height="600" rx="24" fill="#071a1f"/>
      <circle cx="400" cy="300" r="320" fill="url(#h-glow)"/>
      
      <!-- Telemetry Grid Lines -->
      <g opacity="0.15" stroke="#2ef2c2" stroke-width="1">
        <line x1="100" y1="100" x2="700" y2="100"/>
        <line x1="100" y1="200" x2="700" y2="200"/>
        <line x1="100" y1="300" x2="700" y2="300"/>
        <line x1="100" y1="400" x2="700" y2="400"/>
        <line x1="100" y1="500" x2="700" y2="500"/>
        <line x1="200" y1="80" x2="200" y2="520"/>
        <line x1="400" y1="80" x2="400" y2="520"/>
        <line x1="600" y1="80" x2="600" y2="520"/>
      </g>
      
      <!-- Dynamic Biometric Pulse Wave -->
      <path d="M80 340 L220 340 L260 270 L290 410 L330 180 L370 450 L410 240 L450 340 L520 340 L550 290 L580 370 L610 340 L720 340" 
            stroke="url(#h-lime-grad)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      
      <!-- Runner Silhouette Motion Overlay -->
      <g transform="translate(280, 110)">
        <!-- Head & Visor -->
        <circle cx="160" cy="90" r="28" fill="#0b2a30" stroke="#c6ff3d" stroke-width="3"/>
        <path d="M165 85 L195 90 L175 100 Z" fill="#2ef2c2"/>
        <!-- Torso & Kinetic Spine -->
        <path d="M150 120 L185 210 L140 290" stroke="url(#h-lime-grad)" stroke-width="10" stroke-linecap="round"/>
        <!-- Arm Forward -->
        <path d="M160 145 L225 180 L255 140" stroke="#2ef2c2" stroke-width="8" stroke-linecap="round"/>
        <!-- Arm Back -->
        <path d="M160 145 L105 185 L85 240" stroke="#2ef2c2" stroke-width="8" stroke-linecap="round" opacity="0.6"/>
        <!-- Lead Leg Driving Forward -->
        <path d="M185 210 L260 250 L275 350 L310 365" stroke="url(#h-ember-grad)" stroke-width="9" stroke-linecap="round"/>
        <!-- Trailing Leg Extended -->
        <path d="M140 290 L80 360 L20 420" stroke="url(#h-lime-grad)" stroke-width="9" stroke-linecap="round" opacity="0.8"/>
        <!-- Foot Ground Impulse Vector -->
        <circle cx="20" cy="420" r="14" fill="#ff6a4d" opacity="0.5"/>
        <line x1="20" y1="420" x2="310" y2="365" stroke="#c6ff3d" stroke-width="2" stroke-dasharray="4 6" opacity="0.4"/>
      </g>
      
      <!-- Floating Glass HUD Badges -->
      <g transform="translate(100, 120)">
        <rect width="180" height="74" rx="14" fill="#0b2a30" fill-opacity="0.85" stroke="#2ef2c2" stroke-width="1.5"/>
        <text x="20" y="30" font-family="'Space Grotesk', sans-serif" font-size="12" font-weight="700" fill="#2ef2c2">HRV READINESS</text>
        <text x="20" y="58" font-family="'Space Grotesk', sans-serif" font-size="26" font-weight="800" fill="#f4efe6">88 <tspan font-size="14" fill="#c6ff3d">ms • PEAK</tspan></text>
      </g>
      
      <g transform="translate(520, 390)">
        <rect width="190" height="74" rx="14" fill="#0b2a30" fill-opacity="0.85" stroke="#c6ff3d" stroke-width="1.5"/>
        <text x="20" y="30" font-family="'Space Grotesk', sans-serif" font-size="12" font-weight="700" fill="#c6ff3d">VO2 MAX CAPACITY</text>
        <text x="20" y="58" font-family="'Space Grotesk', sans-serif" font-size="26" font-weight="800" fill="#f4efe6">64.2 <tspan font-size="14" fill="#2ef2c2">ml/kg/min</tspan></text>
      </g>
      
      <g transform="translate(540, 140)">
        <rect width="160" height="64" rx="14" fill="#0b2a30" fill-opacity="0.85" stroke="#ff6a4d" stroke-width="1.5"/>
        <text x="18" y="26" font-family="'Space Grotesk', sans-serif" font-size="11" font-weight="700" fill="#ff6a4d">METABOLIC STRAIN</text>
        <text x="18" y="50" font-family="'Space Grotesk', sans-serif" font-size="22" font-weight="800" fill="#f4efe6">16.4 <tspan font-size="13" fill="#ff6a4d">/ 21.0</tspan></text>
      </g>
    </svg>`
  },

  // 2. DASHBOARD PREVIEW
  {
    file: 'hero/dashboard-preview.jpg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 620" width="1000" height="620" fill="none">
      <defs>
        <linearGradient id="dp-head-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#0b2a30"/>
          <stop offset="100%" stop-color="#071a1f"/>
        </linearGradient>
        <linearGradient id="dp-chart-line" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#2ef2c2"/>
          <stop offset="50%" stop-color="#c6ff3d"/>
          <stop offset="100%" stop-color="#ff6a4d"/>
        </linearGradient>
      </defs>
      <rect width="1000" height="620" rx="20" fill="#071a1f" stroke="#0b2a30" stroke-width="3"/>
      
      <!-- Top Chrome Bar -->
      <path d="M0 20 C0 9 9 0 20 0 L980 0 C991 0 1000 9 1000 20 L1000 48 L0 48 Z" fill="#0b2a30"/>
      <circle cx="28" cy="24" r="6" fill="#ff6a4d"/>
      <circle cx="48" cy="24" r="6" fill="#c6ff3d"/>
      <circle cx="68" cy="24" r="6" fill="#2ef2c2"/>
      <text x="120" y="28" font-family="'Space Grotesk', sans-serif" font-size="12" font-weight="600" fill="#f4efe6" opacity="0.7">app.pulseforge.io/analytics/athlete-telemetry</text>
      
      <!-- Mini Left Sidebar -->
      <rect x="0" y="48" width="80" height="572" fill="#06161a" stroke="#0b2a30" stroke-width="1"/>
      <circle cx="40" cy="80" r="16" fill="#c6ff3d" fill-opacity="0.2" stroke="#c6ff3d" stroke-width="2"/>
      <rect x="25" y="125" width="30" height="6" rx="3" fill="#2ef2c2"/>
      <rect x="25" y="160" width="30" height="6" rx="3" fill="#f4efe6" opacity="0.4"/>
      <rect x="25" y="195" width="30" height="6" rx="3" fill="#f4efe6" opacity="0.4"/>
      <rect x="25" y="230" width="30" height="6" rx="3" fill="#f4efe6" opacity="0.4"/>
      <rect x="25" y="265" width="30" height="6" rx="3" fill="#f4efe6" opacity="0.4"/>
      
      <!-- Main Dashboard Grid -->
      <!-- Top KPI Row -->
      <g transform="translate(100, 70)">
        <!-- Card 1 -->
        <rect x="0" y="0" width="205" height="100" rx="12" fill="#0b2a30" stroke="#2ef2c2" stroke-width="1.2"/>
        <text x="18" y="28" font-family="'Inter', sans-serif" font-size="11" font-weight="600" fill="#2ef2c2">RECOVERY READINESS</text>
        <text x="18" y="65" font-family="'Space Grotesk', sans-serif" font-size="28" font-weight="800" fill="#f4efe6">94% <tspan font-size="14" fill="#2ef2c2">Optimal</tspan></text>
        <path d="M140 70 C160 55 170 65 190 40" stroke="#2ef2c2" stroke-width="3" fill="none"/>
        
        <!-- Card 2 -->
        <rect x="225" y="0" width="205" height="100" rx="12" fill="#0b2a30" stroke="#c6ff3d" stroke-width="1.2"/>
        <text x="243" y="28" font-family="'Inter', sans-serif" font-size="11" font-weight="600" fill="#c6ff3d">CALORIE EXPENDITURE</text>
        <text x="243" y="65" font-family="'Space Grotesk', sans-serif" font-size="28" font-weight="800" fill="#f4efe6">2,940 <tspan font-size="14" fill="#c6ff3d">kcal</tspan></text>
        
        <!-- Card 3 -->
        <rect x="450" y="0" width="205" height="100" rx="12" fill="#0b2a30" stroke="#8b7bff" stroke-width="1.2"/>
        <text x="468" y="28" font-family="'Inter', sans-serif" font-size="11" font-weight="600" fill="#8b7bff">SLEEP ARCHITECTURE</text>
        <text x="468" y="65" font-family="'Space Grotesk', sans-serif" font-size="28" font-weight="800" fill="#f4efe6">8h 12m <tspan font-size="14" fill="#8b7bff">2h 15m REM</tspan></text>
        
        <!-- Card 4 -->
        <rect x="675" y="0" width="205" height="100" rx="12" fill="#0b2a30" stroke="#ff6a4d" stroke-width="1.2"/>
        <text x="693" y="28" font-family="'Inter', sans-serif" font-size="11" font-weight="600" fill="#ff6a4d">DAY STRAIN INDEX</text>
        <text x="693" y="65" font-family="'Space Grotesk', sans-serif" font-size="28" font-weight="800" fill="#f4efe6">15.2 <tspan font-size="14" fill="#ff6a4d">Zone 4/5</tspan></text>
      </g>
      
      <!-- Main Chart Area -->
      <g transform="translate(100, 190)">
        <rect x="0" y="0" width="565" height="395" rx="16" fill="#081f25" stroke="#0b2a30" stroke-width="1.5"/>
        <text x="24" y="34" font-family="'Space Grotesk', sans-serif" font-size="16" font-weight="700" fill="#f4efe6">Performance Load vs Recovery Balance</text>
        <text x="24" y="54" font-family="'Inter', sans-serif" font-size="11" fill="#2ef2c2">Biometric telemetric overlay — Last 14 Training Days</text>
        
        <!-- Grid lines -->
        <line x1="24" y1="120" x2="540" y2="120" stroke="#0b2a30" stroke-width="1"/>
        <line x1="24" y1="180" x2="540" y2="180" stroke="#0b2a30" stroke-width="1"/>
        <line x1="24" y1="240" x2="540" y2="240" stroke="#0b2a30" stroke-width="1"/>
        <line x1="24" y1="300" x2="540" y2="300" stroke="#0b2a30" stroke-width="1"/>
        <line x1="24" y1="350" x2="540" y2="350" stroke="#0b2a30" stroke-width="1"/>
        
        <!-- Primary Area / Line Graph -->
        <path d="M30 310 Q80 250 120 280 T210 170 T300 210 T390 120 T480 160 T535 95" 
              fill="none" stroke="url(#dp-chart-line)" stroke-width="4.5" stroke-linecap="round"/>
        <path d="M30 310 Q80 250 120 280 T210 170 T300 210 T390 120 T480 160 T535 95 L535 350 L30 350 Z" 
              fill="url(#dp-chart-line)" fill-opacity="0.1"/>
        <circle cx="390" cy="120" r="6" fill="#c6ff3d" stroke="#071a1f" stroke-width="2"/>
        <circle cx="535" cy="95" r="7" fill="#ff6a4d" stroke="#071a1f" stroke-width="2"/>
      </g>
      
      <!-- Right Side Widget Column -->
      <g transform="translate(685, 190)">
        <!-- Macro Rings Widget -->
        <rect x="0" y="0" width="295" height="190" rx="16" fill="#081f25" stroke="#0b2a30" stroke-width="1.5"/>
        <text x="20" y="32" font-family="'Space Grotesk', sans-serif" font-size="14" font-weight="700" fill="#f4efe6">Nutrient Macro Split</text>
        <circle cx="85" cy="115" r="50" stroke="#0b2a30" stroke-width="12" fill="none"/>
        <circle cx="85" cy="115" r="50" stroke="#c6ff3d" stroke-width="12" stroke-dasharray="140 180" stroke-linecap="round" fill="none"/>
        <circle cx="85" cy="115" r="34" stroke="#2ef2c2" stroke-width="9" stroke-dasharray="90 120" stroke-linecap="round" fill="none"/>
        <circle cx="85" cy="115" r="20" stroke="#ff6a4d" stroke-width="6" stroke-dasharray="50 80" stroke-linecap="round" fill="none"/>
        
        <text x="160" y="90" font-family="'Inter', sans-serif" font-size="11" font-weight="700" fill="#c6ff3d">Protein 195g (42%)</text>
        <text x="160" y="115" font-family="'Inter', sans-serif" font-size="11" font-weight="700" fill="#2ef2c2">Carbs 240g (38%)</text>
        <text x="160" y="140" font-family="'Inter', sans-serif" font-size="11" font-weight="700" fill="#ff6a4d">Fats 58g (20%)</text>
        
        <!-- Live Protocol Checklist -->
        <rect x="0" y="205" width="295" height="190" rx="16" fill="#081f25" stroke="#0b2a30" stroke-width="1.5"/>
        <text x="20" y="235" font-family="'Space Grotesk', sans-serif" font-size="14" font-weight="700" fill="#f4efe6">Recovery Protocol Status</text>
        <g transform="translate(20, 255)">
          <rect width="18" height="18" rx="5" fill="#2ef2c2"/>
          <path d="M4 9 L7 12 L14 5" stroke="#071a1f" stroke-width="2.5" fill="none"/>
          <text x="28" y="14" font-family="'Inter', sans-serif" font-size="12" fill="#f4efe6">Infrared Sauna 20m @ 80°C</text>
        </g>
        <g transform="translate(20, 290)">
          <rect width="18" height="18" rx="5" fill="#2ef2c2"/>
          <path d="M4 9 L7 12 L14 5" stroke="#071a1f" stroke-width="2.5" fill="none"/>
          <text x="28" y="14" font-family="'Inter', sans-serif" font-size="12" fill="#f4efe6">Cold Plunge 4m @ 11°C</text>
        </g>
        <g transform="translate(20, 325)">
          <rect width="18" height="18" rx="5" fill="#0b2a30" stroke="#2ef2c2"/>
          <text x="28" y="14" font-family="'Inter', sans-serif" font-size="12" fill="#f4efe6" opacity="0.8">Tart Cherry + Mag Bisglycinate</text>
        </g>
        <g transform="translate(20, 360)">
          <rect width="18" height="18" rx="5" fill="#0b2a30" stroke="#2ef2c2"/>
          <text x="28" y="14" font-family="'Inter', sans-serif" font-size="12" fill="#f4efe6" opacity="0.8">Thoracic Spine Mobility 15m</text>
        </g>
      </g>
    </svg>`
  },

  // 3. SPLIT RECOVERY (Home highlight)
  {
    file: 'hero/split-recovery.jpg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 500" width="600" height="500" fill="none">
      <defs>
        <radialGradient id="sr-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#2ef2c2" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#071a1f" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="600" height="500" rx="20" fill="#071a1f"/>
      <circle cx="300" cy="250" r="240" fill="url(#sr-glow)"/>
      
      <!-- Bio-Recovery Chamber Graphic -->
      <path d="M120 400 L480 400 L430 180 C410 130 350 100 300 100 C250 100 190 130 170 180 Z" 
            fill="#0b2a30" stroke="#2ef2c2" stroke-width="2.5"/>
      <circle cx="300" cy="220" r="90" fill="#081f25" stroke="#c6ff3d" stroke-width="2" stroke-dasharray="6 6"/>
      
      <!-- Recovery Metrics Dial -->
      <path d="M240 220 A60 60 0 0 1 360 220" stroke="#2ef2c2" stroke-width="8" stroke-linecap="round" fill="none"/>
      <text x="300" y="210" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="32" font-weight="800" fill="#f4efe6">96%</text>
      <text x="300" y="235" text-anchor="middle" font-family="'Inter', sans-serif" font-size="12" font-weight="700" fill="#c6ff3d">READY FOR LOAD</text>
      
      <!-- Oxygen & Thermal Indicators -->
      <g transform="translate(140, 290)">
        <rect width="140" height="60" rx="10" fill="#0b2a30" stroke="#2ef2c2" stroke-width="1.2"/>
        <text x="14" y="24" font-family="'Inter', sans-serif" font-size="10" fill="#2ef2c2">SpO2 PERFUSION</text>
        <text x="14" y="48" font-family="'Space Grotesk', sans-serif" font-size="20" font-weight="800" fill="#f4efe6">99.2%</text>
      </g>
      <g transform="translate(320, 290)">
        <rect width="140" height="60" rx="10" fill="#0b2a30" stroke="#ff6a4d" stroke-width="1.2"/>
        <text x="14" y="24" font-family="'Inter', sans-serif" font-size="10" fill="#ff6a4d">CORE TEMP RECOVERY</text>
        <text x="14" y="48" font-family="'Space Grotesk', sans-serif" font-size="20" font-weight="800" fill="#f4efe6">36.7°C</text>
      </g>
    </svg>`
  },

  // 4. AUTH MOTIVATIONAL
  {
    file: 'hero/auth-motivational.jpg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 800" width="700" height="800" fill="none">
      <defs>
        <linearGradient id="am-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#071a1f"/>
          <stop offset="50%" stop-color="#0b2a30"/>
          <stop offset="100%" stop-color="#040e11"/>
        </linearGradient>
        <radialGradient id="am-glow" cx="60%" cy="40%" r="50%">
          <stop offset="0%" stop-color="#c6ff3d" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#2ef2c2" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="700" height="800" fill="url(#am-grad)"/>
      <circle cx="450" cy="350" r="350" fill="url(#am-glow)"/>
      
      <!-- Abstract Kinetic Energy Rings -->
      <circle cx="350" cy="400" r="280" stroke="#2ef2c2" stroke-width="1.5" stroke-dasharray="10 14" opacity="0.3"/>
      <circle cx="350" cy="400" r="220" stroke="#c6ff3d" stroke-width="2" stroke-dasharray="8 12" opacity="0.4"/>
      <circle cx="350" cy="400" r="160" stroke="#ff6a4d" stroke-width="1.5" stroke-dasharray="6 8" opacity="0.3"/>
      
      <!-- Center Athlete Silhouette Crest -->
      <g transform="translate(225, 260)">
        <path d="M125 40 L165 140 L210 200 L125 240 L40 200 L85 140 Z" fill="#0b2a30" stroke="#c6ff3d" stroke-width="3"/>
        <path d="M70 140 L125 100 L180 140 L125 210 Z" fill="#2ef2c2" fill-opacity="0.3"/>
        <circle cx="125" cy="140" r="20" fill="#c6ff3d"/>
      </g>
      
      <g transform="translate(80, 560)">
        <text font-family="'Space Grotesk', sans-serif" font-weight="800" font-size="34" fill="#f4efe6">
          FUEL. RECOVER. PERFORM.
        </text>
        <text y="40" font-family="'Inter', sans-serif" font-size="16" fill="#2ef2c2" opacity="0.9">
          Join over 180,000 elite athletes and accredited coaches engineering their highest potential.
        </text>
      </g>
    </svg>`
  },

  // 5. NUTRITION: MACRO PLATE
  {
    file: 'nutrition/macro-plate.jpg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 500" width="600" height="500" fill="none">
      <rect width="600" height="500" rx="20" fill="#071a1f"/>
      <circle cx="300" cy="250" r="180" fill="#0b2a30" stroke="#2ef2c2" stroke-width="2"/>
      <circle cx="300" cy="250" r="150" fill="#081f25" stroke="#c6ff3d" stroke-width="1.5" stroke-dasharray="4 6"/>
      
      <!-- Plate Compartments / Portions -->
      <!-- Protein: Grilled Salmon -->
      <path d="M300 250 L200 130 A150 150 0 0 1 400 130 Z" fill="#ff6a4d" fill-opacity="0.3" stroke="#ff6a4d" stroke-width="2"/>
      <text x="300" y="160" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="14" font-weight="700" fill="#ff6a4d">PROTEIN: 48g</text>
      
      <!-- Complex Carbs: Quinoa & Sweet Potato -->
      <path d="M300 250 L400 130 A150 150 0 0 1 420 340 Z" fill="#c6ff3d" fill-opacity="0.25" stroke="#c6ff3d" stroke-width="2"/>
      <text x="370" y="250" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="14" font-weight="700" fill="#c6ff3d">CARBS: 62g</text>
      
      <!-- Healthy Fats & Micro Greens -->
      <path d="M300 250 L420 340 A150 150 0 0 1 200 130 Z" fill="#2ef2c2" fill-opacity="0.25" stroke="#2ef2c2" stroke-width="2"/>
      <text x="240" y="280" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="14" font-weight="700" fill="#2ef2c2">FATS & FIBER: 16g</text>
      
      <circle cx="300" cy="250" r="28" fill="#071a1f" stroke="#f4efe6" stroke-width="2"/>
      <text x="300" y="255" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="13" font-weight="800" fill="#f4efe6">584 kcal</text>
    </svg>`
  },

  // 6. NUTRITION: HYDRATION MATRIX
  {
    file: 'nutrition/hydration-matrix.jpg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 500" width="600" height="500" fill="none">
      <rect width="600" height="500" rx="20" fill="#071a1f"/>
      <!-- Water Bottle / Osmolarity Vessel -->
      <rect x="220" y="90" width="160" height="320" rx="40" fill="#081f25" stroke="#2ef2c2" stroke-width="3"/>
      <!-- Water Fill level with wave -->
      <path d="M222 220 Q260 210 300 220 T378 220 L378 370 C378 390 360 408 340 408 L260 408 C240 408 222 390 222 370 Z" fill="#2ef2c2" fill-opacity="0.4"/>
      
      <text x="300" y="270" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="34" font-weight="800" fill="#f4efe6">3,250 <tspan font-size="16" fill="#2ef2c2">mL</tspan></text>
      <text x="300" y="295" text-anchor="middle" font-family="'Inter', sans-serif" font-size="12" font-weight="600" fill="#2ef2c2">92% OF DAILY HYDRATION</text>
      
      <!-- Electrolytes Badges -->
      <g transform="translate(60, 160)">
        <rect width="130" height="50" rx="10" fill="#0b2a30" stroke="#c6ff3d" stroke-width="1.2"/>
        <text x="14" y="22" font-family="'Inter', sans-serif" font-size="10" fill="#c6ff3d">SODIUM Na+</text>
        <text x="14" y="40" font-family="'Space Grotesk', sans-serif" font-size="16" font-weight="700" fill="#f4efe6">1,800 mg</text>
      </g>
      <g transform="translate(60, 240)">
        <rect width="130" height="50" rx="10" fill="#0b2a30" stroke="#2ef2c2" stroke-width="1.2"/>
        <text x="14" y="22" font-family="'Inter', sans-serif" font-size="10" fill="#2ef2c2">POTASSIUM K+</text>
        <text x="14" y="40" font-family="'Space Grotesk', sans-serif" font-size="16" font-weight="700" fill="#f4efe6">3,200 mg</text>
      </g>
      <g transform="translate(410, 200)">
        <rect width="130" height="50" rx="10" fill="#0b2a30" stroke="#ff6a4d" stroke-width="1.2"/>
        <text x="14" y="22" font-family="'Inter', sans-serif" font-size="10" fill="#ff6a4d">MAGNESIUM Mg2+</text>
        <text x="14" y="40" font-family="'Space Grotesk', sans-serif" font-size="16" font-weight="700" fill="#f4efe6">450 mg</text>
      </g>
    </svg>`
  },

  // 7-10. RECIPES (4 Unique Dishes)
  {
    file: 'nutrition/recipe-salmon-bowl.jpg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 350" width="500" height="350" fill="none">
      <rect width="500" height="350" rx="16" fill="#071a1f" stroke="#0b2a30" stroke-width="2"/>
      <circle cx="250" cy="150" r="100" fill="#0b2a30" stroke="#ff6a4d" stroke-width="2"/>
      <path d="M190 150 C210 110 290 110 310 150 C290 190 210 190 190 150 Z" fill="#ff6a4d" fill-opacity="0.6"/>
      <circle cx="210" cy="130" r="18" fill="#2ef2c2" fill-opacity="0.6"/>
      <circle cx="290" cy="170" r="16" fill="#c6ff3d" fill-opacity="0.6"/>
      
      <rect x="30" y="270" width="440" height="60" rx="12" fill="#0b2a30"/>
      <text x="50" y="296" font-family="'Space Grotesk', sans-serif" font-size="16" font-weight="700" fill="#f4efe6">Anabolic Wild Salmon & Tri-Color Quinoa Bowl</text>
      <text x="50" y="318" font-family="'Inter', sans-serif" font-size="12" fill="#2ef2c2">52g Protein • 58g Carbs • 18g Fat • 602 kcal</text>
    </svg>`
  },
  {
    file: 'nutrition/recipe-oats-recovery.jpg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 350" width="500" height="350" fill="none">
      <rect width="500" height="350" rx="16" fill="#071a1f" stroke="#0b2a30" stroke-width="2"/>
      <circle cx="250" cy="150" r="100" fill="#0b2a30" stroke="#c6ff3d" stroke-width="2"/>
      <circle cx="250" cy="150" r="75" fill="#081f25"/>
      <circle cx="230" cy="140" r="22" fill="#8b7bff" fill-opacity="0.6"/>
      <circle cx="270" cy="160" r="18" fill="#c6ff3d" fill-opacity="0.6"/>
      
      <rect x="30" y="270" width="440" height="60" rx="12" fill="#0b2a30"/>
      <text x="50" y="296" font-family="'Space Grotesk', sans-serif" font-size="16" font-weight="700" fill="#f4efe6">Carb-Cycling Overnight Oats & Tart Cherry</text>
      <text x="50" y="318" font-family="'Inter', sans-serif" font-size="12" fill="#c6ff3d">34g Protein • 74g Carbs • 12g Fat • 540 kcal</text>
    </svg>`
  },
  {
    file: 'nutrition/recipe-steak-fuel.jpg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 350" width="500" height="350" fill="none">
      <rect width="500" height="350" rx="16" fill="#071a1f" stroke="#0b2a30" stroke-width="2"/>
      <circle cx="250" cy="150" r="100" fill="#0b2a30" stroke="#ff6a4d" stroke-width="2"/>
      <path d="M180 140 L320 130 L310 180 L190 180 Z" fill="#ff6a4d" fill-opacity="0.5"/>
      <circle cx="230" cy="120" r="16" fill="#c6ff3d" fill-opacity="0.7"/>
      <circle cx="280" cy="170" r="14" fill="#2ef2c2" fill-opacity="0.7"/>
      
      <rect x="30" y="270" width="440" height="60" rx="12" fill="#0b2a30"/>
      <text x="50" y="296" font-family="'Space Grotesk', sans-serif" font-size="16" font-weight="700" fill="#f4efe6">Grass-Fed Filet Mignon & Roasted Garnet Yam</text>
      <text x="50" y="318" font-family="'Inter', sans-serif" font-size="12" fill="#ff6a4d">58g Protein • 44g Carbs • 22g Fat • 606 kcal</text>
    </svg>`
  },
  {
    file: 'nutrition/recipe-green-smoothie.jpg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 350" width="500" height="350" fill="none">
      <rect width="500" height="350" rx="16" fill="#071a1f" stroke="#0b2a30" stroke-width="2"/>
      <path d="M220 70 L280 70 L270 230 L230 230 Z" fill="#2ef2c2" fill-opacity="0.4" stroke="#2ef2c2" stroke-width="2"/>
      <circle cx="250" cy="120" r="10" fill="#c6ff3d"/>
      <circle cx="250" cy="170" r="8" fill="#c6ff3d"/>
      
      <rect x="30" y="270" width="440" height="60" rx="12" fill="#0b2a30"/>
      <text x="50" y="296" font-family="'Space Grotesk', sans-serif" font-size="16" font-weight="700" fill="#f4efe6">Chlorophyll Peptide Cell-Repair Smoothie</text>
      <text x="50" y="318" font-family="'Inter', sans-serif" font-size="12" fill="#2ef2c2">28g Protein • 32g Carbs • 6g Fat • 294 kcal</text>
    </svg>`
  },

  // 11-14. RECOVERY PROTOCOLS
  {
    file: 'recovery/cold-plunge.jpg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 380" width="500" height="380" fill="none">
      <rect width="500" height="380" rx="16" fill="#071a1f" stroke="#0b2a30" stroke-width="2"/>
      <rect x="100" y="90" width="300" height="180" rx="20" fill="#081f25" stroke="#2ef2c2" stroke-width="2.5"/>
      <path d="M102 170 Q175 155 250 170 T398 170 L398 268 C398 270 388 270 388 270 L112 270 Z" fill="#2ef2c2" fill-opacity="0.3"/>
      <!-- Frost snowflake icon -->
      <circle cx="250" cy="180" r="32" stroke="#2ef2c2" stroke-width="2.5" fill="#071a1f"/>
      <path d="M250 156 L250 204 M226 180 L274 180" stroke="#2ef2c2" stroke-width="2.5"/>
      <text x="250" y="310" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="18" font-weight="700" fill="#f4efe6">Cold Water Immersion Protocol</text>
      <text x="250" y="335" text-anchor="middle" font-family="'Inter', sans-serif" font-size="12" fill="#2ef2c2">10°C - 12°C • 3 to 5 Minutes • Vasoconstriction & Norepinephrine</text>
    </svg>`
  },
  {
    file: 'recovery/infrared-sauna.jpg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 380" width="500" height="380" fill="none">
      <rect width="500" height="380" rx="16" fill="#071a1f" stroke="#0b2a30" stroke-width="2"/>
      <rect x="100" y="90" width="300" height="180" rx="20" fill="#081f25" stroke="#ff6a4d" stroke-width="2.5"/>
      <!-- Heat Wave Rays -->
      <path d="M150 240 Q180 180 150 120" stroke="#ff6a4d" stroke-width="3" stroke-linecap="round"/>
      <path d="M250 240 Q280 180 250 120" stroke="#ff6a4d" stroke-width="3" stroke-linecap="round"/>
      <path d="M350 240 Q380 180 350 120" stroke="#ff6a4d" stroke-width="3" stroke-linecap="round"/>
      <circle cx="250" cy="180" r="28" fill="#ff6a4d" fill-opacity="0.3"/>
      <text x="250" y="310" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="18" font-weight="700" fill="#f4efe6">Infrared Thermal Sauna Protocol</text>
      <text x="250" y="335" text-anchor="middle" font-family="'Inter', sans-serif" font-size="12" fill="#ff6a4d">80°C • 20 Minutes • Heat Shock Proteins & Growth Hormone</text>
    </svg>`
  },
  {
    file: 'recovery/sleep-architecture.jpg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 380" width="500" height="380" fill="none">
      <rect width="500" height="380" rx="16" fill="#071a1f" stroke="#0b2a30" stroke-width="2"/>
      <!-- Hypnogram sleep cycles -->
      <g transform="translate(60, 90)">
        <text x="0" y="20" font-family="'Inter', sans-serif" font-size="10" fill="#f4efe6" opacity="0.6">Awake</text>
        <text x="0" y="55" font-family="'Inter', sans-serif" font-size="10" fill="#8b7bff">REM</text>
        <text x="0" y="90" font-family="'Inter', sans-serif" font-size="10" fill="#2ef2c2">Light</text>
        <text x="0" y="125" font-family="'Inter', sans-serif" font-size="10" fill="#c6ff3d">Deep SWS</text>
        
        <path d="M50 15 L80 85 L140 120 L180 85 L220 50 L260 85 L300 120 L340 50 L370 15" 
              stroke="#8b7bff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      </g>
      <text x="250" y="310" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="18" font-weight="700" fill="#f4efe6">Circadian Sleep Architecture</text>
      <text x="250" y="335" text-anchor="middle" font-family="'Inter', sans-serif" font-size="12" fill="#8b7bff">96% Efficiency • 2h 15m REM • 1h 48m Deep SWS</text>
    </svg>`
  },
  {
    file: 'recovery/mobility-session.jpg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 380" width="500" height="380" fill="none">
      <rect width="500" height="380" rx="16" fill="#071a1f" stroke="#0b2a30" stroke-width="2"/>
      <circle cx="250" cy="170" r="70" stroke="#2ef2c2" stroke-width="2" stroke-dasharray="6 6"/>
      <path d="M190 200 C220 130 280 130 310 200" stroke="#c6ff3d" stroke-width="4" stroke-linecap="round"/>
      <circle cx="250" cy="150" r="14" fill="#2ef2c2"/>
      <text x="250" y="310" text-anchor="middle" font-family="'Space Grotesk', sans-serif" font-size="18" font-weight="700" fill="#f4efe6">Myofascial Flossing & Mobility</text>
      <text x="250" y="335" text-anchor="middle" font-family="'Inter', sans-serif" font-size="12" fill="#2ef2c2">Thoracic Spine • Hip Flexor Decompression • Dynamic Lymphatic Flow</text>
    </svg>`
  },

  // 15. ANALYTICS: VO2 TELEMETRY
  {
    file: 'analytics/vo2-telemetry.jpg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="600" height="450" fill="none">
      <rect width="600" height="450" rx="20" fill="#071a1f" stroke="#0b2a30" stroke-width="2"/>
      <text x="40" y="48" font-family="'Space Grotesk', sans-serif" font-size="18" font-weight="700" fill="#f4efe6">Lactate Threshold & VO2 Max Curve</text>
      
      <!-- Graph Axes -->
      <line x1="60" y1="360" x2="540" y2="360" stroke="#0b2a30" stroke-width="2"/>
      <line x1="60" y1="80" x2="60" y2="360" stroke="#0b2a30" stroke-width="2"/>
      
      <!-- Curve 1: VO2 Uptake -->
      <path d="M60 320 C180 310 280 230 400 140 T520 90" stroke="#c6ff3d" stroke-width="4" fill="none"/>
      <!-- Curve 2: Blood Lactate -->
      <path d="M60 350 C240 345 360 330 420 220 T520 120" stroke="#ff6a4d" stroke-width="3.5" stroke-dasharray="6 4" fill="none"/>
      
      <circle cx="420" cy="220" r="6" fill="#ff6a4d"/>
      <text x="420" y="200" text-anchor="middle" font-family="'Inter', sans-serif" font-size="11" font-weight="700" fill="#ff6a4d">LT2 (4.0 mmol/L)</text>
      
      <g transform="translate(60, 390)">
        <text font-family="'Inter', sans-serif" font-size="12" fill="#c6ff3d">● VO2 Kinetics</text>
        <text x="140" font-family="'Inter', sans-serif" font-size="12" fill="#ff6a4d">-- Blood Lactate (LT1/LT2)</text>
      </g>
    </svg>`
  },

  // 16. ANALYTICS: BEFORE/AFTER PROGRESS
  {
    file: 'analytics/before-after.jpg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="600" height="450" fill="none">
      <rect width="600" height="450" rx="20" fill="#071a1f" stroke="#0b2a30" stroke-width="2"/>
      <line x1="300" y1="20" x2="300" y2="430" stroke="#2ef2c2" stroke-width="2" stroke-dasharray="4 6"/>
      
      <!-- Before Side -->
      <g transform="translate(40, 60)">
        <text font-family="'Space Grotesk', sans-serif" font-size="18" font-weight="700" fill="#ff6a4d">BASELINE (WEEK 0)</text>
        <text y="40" font-family="'Inter', sans-serif" font-size="13" fill="#f4efe6">Avg HRV: 48 ms</text>
        <text y="70" font-family="'Inter', sans-serif" font-size="13" fill="#f4efe6">VO2 Max: 46.2 ml/kg/min</text>
        <text y="100" font-family="'Inter', sans-serif" font-size="13" fill="#f4efe6">Recovery Readiness: 62%</text>
        <text y="130" font-family="'Inter', sans-serif" font-size="13" fill="#f4efe6">Fatigue Overtraining Risk: HIGH</text>
      </g>
      
      <!-- After Side -->
      <g transform="translate(340, 60)">
        <text font-family="'Space Grotesk', sans-serif" font-size="18" font-weight="700" fill="#c6ff3d">OPTIMIZED (WEEK 12)</text>
        <text y="40" font-family="'Inter', sans-serif" font-size="13" fill="#f4efe6">Avg HRV: 86 ms (+79%)</text>
        <text y="70" font-family="'Inter', sans-serif" font-size="13" fill="#f4efe6">VO2 Max: 58.4 ml/kg/min</text>
        <text y="100" font-family="'Inter', sans-serif" font-size="13" fill="#f4efe6">Recovery Readiness: 94%</text>
        <text y="130" font-family="'Inter', sans-serif" font-size="13" fill="#2ef2c2">Periodized Supercompensation</text>
      </g>
    </svg>`
  },

  // 17. ANALYTICS: EXPORT PREVIEW
  {
    file: 'analytics/export-preview.jpg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="600" height="450" fill="none">
      <rect width="600" height="450" rx="20" fill="#071a1f" stroke="#0b2a30" stroke-width="2"/>
      
      <!-- Document Page Mockup -->
      <rect x="120" y="40" width="360" height="370" rx="10" fill="#0b2a30" stroke="#2ef2c2" stroke-width="1.8"/>
      <rect x="150" y="70" width="140" height="14" rx="4" fill="#c6ff3d"/>
      <rect x="150" y="95" width="220" height="8" rx="4" fill="#f4efe6" opacity="0.6"/>
      <rect x="150" y="115" width="300" height="1" fill="#071a1f"/>
      
      <!-- Mock Table Rows -->
      <rect x="150" y="135" width="300" height="24" rx="4" fill="#081f25"/>
      <rect x="150" y="170" width="300" height="24" rx="4" fill="#081f25" opacity="0.7"/>
      <rect x="150" y="205" width="300" height="24" rx="4" fill="#081f25"/>
      <rect x="150" y="240" width="300" height="24" rx="4" fill="#081f25" opacity="0.7"/>
      
      <!-- Mock Mini-chart in report -->
      <path d="M150 340 L200 310 L250 330 L320 280 L400 300 L440 260" stroke="#2ef2c2" stroke-width="3" fill="none"/>
      
      <!-- Export Badges -->
      <g transform="translate(60, 370)">
        <rect width="80" height="32" rx="8" fill="#c6ff3d"/>
        <text x="40" y="21" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="700" font-size="12" fill="#071a1f">.CSV</text>
      </g>
      <g transform="translate(460, 370)">
        <rect width="80" height="32" rx="8" fill="#ff6a4d"/>
        <text x="40" y="21" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="700" font-size="12" fill="#071a1f">.PDF</text>
      </g>
    </svg>`
  },

  // 18-22. UNIQUE AVATARS
  {
    file: 'avatars/coach-marcus.jpg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" width="160" height="160" fill="none">
      <rect width="160" height="160" rx="80" fill="#0b2a30" stroke="#c6ff3d" stroke-width="3"/>
      <circle cx="80" cy="62" r="32" fill="#2ef2c2" fill-opacity="0.3"/>
      <!-- Stylized Coach Head -->
      <circle cx="80" cy="58" r="24" fill="#f4efe6"/>
      <path d="M40 140 C40 105 60 95 80 95 C100 95 120 105 120 140 Z" fill="#c6ff3d" fill-opacity="0.8"/>
      <!-- Whistle lanyard / Coach badge -->
      <circle cx="80" cy="115" r="5" fill="#071a1f"/>
    </svg>`
  },
  {
    file: 'avatars/athlete-elena.jpg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" width="160" height="160" fill="none">
      <rect width="160" height="160" rx="80" fill="#0b2a30" stroke="#2ef2c2" stroke-width="3"/>
      <circle cx="80" cy="62" r="32" fill="#ff6a4d" fill-opacity="0.3"/>
      <!-- Stylized Triathlete Head with headband -->
      <circle cx="80" cy="58" r="24" fill="#f4efe6"/>
      <path d="M58 50 L102 50" stroke="#2ef2c2" stroke-width="5" stroke-linecap="round"/>
      <path d="M40 140 C40 105 60 95 80 95 C100 95 120 105 120 140 Z" fill="#2ef2c2" fill-opacity="0.8"/>
    </svg>`
  },
  {
    file: 'avatars/clinic-dr-kim.jpg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" width="160" height="160" fill="none">
      <rect width="160" height="160" rx="80" fill="#0b2a30" stroke="#8b7bff" stroke-width="3"/>
      <circle cx="80" cy="62" r="32" fill="#8b7bff" fill-opacity="0.3"/>
      <!-- Doctor / Sports Physio -->
      <circle cx="80" cy="58" r="24" fill="#f4efe6"/>
      <!-- Stethoscope curve -->
      <path d="M68 62 C68 76 92 76 92 62" stroke="#8b7bff" stroke-width="3" fill="none"/>
      <path d="M40 140 C40 105 60 95 80 95 C100 95 120 105 120 140 Z" fill="#8b7bff" fill-opacity="0.8"/>
    </svg>`
  },
  {
    file: 'avatars/athlete-sarah.jpg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" width="160" height="160" fill="none">
      <rect width="160" height="160" rx="80" fill="#0b2a30" stroke="#ff6a4d" stroke-width="3"/>
      <circle cx="80" cy="62" r="32" fill="#c6ff3d" fill-opacity="0.3"/>
      <!-- Strength Athlete Head with ponytail -->
      <circle cx="80" cy="58" r="24" fill="#f4efe6"/>
      <path d="M102 52 C115 58 115 72 105 78" stroke="#ff6a4d" stroke-width="4" fill="none"/>
      <path d="M40 140 C40 105 60 95 80 95 C100 95 120 105 120 140 Z" fill="#ff6a4d" fill-opacity="0.8"/>
    </svg>`
  },
  {
    file: 'avatars/athlete-alex.jpg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" width="160" height="160" fill="none">
      <rect width="160" height="160" rx="80" fill="#0b2a30" stroke="#c6ff3d" stroke-width="3"/>
      <circle cx="80" cy="62" r="32" fill="#2ef2c2" fill-opacity="0.2"/>
      <circle cx="80" cy="58" r="24" fill="#f4efe6"/>
      <path d="M40 140 C40 105 60 95 80 95 C100 95 120 105 120 140 Z" fill="#071a1f" stroke="#c6ff3d" stroke-width="2"/>
    </svg>`
  }
];

let createdCount = 0;
for (const asset of assets) {
  const fullPath = path.join(baseDir, asset.file);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(fullPath, asset.content.trim(), 'utf8');
  createdCount++;
}

console.log('SUCCESS: Created ' + createdCount + ' unique local images in /images/');
