import React from 'react';

interface MCQIllustrationV2Props {
  className?: string;
  animated?: boolean;
}

const MCQIllustrationV2: React.FC<MCQIllustrationV2Props> = ({ className = '', animated = true }) => {
  const animationClass = animated ? 'mcq-v2-animated' : '';
  
  return (
    <svg
      viewBox="0 0 800 620"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${animationClass}`}
      role="img"
      aria-label="Medical MCQ Quiz Interface Illustration"
    >
      <defs>
        {/* Gradients */}
        <linearGradient id="bgGradientV2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8fafa" />
          <stop offset="100%" stopColor="#e8f4f4" />
        </linearGradient>
        <linearGradient id="accentGradientV2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0CA5B7" />
          <stop offset="100%" stopColor="#055056" />
        </linearGradient>
        <linearGradient id="successGradientV2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#67D1B5" />
          <stop offset="100%" stopColor="#4cb89a" />
        </linearGradient>
        
        {/* Shadows */}
        <filter id="cardShadowV2" x="-10%" y="-5%" width="120%" height="115%">
          <feDropShadow dx="0" dy="8" stdDeviation="16" floodColor="#055056" floodOpacity="0.08" />
        </filter>
        <filter id="statsShadowV2" x="-15%" y="-10%" width="130%" height="125%">
          <feDropShadow dx="0" dy="4" stdDeviation="12" floodColor="#055056" floodOpacity="0.06" />
        </filter>
        
        {/* Star symbol */}
        <symbol id="starV2" viewBox="0 0 24 24">
          <path d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z" />
        </symbol>
      </defs>

      {/* Background */}
      <g id="backgroundV2">
        <rect width="800" height="620" fill="url(#bgGradientV2)" />
        
        {/* Subtle dot pattern */}
        <g opacity="0.03">
          {[...Array(16)].map((_, row) => (
            [...Array(20)].map((_, col) => (
              <circle key={`dot-${row}-${col}`} cx={40 + col * 40} cy={30 + row * 40} r="1.5" fill="#055056" />
            ))
          ))}
        </g>
      </g>

      {/* Floating Stars */}
      <g id="floatingStarsV2">
        <use href="#starV2" x="555" y="50" width="16" height="16" fill="#0CA5B7" opacity="0.35" className="star-v2-1" />
        <use href="#starV2" x="755" y="95" width="12" height="12" fill="#67D1B5" opacity="0.3" className="star-v2-2" />
        <use href="#starV2" x="770" y="280" width="14" height="14" fill="#C94678" opacity="0.25" className="star-v2-3" />
        <use href="#starV2" x="545" y="400" width="10" height="10" fill="#0CA5B7" opacity="0.35" className="star-v2-4" />
        <use href="#starV2" x="765" y="450" width="13" height="13" fill="#67D1B5" opacity="0.3" className="star-v2-5" />
        <use href="#starV2" x="535" y="220" width="11" height="11" fill="#055056" opacity="0.2" className="star-v2-6" />
        <use href="#starV2" x="50" y="150" width="10" height="10" fill="#0CA5B7" opacity="0.2" className="star-v2-7" />
        <use href="#starV2" x="45" y="450" width="14" height="14" fill="#67D1B5" opacity="0.25" className="star-v2-8" />
      </g>

      {/* Floating Decorative Shapes */}
      <g id="floatingShapesV2">
        <circle cx="50" cy="100" r="18" fill="#0CA5B7" opacity="0.06" className="shape-v2-1" />
        <circle cx="70" cy="520" r="22" fill="#67D1B5" opacity="0.08" className="shape-v2-2" />
        <rect x="25" y="320" width="14" height="14" rx="4" fill="#C94678" opacity="0.06" transform="rotate(20 32 327)" className="shape-v2-3" />
      </g>

      {/* Main MCQ Card - Cleaner, no header icons */}
      <g id="cardV2" filter="url(#cardShadowV2)" className="card-v2-float">
        {/* Card Background */}
        <rect x="60" y="40" width="430" height="540" rx="14" fill="white" />
        <rect x="60" y="40" width="430" height="540" rx="14" stroke="#e5eaea" strokeWidth="1" fill="none" />

        {/* Question Text - Clean, no ID */}
        <g id="questionTextV2">
          <text x="85" y="85" fill="#1a1a1a" fontSize="15" fontWeight="600" fontFamily="Inter, sans-serif">
            Which vitamin deficiency is associated with the
          </text>
          <text x="85" y="108" fill="#1a1a1a" fontSize="15" fontWeight="600" fontFamily="Inter, sans-serif">
            4 Ds: Dermatitis, Diarrhea, Dementia, and Death?
          </text>
        </g>

        {/* Answer Options */}
        <g id="answerOptionsV2">
          {/* Option A - Neutral */}
          <g id="optionAV2" className="option-v2-hover">
            <rect x="85" y="135" width="385" height="48" rx="8" fill="white" stroke="#e0e4e4" strokeWidth="1.2" />
            <rect x="100" y="150" width="24" height="18" rx="4" fill="#f5f7f7" />
            <text x="112" y="163" fill="#666" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif" textAnchor="middle">A</text>
            <text x="138" y="164" fill="#333" fontSize="13" fontFamily="Inter, sans-serif">Vitamin B1 (Thiamine)</text>
          </g>

          {/* Option B - Correct Answer */}
          <g id="optionBV2" className="correct-v2-pulse">
            <rect x="85" y="195" width="385" height="48" rx="8" fill="#e8faf5" stroke="#67D1B5" strokeWidth="1.8" />
            <rect x="100" y="210" width="24" height="18" rx="4" fill="#67D1B5" opacity="0.25" />
            <text x="112" y="223" fill="#2a8a70" fontSize="12" fontWeight="700" fontFamily="Inter, sans-serif" textAnchor="middle">B</text>
            <text x="138" y="224" fill="#1f6b56" fontSize="13" fontWeight="500" fontFamily="Inter, sans-serif">Vitamin B3 (Niacin)</text>
            {/* Checkmark */}
            <g transform="translate(448, 219)">
              <path d="M-5 0 L-2 3 L5 -4" stroke="#67D1B5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </g>
          </g>

          {/* Explanation Panel for Correct - Option B */}
          <g id="explanationPanelBV2" className="explanation-v2-slide">
            <rect x="85" y="248" width="385" height="52" rx="0 0 8 8" fill="#f6fafa" />
            <rect x="85" y="248" width="4" height="52" fill="#0CA5B7" rx="0" />
            
            {/* Info icon */}
            <g transform="translate(105, 262)">
              <circle cx="8" cy="8" r="7" fill="none" stroke="#0CA5B7" strokeWidth="1.5" />
              <text x="8" y="12" fill="#0CA5B7" fontSize="11" fontWeight="700" fontFamily="Inter, sans-serif" textAnchor="middle">i</text>
            </g>
            
            <text x="128" y="272" fill="#0CA5B7" fontSize="11" fontWeight="700" fontFamily="Inter, sans-serif">Explanation for Option B</text>
            <text x="105" y="290" fill="#5a6a6a" fontSize="11" fontFamily="Inter, sans-serif">Correct. Niacin (B3) deficiency leads to Pellagra, characterized by the 4 Ds.</text>
          </g>

          {/* Option C - Wrong Answer */}
          <g id="optionCV2" className="wrong-v2-shake">
            <rect x="85" y="312" width="385" height="48" rx="8" fill="#fef2f6" stroke="#C94678" strokeWidth="1.8" />
            <rect x="100" y="327" width="24" height="18" rx="4" fill="#C94678" opacity="0.18" />
            <text x="112" y="340" fill="#C94678" fontSize="12" fontWeight="700" fontFamily="Inter, sans-serif" textAnchor="middle">C</text>
            <text x="138" y="341" fill="#a13860" fontSize="13" fontWeight="500" fontFamily="Inter, sans-serif">Vitamin C (Ascorbic Acid)</text>
            {/* X Icon */}
            <g transform="translate(448, 336)">
              <path d="M-4 -4 L4 4 M4 -4 L-4 4" stroke="#C94678" strokeWidth="2.5" strokeLinecap="round" />
            </g>
          </g>

          {/* Explanation Panel for Wrong - Option C */}
          <g id="explanationPanelCV2" className="explanation-v2-wrong">
            <rect x="85" y="365" width="385" height="52" rx="0 0 8 8" fill="#fef8fa" />
            <rect x="85" y="365" width="4" height="52" fill="#C94678" rx="0" />
            
            {/* Info icon */}
            <g transform="translate(105, 379)">
              <circle cx="8" cy="8" r="7" fill="none" stroke="#C94678" strokeWidth="1.5" />
              <text x="8" y="12" fill="#C94678" fontSize="11" fontWeight="700" fontFamily="Inter, sans-serif" textAnchor="middle">!</text>
            </g>
            
            <text x="128" y="389" fill="#C94678" fontSize="11" fontWeight="700" fontFamily="Inter, sans-serif">Why Option C is incorrect</text>
            <text x="105" y="407" fill="#7a5a65" fontSize="11" fontFamily="Inter, sans-serif">Vitamin C deficiency causes Scurvy, not Pellagra.</text>
          </g>

          {/* Option D - Neutral */}
          <g id="optionDV2" className="option-v2-hover">
            <rect x="85" y="430" width="385" height="48" rx="8" fill="white" stroke="#e0e4e4" strokeWidth="1.2" />
            <rect x="100" y="445" width="24" height="18" rx="4" fill="#f5f7f7" />
            <text x="112" y="458" fill="#666" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif" textAnchor="middle">D</text>
            <text x="138" y="459" fill="#333" fontSize="13" fontFamily="Inter, sans-serif">Vitamin D</text>
          </g>
        </g>

        {/* Card Footer - Simplified */}
        <g id="cardFooterV2">
          <rect x="85" y="495" width="60" height="22" rx="4" fill="#fef9e6" stroke="#f0c840" strokeWidth="0.8" />
          <text x="115" y="510" fill="#a68a20" fontSize="10" fontWeight="600" fontFamily="Inter, sans-serif" textAnchor="middle">MEDIUM</text>
          
          <text x="85" y="548" fill="#888" fontSize="10" fontFamily="Inter, sans-serif">
            <tspan fontWeight="600" fill="#555">Course:</tspan> BMS111   
            <tspan fontWeight="600" fill="#555" dx="20">Lecture:</tspan> Vitamins
          </text>
        </g>
      </g>

      {/* Stats Panel - Better spacing, with Friends Ranking */}
      <g id="statsPanelV2" filter="url(#statsShadowV2)" className="stats-v2-float">
        <rect x="535" y="60" width="210" height="500" rx="16" fill="white" />
        <rect x="535" y="60" width="210" height="500" rx="16" stroke="#e5eaea" strokeWidth="1" fill="none" />

        {/* Stats Header */}
        <text x="640" y="100" fill="#055056" fontSize="16" fontWeight="700" fontFamily="Plus Jakarta Sans, sans-serif" textAnchor="middle">Your Stats</text>
        <line x1="560" y1="120" x2="720" y2="120" stroke="#e8ecec" strokeWidth="1" />

        {/* Accuracy Ring */}
        <g id="progressRingV2" transform="translate(640, 180)" className="ring-v2-draw">
          <circle r="45" fill="#f5faf8" />
          <circle r="38" fill="none" stroke="#e5f0ed" strokeWidth="10" />
          <circle
            r="38"
            fill="none"
            stroke="url(#successGradientV2)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray="239"
            strokeDashoffset="52"
            transform="rotate(-90)"
            className="progress-v2-animate"
          />
          <text y="5" fill="#055056" fontSize="24" fontWeight="700" fontFamily="Inter, sans-serif" textAnchor="middle">78%</text>
          <text y="22" fill="#888" fontSize="10" fontFamily="Inter, sans-serif" textAnchor="middle">Accuracy</text>
        </g>

        {/* Streak Indicator */}
        <g id="streakIconV2" transform="translate(560, 250)" className="streak-v2-glow">
          <rect width="160" height="48" rx="10" fill="#fff8f0" stroke="#f5a623" strokeWidth="1.2" />
          {/* Flame icon */}
          <g transform="translate(22, 24)">
            <path d="M0 10 C0 5 5 2 5 -3 C7 2 10 5 10 10 C10 15 5 18 5 18 C5 18 0 15 0 10Z" fill="#f5a623" />
            <path d="M3 11 C3 8 5 6 5 3 C6 6 8 8 8 11 C8 14 5 16 5 16 C5 16 3 14 3 11Z" fill="#ffd93d" />
          </g>
          <text x="50" y="28" fill="#b8860b" fontSize="18" fontWeight="700" fontFamily="Inter, sans-serif">7 Days</text>
          <text x="120" y="28" fill="#d4a54a" fontSize="12" fontFamily="Inter, sans-serif">Streak!</text>
        </g>

        {/* Donut Chart - Topic Distribution */}
        <g id="donutChartV2" transform="translate(640, 370)" className="donut-v2-spin">
          <circle r="36" fill="none" stroke="#0CA5B7" strokeWidth="14" strokeDasharray="56 170" transform="rotate(-90)" />
          <circle r="36" fill="none" stroke="#67D1B5" strokeWidth="14" strokeDasharray="45 181" transform="rotate(10)" />
          <circle r="36" fill="none" stroke="#C94678" strokeWidth="14" strokeDasharray="32 194" transform="rotate(80)" />
          <circle r="36" fill="none" stroke="#D8D8D8" strokeWidth="14" strokeDasharray="22 204" transform="rotate(137)" />
          <circle r="20" fill="white" />
        </g>

        {/* Legend */}
        <g id="chartLegendV2" transform="translate(560, 428)">
          <circle cx="12" cy="6" r="5" fill="#0CA5B7" />
          <text x="24" y="10" fill="#555" fontSize="10" fontFamily="Inter, sans-serif">Cardio</text>
          
          <circle cx="80" cy="6" r="5" fill="#67D1B5" />
          <text x="92" y="10" fill="#555" fontSize="10" fontFamily="Inter, sans-serif">Neuro</text>
          
          <circle cx="145" cy="6" r="5" fill="#C94678" />
          <text x="157" y="10" fill="#555" fontSize="10" fontFamily="Inter, sans-serif">Pharma</text>
        </g>

        {/* Friends Ranking Section */}
        <g id="friendsRanking" transform="translate(555, 455)">
          <line x1="5" y1="0" x2="165" y2="0" stroke="#e8ecec" strokeWidth="1" />
          <text x="85" y="22" fill="#055056" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif" textAnchor="middle">Friends Leaderboard</text>
          
          {/* Friend 1 - You (highlighted) */}
          <g transform="translate(10, 35)" className="friend-v2-1">
            <rect width="150" height="28" rx="6" fill="#e8faf5" stroke="#67D1B5" strokeWidth="1" />
            <circle cx="20" cy="14" r="10" fill="#0CA5B7" />
            <text x="20" y="18" fill="white" fontSize="9" fontWeight="700" fontFamily="Inter, sans-serif" textAnchor="middle">Y</text>
            <text x="40" y="18" fill="#055056" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">You</text>
            <text x="130" y="18" fill="#67D1B5" fontSize="11" fontWeight="700" fontFamily="Inter, sans-serif" textAnchor="end">78%</text>
          </g>
          
          {/* Friend 2 */}
          <g transform="translate(10, 68)" className="friend-v2-2">
            <rect width="150" height="28" rx="6" fill="#f8f9f9" stroke="#e5eaea" strokeWidth="1" />
            <circle cx="20" cy="14" r="10" fill="#C94678" />
            <text x="20" y="18" fill="white" fontSize="9" fontWeight="700" fontFamily="Inter, sans-serif" textAnchor="middle">S</text>
            <text x="40" y="18" fill="#555" fontSize="11" fontFamily="Inter, sans-serif">Sarah</text>
            <text x="130" y="18" fill="#888" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif" textAnchor="end">72%</text>
          </g>
          
          {/* Friend 3 */}
          <g transform="translate(10, 101)" className="friend-v2-3">
            <rect width="150" height="28" rx="6" fill="#f8f9f9" stroke="#e5eaea" strokeWidth="1" />
            <circle cx="20" cy="14" r="10" fill="#67D1B5" />
            <text x="20" y="18" fill="white" fontSize="9" fontWeight="700" fontFamily="Inter, sans-serif" textAnchor="middle">M</text>
            <text x="40" y="18" fill="#555" fontSize="11" fontFamily="Inter, sans-serif">Mike</text>
            <text x="130" y="18" fill="#888" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif" textAnchor="end">68%</text>
          </g>
        </g>
      </g>

      {/* CSS Animations */}
      <style>
        {`
          .mcq-v2-animated .card-v2-float {
            animation: cardFloatV2 5s ease-in-out infinite;
          }
          
          .mcq-v2-animated .stats-v2-float {
            animation: statsFloatV2 6s ease-in-out infinite;
            animation-delay: 0.3s;
          }
          
          .mcq-v2-animated .correct-v2-pulse {
            animation: correctPulseV2 2.5s ease-in-out infinite;
          }
          
          .mcq-v2-animated .wrong-v2-shake {
            animation: wrongShakeV2 5s ease-in-out infinite;
          }
          
          .mcq-v2-animated .explanation-v2-slide {
            animation: explanationSlideV2 3s ease-in-out infinite;
          }
          
          .mcq-v2-animated .explanation-v2-wrong {
            animation: explanationSlideV2 3.5s ease-in-out infinite;
            animation-delay: 0.5s;
          }
          
          .mcq-v2-animated .ring-v2-draw .progress-v2-animate {
            animation: drawRingV2 2.5s ease-out forwards, ringPulseV2 4s ease-in-out infinite 2.5s;
          }
          
          .mcq-v2-animated .streak-v2-glow {
            animation: streakGlowV2 2.5s ease-in-out infinite;
          }
          
          .mcq-v2-animated .donut-v2-spin {
            animation: donutSpinV2 25s linear infinite;
          }
          
          /* Star animations */
          .mcq-v2-animated .star-v2-1 { animation: starFloatV2a 4s ease-in-out infinite; }
          .mcq-v2-animated .star-v2-2 { animation: starFloatV2b 5s ease-in-out infinite 0.3s; }
          .mcq-v2-animated .star-v2-3 { animation: starFloatV2c 4.5s ease-in-out infinite 0.6s; }
          .mcq-v2-animated .star-v2-4 { animation: starFloatV2a 5.5s ease-in-out infinite 0.2s; }
          .mcq-v2-animated .star-v2-5 { animation: starFloatV2b 4s ease-in-out infinite 0.5s; }
          .mcq-v2-animated .star-v2-6 { animation: starFloatV2c 5s ease-in-out infinite 0.8s; }
          .mcq-v2-animated .star-v2-7 { animation: starFloatV2a 4.2s ease-in-out infinite 1s; }
          .mcq-v2-animated .star-v2-8 { animation: starFloatV2b 5.2s ease-in-out infinite 0.4s; }
          
          /* Shape animations */
          .mcq-v2-animated .shape-v2-1 { animation: shapeFloatV2 6s ease-in-out infinite; }
          .mcq-v2-animated .shape-v2-2 { animation: shapeFloatV2 7s ease-in-out infinite 0.5s; }
          .mcq-v2-animated .shape-v2-3 { animation: shapeFloatV2 5.5s ease-in-out infinite 1s; }
          
          /* Friend animations */
          .mcq-v2-animated .friend-v2-1 { animation: friendPopV2 0.5s ease-out forwards, friendGlowV2 3s ease-in-out infinite 0.5s; }
          .mcq-v2-animated .friend-v2-2 { animation: friendPopV2 0.5s ease-out 0.15s forwards; opacity: 0; }
          .mcq-v2-animated .friend-v2-3 { animation: friendPopV2 0.5s ease-out 0.3s forwards; opacity: 0; }
          
          @keyframes cardFloatV2 {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
          
          @keyframes statsFloatV2 {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
          }
          
          @keyframes correctPulseV2 {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.92; }
          }
          
          @keyframes wrongShakeV2 {
            0%, 8%, 100% { transform: translateX(0); }
            2% { transform: translateX(-2px); }
            4% { transform: translateX(2px); }
            6% { transform: translateX(-1px); }
          }
          
          @keyframes explanationSlideV2 {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.95; }
          }
          
          @keyframes drawRingV2 {
            0% { stroke-dashoffset: 239; }
            100% { stroke-dashoffset: 52; }
          }
          
          @keyframes ringPulseV2 {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.9; }
          }
          
          @keyframes streakGlowV2 {
            0%, 100% { opacity: 1; filter: brightness(1); }
            50% { opacity: 0.95; filter: brightness(1.05); }
          }
          
          @keyframes donutSpinV2 {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @keyframes starFloatV2a {
            0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.35; }
            50% { transform: translate(3px, -5px) rotate(10deg); opacity: 0.5; }
          }
          
          @keyframes starFloatV2b {
            0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.3; }
            50% { transform: translate(-4px, -3px) rotate(-8deg); opacity: 0.45; }
          }
          
          @keyframes starFloatV2c {
            0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.25; }
            50% { transform: translate(2px, 4px) rotate(12deg); opacity: 0.4; }
          }
          
          @keyframes shapeFloatV2 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(3px, -4px) scale(1.05); }
          }
          
          @keyframes friendPopV2 {
            0% { opacity: 0; transform: translateY(8px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes friendGlowV2 {
            0%, 100% { filter: brightness(1); }
            50% { filter: brightness(1.02); }
          }
          
          .mcq-v2-animated .option-v2-hover:hover {
            filter: brightness(0.98);
          }
        `}
      </style>
    </svg>
  );
};

export default MCQIllustrationV2;
