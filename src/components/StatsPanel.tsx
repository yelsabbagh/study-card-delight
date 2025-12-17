import React from 'react';

interface StatsPanelProps {
  className?: string;
  animated?: boolean;
}

const StatsPanel: React.FC<StatsPanelProps> = ({ className = '', animated = true }) => {
  const animationClass = animated ? 'stats-panel-animated' : '';
  
  return (
    <svg
      viewBox="0 0 240 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${animationClass}`}
      role="img"
      aria-label="Stats Panel with Leaderboard"
    >
      <defs>
        <linearGradient id="statsBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="#f8fafa" />
        </linearGradient>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f7d774" />
          <stop offset="100%" stopColor="#d4a828" />
        </linearGradient>
        <linearGradient id="silverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c0c0c0" />
          <stop offset="100%" stopColor="#8a8a8a" />
        </linearGradient>
        <linearGradient id="bronzeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8a96a" />
          <stop offset="100%" stopColor="#b07840" />
        </linearGradient>
        <linearGradient id="successGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#67D1B5" />
          <stop offset="100%" stopColor="#4cb89a" />
        </linearGradient>
        <filter id="panelShadow" x="-10%" y="-5%" width="120%" height="115%">
          <feDropShadow dx="0" dy="6" stdDeviation="12" floodColor="#055056" floodOpacity="0.1" />
        </filter>
      </defs>

      {/* Panel Background */}
      <g filter="url(#panelShadow)" className="panel-float">
        <rect x="10" y="10" width="220" height="400" rx="16" fill="url(#statsBgGrad)" />
        <rect x="10" y="10" width="220" height="400" rx="16" stroke="#e5eaea" strokeWidth="1" fill="none" />
      </g>

      {/* Header */}
      <text x="120" y="50" fill="#055056" fontSize="16" fontWeight="700" fontFamily="Inter, sans-serif" textAnchor="middle">Your Stats</text>
      <line x1="30" y1="68" x2="210" y2="68" stroke="#e8ecec" strokeWidth="1" />

      {/* Accuracy Ring */}
      <g transform="translate(120, 120)" className="ring-draw">
        <circle r="40" fill="#f5faf8" />
        <circle r="34" fill="none" stroke="#e5f0ed" strokeWidth="10" />
        <circle
          r="34"
          fill="none"
          stroke="url(#successGrad)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray="214"
          strokeDashoffset="11"
          transform="rotate(-90)"
          className="progress-ring"
        />
        <text y="5" fill="#055056" fontSize="22" fontWeight="700" fontFamily="Inter, sans-serif" textAnchor="middle">95%</text>
        <text y="22" fill="#888" fontSize="10" fontFamily="Inter, sans-serif" textAnchor="middle">Accuracy</text>
      </g>

      {/* Leaderboard Title */}
      <text x="120" y="190" fill="#055056" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif" textAnchor="middle">Leaderboard</text>

      {/* 1st - Ahmed (You) - Gold with Crown */}
      <g transform="translate(25, 202)" className="friend-1">
        <rect width="190" height="32" rx="8" fill="#fef9e6" stroke="#f0c840" strokeWidth="1.5" />
        {/* Crown */}
        <g transform="translate(8, 6)">
          <path d="M2 14L6 6L10 10L14 6L18 14H2Z" fill="#f0c840" />
          <rect x="2" y="14" width="16" height="4" rx="1" fill="#d4a828" />
        </g>
        <circle cx="44" cy="16" r="11" fill="url(#goldGrad)" />
        <text x="44" y="20" fill="white" fontSize="10" fontWeight="700" fontFamily="Inter, sans-serif" textAnchor="middle">A</text>
        <text x="62" y="19" fill="#055056" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">Ahmed (You)</text>
        <text x="178" y="19" fill="#d4a828" fontSize="11" fontWeight="700" fontFamily="Inter, sans-serif" textAnchor="end">95%</text>
      </g>

      {/* 2nd - Sara - Silver with Medal */}
      <g transform="translate(25, 240)" className="friend-2">
        <rect width="190" height="32" rx="8" fill="#f5f7f9" stroke="#a8b5c4" strokeWidth="1.2" />
        {/* Medal */}
        <g transform="translate(10, 5)">
          <rect x="4" y="0" width="6" height="7" fill="#C94678" rx="1" />
          <circle cx="7" cy="14" r="8" fill="url(#silverGrad)" />
          <text x="7" y="18" fill="white" fontSize="9" fontWeight="700" fontFamily="Inter, sans-serif" textAnchor="middle">2</text>
        </g>
        <circle cx="44" cy="16" r="11" fill="#a8b5c4" />
        <text x="44" y="20" fill="white" fontSize="10" fontWeight="700" fontFamily="Inter, sans-serif" textAnchor="middle">S</text>
        <text x="62" y="19" fill="#555" fontSize="11" fontWeight="500" fontFamily="Inter, sans-serif">Sara</text>
        <text x="178" y="19" fill="#7a8a9a" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif" textAnchor="end">88%</text>
      </g>

      {/* 3rd - Ali - Bronze with Medal */}
      <g transform="translate(25, 278)" className="friend-3">
        <rect width="190" height="32" rx="8" fill="#fdf8f3" stroke="#cd8c52" strokeWidth="1.2" />
        {/* Medal */}
        <g transform="translate(10, 5)">
          <rect x="4" y="0" width="6" height="7" fill="#0CA5B7" rx="1" />
          <circle cx="7" cy="14" r="8" fill="url(#bronzeGrad)" />
          <text x="7" y="18" fill="white" fontSize="9" fontWeight="700" fontFamily="Inter, sans-serif" textAnchor="middle">3</text>
        </g>
        <circle cx="44" cy="16" r="11" fill="#cd8c52" />
        <text x="44" y="20" fill="white" fontSize="10" fontWeight="700" fontFamily="Inter, sans-serif" textAnchor="middle">A</text>
        <text x="62" y="19" fill="#555" fontSize="11" fontWeight="500" fontFamily="Inter, sans-serif">Ali</text>
        <text x="178" y="19" fill="#b07840" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif" textAnchor="end">82%</text>
      </g>

      {/* 4th - Shahd - Normal */}
      <g transform="translate(25, 316)" className="friend-4">
        <rect width="190" height="32" rx="8" fill="#f8f9f9" stroke="#e5eaea" strokeWidth="1" />
        <text x="16" y="20" fill="#888" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">4</text>
        <circle cx="44" cy="16" r="11" fill="#C94678" />
        <text x="44" y="20" fill="white" fontSize="10" fontWeight="700" fontFamily="Inter, sans-serif" textAnchor="middle">S</text>
        <text x="62" y="19" fill="#666" fontSize="11" fontFamily="Inter, sans-serif">Shahd</text>
        <text x="178" y="19" fill="#888" fontSize="11" fontWeight="500" fontFamily="Inter, sans-serif" textAnchor="end">76%</text>
      </g>

      {/* 5th - Omar - Normal */}
      <g transform="translate(25, 354)" className="friend-5">
        <rect width="190" height="32" rx="8" fill="#f8f9f9" stroke="#e5eaea" strokeWidth="1" />
        <text x="16" y="20" fill="#888" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">5</text>
        <circle cx="44" cy="16" r="11" fill="#67D1B5" />
        <text x="44" y="20" fill="white" fontSize="10" fontWeight="700" fontFamily="Inter, sans-serif" textAnchor="middle">O</text>
        <text x="62" y="19" fill="#666" fontSize="11" fontFamily="Inter, sans-serif">Omar</text>
        <text x="178" y="19" fill="#888" fontSize="11" fontWeight="500" fontFamily="Inter, sans-serif" textAnchor="end">70%</text>
      </g>

      {/* CSS Animations */}
      <style>
        {`
          .stats-panel-animated .panel-float {
            animation: panelFloat 5s ease-in-out infinite;
          }
          
          .stats-panel-animated .ring-draw .progress-ring {
            animation: drawRing 2s ease-out forwards, ringPulse 4s ease-in-out infinite 2s;
          }
          
          .stats-panel-animated .friend-1 { 
            animation: friendPop 0.5s ease-out forwards, friendGlow 3s ease-in-out infinite 0.5s; 
          }
          .stats-panel-animated .friend-2 { 
            animation: friendPop 0.5s ease-out 0.1s forwards, friendShimmer 4s ease-in-out infinite 0.6s; 
            opacity: 0; 
          }
          .stats-panel-animated .friend-3 { 
            animation: friendPop 0.5s ease-out 0.2s forwards, friendShimmer 4.5s ease-in-out infinite 0.7s; 
            opacity: 0; 
          }
          .stats-panel-animated .friend-4 { 
            animation: friendPop 0.5s ease-out 0.3s forwards; 
            opacity: 0; 
          }
          .stats-panel-animated .friend-5 { 
            animation: friendPop 0.5s ease-out 0.4s forwards; 
            opacity: 0; 
          }
          
          @keyframes panelFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
          }
          
          @keyframes drawRing {
            0% { stroke-dashoffset: 214; }
            100% { stroke-dashoffset: 11; }
          }
          
          @keyframes ringPulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.9; }
          }
          
          @keyframes friendPop {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes friendGlow {
            0%, 100% { filter: brightness(1); }
            50% { filter: brightness(1.05); }
          }
          
          @keyframes friendShimmer {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.92; }
          }
        `}
      </style>
    </svg>
  );
};

export default StatsPanel;
