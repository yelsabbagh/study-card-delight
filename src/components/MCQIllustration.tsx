import React from 'react';

interface MCQIllustrationProps {
  className?: string;
  animated?: boolean;
}

const MCQIllustration: React.FC<MCQIllustrationProps> = ({ className = '', animated = true }) => {
  const animationClass = animated ? 'mcq-animated' : '';
  
  return (
    <svg
      viewBox="0 0 820 580"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${animationClass}`}
      role="img"
      aria-label="Medical MCQ Quiz Interface Illustration"
    >
      <defs>
        {/* Gradients */}
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8fafa" />
          <stop offset="100%" stopColor="#e8f4f4" />
        </linearGradient>
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0CA5B7" />
          <stop offset="100%" stopColor="#055056" />
        </linearGradient>
        <linearGradient id="successGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#67D1B5" />
          <stop offset="100%" stopColor="#4cb89a" />
        </linearGradient>
        
        {/* Shadows */}
        <filter id="cardShadow" x="-10%" y="-5%" width="120%" height="115%">
          <feDropShadow dx="0" dy="8" stdDeviation="16" floodColor="#055056" floodOpacity="0.06" />
        </filter>
        <filter id="statsShadow" x="-15%" y="-10%" width="130%" height="125%">
          <feDropShadow dx="0" dy="4" stdDeviation="12" floodColor="#055056" floodOpacity="0.05" />
        </filter>
        
        {/* Star symbol */}
        <symbol id="star" viewBox="0 0 24 24">
          <path d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z" />
        </symbol>
      </defs>

      {/* Background */}
      <g id="background">
        <rect width="820" height="580" fill="url(#bgGradient)" />
        
        {/* Subtle dot pattern */}
        <g opacity="0.04">
          {[...Array(15)].map((_, row) => (
            [...Array(20)].map((_, col) => (
              <circle key={`dot-${row}-${col}`} cx={40 + col * 40} cy={30 + row * 40} r="1.5" fill="#055056" />
            ))
          ))}
        </g>
      </g>

      {/* Floating Stars Around Stats */}
      <g id="floatingStars">
        <use href="#star" x="570" y="70" width="14" height="14" fill="#0CA5B7" opacity="0.3" className="star-float-1" />
        <use href="#star" x="750" y="120" width="10" height="10" fill="#67D1B5" opacity="0.25" className="star-float-2" />
        <use href="#star" x="780" y="280" width="12" height="12" fill="#C94678" opacity="0.2" className="star-float-3" />
        <use href="#star" x="560" y="380" width="8" height="8" fill="#0CA5B7" opacity="0.3" className="star-float-4" />
        <use href="#star" x="770" y="420" width="11" height="11" fill="#67D1B5" opacity="0.25" className="star-float-5" />
        <use href="#star" x="550" y="200" width="9" height="9" fill="#055056" opacity="0.15" className="star-float-6" />
      </g>

      {/* Floating Decorative Shapes */}
      <g id="floatingShapes">
        <circle cx="60" cy="100" r="20" fill="#0CA5B7" opacity="0.06" className="shape-float-1" />
        <circle cx="80" cy="480" r="25" fill="#67D1B5" opacity="0.08" className="shape-float-2" />
        <rect x="30" y="300" width="12" height="12" rx="3" fill="#C94678" opacity="0.05" transform="rotate(15 36 306)" className="shape-float-3" />
      </g>

      {/* Main MCQ Card */}
      <g id="card" filter="url(#cardShadow)" className="card-entrance">
        {/* Card Background */}
        <rect x="70" y="50" width="450" height="480" rx="12" fill="white" />
        <rect x="70" y="50" width="450" height="480" rx="12" stroke="#e8ecec" strokeWidth="1" fill="none" />
        
        {/* Card Header - ID and icons */}
        <g id="cardHeader">
          <g transform="translate(90, 75)">
            <path d="M0 4 L6 0 L12 4 L12 12 L0 12 Z" fill="none" stroke="#999" strokeWidth="1.2" />
            <text x="20" y="10" fill="#888" fontSize="12" fontFamily="Inter, sans-serif">
              ID: TdW_Xrw6
            </text>
          </g>
          
          {/* Header icons */}
          <g transform="translate(420, 70)">
            <circle cx="0" cy="8" r="8" fill="#f5f5f5" />
            <path d="M-3 8 L3 8 M0 5 L0 11" stroke="#999" strokeWidth="1.2" strokeLinecap="round" />
            
            <circle cx="28" cy="8" r="8" fill="#f5f5f5" />
            <path d="M25 5 L31 11 M31 5 L25 11" stroke="#999" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
            
            <circle cx="56" cy="8" r="8" fill="#f5f5f5" />
            <circle cx="56" cy="8" r="4" fill="none" stroke="#999" strokeWidth="1.2" />
            
            <circle cx="84" cy="8" r="8" fill="#f5f5f5" />
            <rect x="80" y="4" width="8" height="8" rx="1" fill="none" stroke="#999" strokeWidth="1.2" />
          </g>
        </g>

        {/* Question Text */}
        <g id="questionText">
          <text x="90" y="130" fill="#1a1a1a" fontSize="15" fontWeight="500" fontFamily="Inter, sans-serif">
            Which vitamin deficiency is associated with the
          </text>
          <text x="90" y="150" fill="#1a1a1a" fontSize="15" fontWeight="500" fontFamily="Inter, sans-serif">
            4 Ds: Dermatitis, Diarrhea, Dementia, and Death?
          </text>
        </g>

        {/* Answer Options */}
        <g id="answerOptions">
          {/* Option A - Neutral */}
          <g id="optionA" className="option-hover">
            <rect x="90" y="175" width="410" height="50" rx="8" fill="white" stroke="#e0e0e0" strokeWidth="1" />
            <rect x="105" y="191" width="24" height="18" rx="4" fill="#f8f8f8" stroke="#d0d0d0" strokeWidth="0.5" />
            <text x="117" y="204" fill="#666" fontSize="12" fontWeight="500" fontFamily="Inter, sans-serif" textAnchor="middle">
              A
            </text>
            <text x="145" y="205" fill="#333" fontSize="14" fontFamily="Inter, sans-serif">
              Vitamin B1 (Thiamine)
            </text>
          </g>

          {/* Option B - Correct Answer */}
          <g id="optionB" className="correct-pulse">
            <g id="correctHighlight">
              <rect x="90" y="235" width="410" height="50" rx="8" fill="#e6f9f3" stroke="#67D1B5" strokeWidth="1.5" />
              <rect x="105" y="251" width="24" height="18" rx="4" fill="#67D1B5" opacity="0.2" />
              <text x="117" y="264" fill="#2a8a70" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif" textAnchor="middle">
                B
              </text>
              <text x="145" y="265" fill="#1f6b56" fontSize="14" fontWeight="500" fontFamily="Inter, sans-serif">
                Vitamin B3 (Niacin)
              </text>
              {/* Checkmark */}
              <g transform="translate(475, 260)">
                <path d="M-5 0 L-2 3 L5 -4" stroke="#67D1B5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </g>
            </g>
          </g>

          {/* Explanation Panel - Below Option B */}
          <g id="explanationPanel" className="explanation-slide">
            <rect x="90" y="290" width="410" height="60" rx="0" fill="#f8fafa" />
            {/* Left accent bar */}
            <rect x="90" y="290" width="4" height="60" fill="#0CA5B7" />
            
            {/* Settings/gear icon */}
            <g transform="translate(110, 305)">
              <circle cx="6" cy="6" r="5" fill="none" stroke="#0CA5B7" strokeWidth="1.2" />
              <circle cx="6" cy="6" r="2" fill="#0CA5B7" />
              <g stroke="#0CA5B7" strokeWidth="1">
                <line x1="6" y1="0" x2="6" y2="2" />
                <line x1="6" y1="10" x2="6" y2="12" />
                <line x1="0" y1="6" x2="2" y2="6" />
                <line x1="10" y1="6" x2="12" y2="6" />
              </g>
            </g>
            
            <text x="130" y="315" fill="#0CA5B7" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif">
              Explanation for Option B
            </text>
            <text x="110" y="338" fill="#666" fontSize="12" fontFamily="Inter, sans-serif">
              Correct. Niacin (B3) deficiency leads to Pellagra,
            </text>
            <text x="110" y="352" fill="#666" fontSize="12" fontFamily="Inter, sans-serif">
              characterized by the 4 Ds.
            </text>
          </g>

          {/* Option C - Wrong Answer */}
          <g id="optionC" className="wrong-shake">
            <g id="wrongHighlight">
              <rect x="90" y="360" width="410" height="50" rx="8" fill="#fef2f5" stroke="#C94678" strokeWidth="1.5" />
              <rect x="105" y="376" width="24" height="18" rx="4" fill="#C94678" opacity="0.15" />
              <text x="117" y="389" fill="#C94678" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif" textAnchor="middle">
                C
              </text>
              <text x="145" y="390" fill="#a13860" fontSize="14" fontWeight="500" fontFamily="Inter, sans-serif">
                Vitamin C (Ascorbic Acid)
              </text>
              {/* X Icon */}
              <g transform="translate(475, 385)">
                <path d="M-4 -4 L4 4 M4 -4 L-4 4" stroke="#C94678" strokeWidth="2.5" strokeLinecap="round" />
              </g>
            </g>
          </g>

          {/* Option D - Neutral */}
          <g id="optionD" className="option-hover">
            <rect x="90" y="420" width="410" height="50" rx="8" fill="white" stroke="#e0e0e0" strokeWidth="1" />
            <rect x="105" y="436" width="24" height="18" rx="4" fill="#f8f8f8" stroke="#d0d0d0" strokeWidth="0.5" />
            <text x="117" y="449" fill="#666" fontSize="12" fontWeight="500" fontFamily="Inter, sans-serif" textAnchor="middle">
              D
            </text>
            <text x="145" y="450" fill="#333" fontSize="14" fontFamily="Inter, sans-serif">
              Vitamin D
            </text>
          </g>
        </g>

        {/* Card Footer */}
        <g id="cardFooter">
          {/* Difficulty badge */}
          <rect x="90" y="485" width="65" height="24" rx="4" fill="#fef9e6" stroke="#f5c518" strokeWidth="0.5" />
          <text x="122" y="501" fill="#b8860b" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif" textAnchor="middle">
            MEDIUM
          </text>
          
          {/* Like/dislike */}
          <g transform="translate(440, 490)">
            <path d="M0 8 L4 4 L8 8 L6 8 L6 14 L2 14 L2 8 Z" fill="none" stroke="#999" strokeWidth="1" />
            <text x="18" y="12" fill="#999" fontSize="12" fontFamily="Inter, sans-serif">0</text>
            <path d="M35 6 L39 10 L43 6 L41 6 L41 0 L37 0 L37 6 Z" fill="none" stroke="#999" strokeWidth="1" />
          </g>
          
          {/* Course info */}
          <text x="90" y="530" fill="#888" fontSize="11" fontFamily="Inter, sans-serif">
            <tspan fontWeight="500" fill="#555">Course:</tspan> BMS111 ✎   
            <tspan fontWeight="500" fill="#555">Lecture:</tspan> Vitamins
          </text>
        </g>
      </g>

      {/* Stats Panel */}
      <g id="statsPanel" filter="url(#statsShadow)" className="stats-entrance">
        <rect x="570" y="90" width="180" height="340" rx="14" fill="white" />
        <rect x="570" y="90" width="180" height="340" rx="14" stroke="#e8ecec" strokeWidth="1" fill="none" />

        {/* Stats Header */}
        <text x="660" y="125" fill="#055056" fontSize="15" fontWeight="700" fontFamily="Plus Jakarta Sans, sans-serif" textAnchor="middle">
          Your Stats
        </text>
        <line x1="595" y1="140" x2="725" y2="140" stroke="#e8ecec" strokeWidth="1" />

        {/* Accuracy Ring */}
        <g id="progressRing" transform="translate(660, 195)" className="ring-draw">
          <circle r="40" fill="#f8fafa" />
          <circle r="35" fill="none" stroke="#e8f0f0" strokeWidth="8" />
          <circle
            r="35"
            fill="none"
            stroke="url(#successGradient)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray="220"
            strokeDashoffset="48"
            transform="rotate(-90)"
            className="progress-animate"
          />
          <text y="5" fill="#055056" fontSize="22" fontWeight="700" fontFamily="Inter, sans-serif" textAnchor="middle">
            78%
          </text>
          <text y="22" fill="#888" fontSize="10" fontFamily="Inter, sans-serif" textAnchor="middle">
            Accuracy
          </text>
        </g>

        {/* Streak Indicator */}
        <g id="streakIcon" transform="translate(595, 260)" className="streak-glow">
          <rect width="130" height="44" rx="10" fill="#fff8f0" stroke="#f5a623" strokeWidth="1" />
          {/* Flame icon */}
          <g transform="translate(20, 22)">
            <path d="M0 10 C0 5 5 2 5 -3 C7 2 10 5 10 10 C10 15 5 18 5 18 C5 18 0 15 0 10Z" fill="#f5a623" />
            <path d="M3 11 C3 8 5 6 5 3 C6 6 8 8 8 11 C8 14 5 16 5 16 C5 16 3 14 3 11Z" fill="#ffd93d" />
          </g>
          <text x="42" y="27" fill="#b8860b" fontSize="16" fontWeight="700" fontFamily="Inter, sans-serif">
            7 Days
          </text>
          <text x="100" y="27" fill="#d4a54a" fontSize="11" fontFamily="Inter, sans-serif">
            Streak!
          </text>
        </g>

        {/* Donut Chart - Topic Distribution */}
        <g id="donutChart" transform="translate(660, 360)" className="donut-spin">
          <text x="0" y="-50" fill="#055056" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif" textAnchor="middle">
            Topics
          </text>
          {/* Donut segments */}
          <circle r="32" fill="none" stroke="#0CA5B7" strokeWidth="12" strokeDasharray="50 151" transform="rotate(-90)" />
          <circle r="32" fill="none" stroke="#67D1B5" strokeWidth="12" strokeDasharray="40 161" transform="rotate(0)" />
          <circle r="32" fill="none" stroke="#C94678" strokeWidth="12" strokeDasharray="30 171" transform="rotate(72)" />
          <circle r="32" fill="none" stroke="#D8D8D8" strokeWidth="12" strokeDasharray="20 181" transform="rotate(126)" />
          <circle r="18" fill="white" />
        </g>

        {/* Legend */}
        <g id="chartLegend" transform="translate(590, 410)">
          <circle cx="10" cy="5" r="5" fill="#0CA5B7" />
          <text x="22" y="9" fill="#555" fontSize="10" fontFamily="Inter, sans-serif">Cardio</text>
          
          <circle cx="75" cy="5" r="5" fill="#67D1B5" />
          <text x="87" y="9" fill="#555" fontSize="10" fontFamily="Inter, sans-serif">Neuro</text>
          
          <circle cx="140" cy="5" r="5" fill="#C94678" />
          <text x="152" y="9" fill="#555" fontSize="10" fontFamily="Inter, sans-serif">Pharma</text>
        </g>
      </g>

      {/* Question Counter - Below stats */}
      <g id="questionCounter" transform="translate(570, 440)" className="counter-slide">
        <rect x="0" y="0" width="180" height="36" rx="8" fill="white" stroke="#e8ecec" strokeWidth="1" />
        <rect x="12" y="12" width="156" height="6" rx="3" fill="#e8f0f0" />
        <rect x="12" y="12" width="38" height="6" rx="3" fill="url(#accentGradient)" className="progress-bar" />
        <text x="90" y="32" fill="#888" fontSize="10" fontFamily="Inter, sans-serif" textAnchor="middle">
          Question 12 / 50
        </text>
      </g>

      {/* CSS Animations embedded in SVG */}
      <style>
        {`
          .mcq-animated .card-entrance {
            animation: cardFloat 6s ease-in-out infinite;
          }
          
          .mcq-animated .stats-entrance {
            animation: statsFloat 7s ease-in-out infinite;
            animation-delay: 0.5s;
          }
          
          .mcq-animated .correct-pulse {
            animation: correctPulse 2.5s ease-in-out infinite;
          }
          
          .mcq-animated .wrong-shake {
            animation: wrongShake 4s ease-in-out infinite;
          }
          
          .mcq-animated .explanation-slide {
            animation: explanationPulse 3s ease-in-out infinite;
          }
          
          .mcq-animated .ring-draw .progress-animate {
            animation: drawRing 3s ease-out forwards, ringPulse 4s ease-in-out infinite 3s;
          }
          
          .mcq-animated .streak-glow {
            animation: streakGlow 2s ease-in-out infinite;
          }
          
          .mcq-animated .donut-spin {
            animation: donutSpin 20s linear infinite;
          }
          
          .mcq-animated .progress-bar {
            animation: progressGrow 2s ease-out forwards;
          }
          
          /* Star animations */
          .mcq-animated .star-float-1 { animation: starFloat1 4s ease-in-out infinite; }
          .mcq-animated .star-float-2 { animation: starFloat2 5s ease-in-out infinite 0.5s; }
          .mcq-animated .star-float-3 { animation: starFloat3 4.5s ease-in-out infinite 1s; }
          .mcq-animated .star-float-4 { animation: starFloat4 5.5s ease-in-out infinite 0.3s; }
          .mcq-animated .star-float-5 { animation: starFloat5 4s ease-in-out infinite 0.8s; }
          .mcq-animated .star-float-6 { animation: starFloat6 5s ease-in-out infinite 1.2s; }
          
          /* Shape animations */
          .mcq-animated .shape-float-1 { animation: shapeFloat 6s ease-in-out infinite; }
          .mcq-animated .shape-float-2 { animation: shapeFloat 7s ease-in-out infinite 0.5s; }
          .mcq-animated .shape-float-3 { animation: shapeFloat 5s ease-in-out infinite 1s; }
          
          @keyframes cardFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }
          
          @keyframes statsFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
          }
          
          @keyframes correctPulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.85; }
          }
          
          @keyframes wrongShake {
            0%, 90%, 100% { transform: translateX(0); }
            92% { transform: translateX(-2px); }
            94% { transform: translateX(2px); }
            96% { transform: translateX(-1px); }
            98% { transform: translateX(1px); }
          }
          
          @keyframes explanationPulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.9; }
          }
          
          @keyframes drawRing {
            0% { stroke-dashoffset: 220; }
            100% { stroke-dashoffset: 48; }
          }
          
          @keyframes ringPulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; }
          }
          
          @keyframes streakGlow {
            0%, 100% { opacity: 1; filter: brightness(1); }
            50% { opacity: 0.95; filter: brightness(1.05); }
          }
          
          @keyframes donutSpin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @keyframes progressGrow {
            0% { width: 0; }
            100% { width: 38px; }
          }
          
          @keyframes starFloat1 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.3; }
            50% { transform: translate(3px, -5px) rotate(10deg); opacity: 0.5; }
          }
          
          @keyframes starFloat2 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.25; }
            50% { transform: translate(-4px, -3px) rotate(-15deg); opacity: 0.4; }
          }
          
          @keyframes starFloat3 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.2; }
            50% { transform: translate(2px, -6px) rotate(20deg); opacity: 0.35; }
          }
          
          @keyframes starFloat4 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.3; }
            50% { transform: translate(-3px, -4px) rotate(-10deg); opacity: 0.45; }
          }
          
          @keyframes starFloat5 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.25; }
            50% { transform: translate(4px, -3px) rotate(15deg); opacity: 0.4; }
          }
          
          @keyframes starFloat6 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.15; }
            50% { transform: translate(-2px, -5px) rotate(-20deg); opacity: 0.3; }
          }
          
          @keyframes shapeFloat {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(0, -8px); }
          }
        `}
      </style>
    </svg>
  );
};

export default MCQIllustration;
