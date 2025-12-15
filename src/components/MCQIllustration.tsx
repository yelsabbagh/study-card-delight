import React from 'react';

interface MCQIllustrationProps {
  className?: string;
  animated?: boolean;
}

const MCQIllustration: React.FC<MCQIllustrationProps> = ({ className = '', animated = true }) => {
  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Medical MCQ Quiz Interface Illustration"
    >
      {/* Background Elements */}
      <g id="background">
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fafa" />
            <stop offset="100%" stopColor="#e8f4f4" />
          </linearGradient>
          <linearGradient id="cardGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#fafcfc" />
          </linearGradient>
          <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0CA5B7" />
            <stop offset="100%" stopColor="#055056" />
          </linearGradient>
          <linearGradient id="successGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#67D1B5" />
            <stop offset="100%" stopColor="#4cb89a" />
          </linearGradient>
          <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="12" floodColor="#055056" floodOpacity="0.08" />
          </filter>
          <filter id="statsShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="8" floodColor="#055056" floodOpacity="0.06" />
          </filter>
        </defs>

        {/* Background shapes - decorative */}
        <rect width="800" height="600" fill="url(#bgGradient)" />
        
        {/* Floating decorative shapes */}
        <g id="floatingShapes" className={animated ? 'animate-float' : ''}>
          <circle cx="680" cy="80" r="40" fill="#0CA5B7" opacity="0.08" />
          <circle cx="120" cy="520" r="30" fill="#67D1B5" opacity="0.1" />
          <rect x="60" y="100" width="20" height="20" rx="4" fill="#0CA5B7" opacity="0.06" transform="rotate(15 70 110)" />
          <rect x="720" cy="480" width="16" height="16" rx="3" fill="#C94678" opacity="0.06" transform="rotate(-10 728 488)" />
        </g>

        {/* Subtle grid pattern */}
        <g id="gridPattern" opacity="0.03">
          {[...Array(20)].map((_, i) => (
            <line key={`h-${i}`} x1="0" y1={i * 30} x2="800" y2={i * 30} stroke="#055056" strokeWidth="0.5" />
          ))}
          {[...Array(27)].map((_, i) => (
            <line key={`v-${i}`} x1={i * 30} y1="0" x2={i * 30} y2="600" stroke="#055056" strokeWidth="0.5" />
          ))}
        </g>
      </g>

      {/* Main MCQ Card */}
      <g id="card" filter="url(#cardShadow)">
        <rect x="80" y="60" width="440" height="480" rx="16" fill="url(#cardGradient)" />
        <rect x="80" y="60" width="440" height="480" rx="16" stroke="#e2e8e8" strokeWidth="1" fill="none" />

        {/* Card Header */}
        <g id="cardHeader">
          <rect x="80" y="60" width="440" height="60" rx="16" fill="url(#accentGradient)" />
          <rect x="80" y="104" width="440" height="16" fill="url(#accentGradient)" />
          <text x="110" y="98" fill="white" fontSize="14" fontWeight="600" fontFamily="Inter, sans-serif">
            Question 12 of 50
          </text>
          <text x="440" y="98" fill="white" fontSize="12" fontWeight="500" fontFamily="Inter, sans-serif" opacity="0.9">
            Cardiology
          </text>
        </g>

        {/* Question Text */}
        <g id="questionText">
          <text x="110" y="155" fill="#055056" fontSize="15" fontWeight="600" fontFamily="Inter, sans-serif">
            A 65-year-old patient presents with chest pain
          </text>
          <text x="110" y="175" fill="#055056" fontSize="15" fontWeight="600" fontFamily="Inter, sans-serif">
            radiating to the left arm. Which of the following
          </text>
          <text x="110" y="195" fill="#055056" fontSize="15" fontWeight="600" fontFamily="Inter, sans-serif">
            is the most appropriate initial intervention?
          </text>
        </g>

        {/* Answer Options */}
        <g id="answerOptions">
          {/* Option A - Neutral */}
          <g id="optionA">
            <rect x="100" y="220" width="400" height="44" rx="10" fill="#f5f7f7" stroke="#e2e8e8" strokeWidth="1" />
            <circle cx="126" cy="242" r="12" fill="#0CA5B7" opacity="0.1" />
            <text x="126" y="246" fill="#0CA5B7" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif" textAnchor="middle">
              A
            </text>
            <text x="150" y="246" fill="#3a5a5a" fontSize="13" fontFamily="Inter, sans-serif">
              Administer sublingual nitroglycerin
            </text>
          </g>

          {/* Option B - Wrong Answer */}
          <g id="optionB" className={animated ? 'animate-shake-subtle' : ''}>
            <g id="wrongHighlight">
              <rect x="100" y="274" width="400" height="44" rx="10" fill="#fef2f5" stroke="#C94678" strokeWidth="1.5" />
              <circle cx="126" cy="296" r="12" fill="#C94678" opacity="0.15" />
              <text x="126" y="300" fill="#C94678" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif" textAnchor="middle">
                B
              </text>
              <text x="150" y="300" fill="#a13860" fontSize="13" fontWeight="500" fontFamily="Inter, sans-serif">
                Wait for cardiac enzyme results
              </text>
              {/* X Icon */}
              <g transform="translate(470, 286)">
                <circle r="10" fill="#C94678" opacity="0.15" />
                <path d="M-4 -4 L4 4 M4 -4 L-4 4" stroke="#C94678" strokeWidth="2" strokeLinecap="round" />
              </g>
            </g>
          </g>

          {/* Option C - Correct Answer */}
          <g id="optionC" className={animated ? 'animate-pulse-gentle' : ''}>
            <g id="correctHighlight">
              <rect x="100" y="328" width="400" height="44" rx="10" fill="#eefaf6" stroke="#67D1B5" strokeWidth="1.5" />
              <circle cx="126" cy="350" r="12" fill="#67D1B5" opacity="0.2" />
              <text x="126" y="354" fill="#2a8a70" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif" textAnchor="middle">
                C
              </text>
              <text x="150" y="354" fill="#1f6b56" fontSize="13" fontWeight="500" fontFamily="Inter, sans-serif">
                Perform 12-lead ECG immediately
              </text>
              {/* Checkmark Icon */}
              <g transform="translate(470, 340)">
                <circle r="10" fill="#67D1B5" opacity="0.2" />
                <path d="M-4 0 L-1 3 L5 -3" stroke="#2a8a70" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </g>
            </g>
          </g>

          {/* Option D - Neutral */}
          <g id="optionD">
            <rect x="100" y="382" width="400" height="44" rx="10" fill="#f5f7f7" stroke="#e2e8e8" strokeWidth="1" />
            <circle cx="126" cy="404" r="12" fill="#0CA5B7" opacity="0.1" />
            <text x="126" y="408" fill="#0CA5B7" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif" textAnchor="middle">
              D
            </text>
            <text x="150" y="408" fill="#3a5a5a" fontSize="13" fontFamily="Inter, sans-serif">
              Schedule stress test for next week
            </text>
          </g>

          {/* Option E - Neutral */}
          <g id="optionE">
            <rect x="100" y="436" width="400" height="44" rx="10" fill="#f5f7f7" stroke="#e2e8e8" strokeWidth="1" />
            <circle cx="126" cy="458" r="12" fill="#0CA5B7" opacity="0.1" />
            <text x="126" y="462" fill="#0CA5B7" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif" textAnchor="middle">
              E
            </text>
            <text x="150" y="462" fill="#3a5a5a" fontSize="13" fontFamily="Inter, sans-serif">
              Start beta-blocker therapy
            </text>
          </g>
        </g>

        {/* Explanation Panel */}
        <g id="explanationPanel" className={animated ? 'animate-slide-down' : ''}>
          <rect x="100" y="490" width="400" height="40" rx="8" fill="#f0faf7" stroke="#67D1B5" strokeWidth="1" opacity="0.9" />
          <g transform="translate(116, 510)">
            <circle r="8" fill="#67D1B5" opacity="0.2" />
            <text fontSize="10" fill="#2a8a70" fontWeight="700" textAnchor="middle" y="3">i</text>
          </g>
          <text x="134" y="514" fill="#2a8a70" fontSize="11" fontWeight="500" fontFamily="Inter, sans-serif">
            Explanation: ECG is the first-line diagnostic tool...
          </text>
        </g>
      </g>

      {/* Stats Panel */}
      <g id="statsPanel" filter="url(#statsShadow)">
        <rect x="560" y="100" width="180" height="320" rx="14" fill="url(#cardGradient)" />
        <rect x="560" y="100" width="180" height="320" rx="14" stroke="#e2e8e8" strokeWidth="1" fill="none" />

        {/* Stats Header */}
        <text x="580" y="132" fill="#055056" fontSize="14" fontWeight="700" fontFamily="Plus Jakarta Sans, sans-serif">
          Your Stats
        </text>

        {/* Accuracy Ring */}
        <g id="progressRing" transform="translate(650, 185)">
          <circle r="35" fill="none" stroke="#e8f0f0" strokeWidth="6" />
          <circle
            r="35"
            fill="none"
            stroke="url(#successGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="220"
            strokeDashoffset={animated ? "48" : "48"}
            transform="rotate(-90)"
            className={animated ? 'animate-draw-progress' : ''}
          />
          <text y="5" fill="#055056" fontSize="18" fontWeight="700" fontFamily="Inter, sans-serif" textAnchor="middle">
            78%
          </text>
          <text y="18" fill="#6b8888" fontSize="9" fontFamily="Inter, sans-serif" textAnchor="middle">
            Accuracy
          </text>
        </g>

        {/* Streak Indicator */}
        <g id="streakIcon" transform="translate(580, 245)">
          <rect width="140" height="40" rx="8" fill="#fff8f0" stroke="#f5a623" strokeWidth="1" opacity="0.8" />
          {/* Flame icon */}
          <g transform="translate(18, 20)">
            <path d="M0 8 C0 4 4 2 4 -2 C6 2 8 4 8 8 C8 12 4 14 4 14 C4 14 0 12 0 8Z" fill="#f5a623" />
            <path d="M2 9 C2 7 4 6 4 4 C5 6 6 7 6 9 C6 11 4 12 4 12 C4 12 2 11 2 9Z" fill="#ffd93d" />
          </g>
          <text x="38" y="24" fill="#c47f17" fontSize="14" fontWeight="700" fontFamily="Inter, sans-serif">
            7 Days
          </text>
          <text x="90" y="24" fill="#d4a54a" fontSize="10" fontFamily="Inter, sans-serif">
            Streak!
          </text>
        </g>

        {/* Donut Chart - Topic Distribution */}
        <g id="donutChart" transform="translate(650, 335)">
          <text x="0" y="-45" fill="#055056" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif" textAnchor="middle">
            Topics
          </text>
          {/* Donut segments */}
          <circle r="28" fill="none" stroke="#0CA5B7" strokeWidth="10" strokeDasharray="44 132" transform="rotate(-90)" />
          <circle r="28" fill="none" stroke="#67D1B5" strokeWidth="10" strokeDasharray="35 141" transform="rotate(30)" />
          <circle r="28" fill="none" stroke="#C94678" strokeWidth="10" strokeDasharray="26 150" transform="rotate(125)" />
          <circle r="28" fill="none" stroke="#D8D8D8" strokeWidth="10" strokeDasharray="18 158" transform="rotate(195)" />
          <circle r="16" fill="white" />
        </g>

        {/* Legend */}
        <g id="chartLegend" transform="translate(575, 385)">
          <circle cx="8" cy="4" r="4" fill="#0CA5B7" />
          <text x="18" y="8" fill="#4a6a6a" fontSize="9" fontFamily="Inter, sans-serif">Cardio</text>
          
          <circle cx="68" cy="4" r="4" fill="#67D1B5" />
          <text x="78" y="8" fill="#4a6a6a" fontSize="9" fontFamily="Inter, sans-serif">Neuro</text>
          
          <circle cx="128" cy="4" r="4" fill="#C94678" />
          <text x="138" y="8" fill="#4a6a6a" fontSize="9" fontFamily="Inter, sans-serif">Pharma</text>
        </g>

        {/* Question Counter */}
        <g id="questionCounter" transform="translate(560, 400)">
          <rect x="15" y="5" width="150" height="8" rx="4" fill="#e8f0f0" />
          <rect x="15" y="5" width="36" height="8" rx="4" fill="url(#accentGradient)" />
          <text x="90" y="28" fill="#6b8888" fontSize="10" fontFamily="Inter, sans-serif" textAnchor="middle">
            12 / 50 Questions
          </text>
        </g>
      </g>

      {/* Floating Accent Elements */}
      <g id="accentElements">
        <circle cx="550" cy="520" r="6" fill="#0CA5B7" opacity="0.15" className={animated ? 'animate-float' : ''} />
        <circle cx="760" cy="460" r="8" fill="#67D1B5" opacity="0.12" className={animated ? 'animate-float' : ''} style={{ animationDelay: '1s' }} />
        <rect x="740" y="140" width="12" height="12" rx="2" fill="#0CA5B7" opacity="0.08" transform="rotate(20 746 146)" />
      </g>
    </svg>
  );
};

export default MCQIllustration;
