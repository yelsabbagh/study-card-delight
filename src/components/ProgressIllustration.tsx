import React from 'react';

interface ProgressIllustrationProps {
  className?: string;
  animated?: boolean;
}

const ProgressIllustration: React.FC<ProgressIllustrationProps> = ({ className = '', animated = true }) => {
  const animClass = animated ? 'progress-animated' : '';
  
  return (
    <svg
      viewBox="0 0 600 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${animClass}`}
      role="img"
      aria-label="Track Your Progress Dashboard Illustration"
    >
      <defs>
        {/* Gradients */}
        <linearGradient id="navyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#055056" />
          <stop offset="100%" stopColor="#033a3e" />
        </linearGradient>
        <linearGradient id="tealGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0CA5B7" />
          <stop offset="100%" stopColor="#089aa8" />
        </linearGradient>
        <linearGradient id="successGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#67D1B5" />
          <stop offset="100%" stopColor="#4cb89a" />
        </linearGradient>
        
        {/* Shadows */}
        <filter id="cardShadowP" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#055056" floodOpacity="0.08" />
        </filter>
        <filter id="smallShadow" x="-15%" y="-15%" width="130%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#055056" floodOpacity="0.06" />
        </filter>
        
        {/* Medical cross symbol */}
        <symbol id="medicalCross" viewBox="0 0 24 24">
          <rect x="8" y="2" width="8" height="20" rx="2" fill="currentColor" />
          <rect x="2" y="8" width="20" height="8" rx="2" fill="currentColor" />
        </symbol>
        
        {/* Clipboard symbol */}
        <symbol id="clipboard" viewBox="0 0 24 24">
          <rect x="4" y="4" width="16" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <rect x="8" y="2" width="8" height="4" rx="1" fill="currentColor" />
          <line x1="8" y1="10" x2="16" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="8" y1="14" x2="14" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="8" y1="18" x2="12" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </symbol>
      </defs>

      {/* Background */}
      <g id="progressBackground">
        <rect width="600" height="400" fill="#f5f8f8" rx="16" />
        
        {/* Subtle grid */}
        <g opacity="0.03">
          {[...Array(10)].map((_, i) => (
            <line key={`h-${i}`} x1="0" y1={i * 40} x2="600" y2={i * 40} stroke="#055056" strokeWidth="0.5" />
          ))}
          {[...Array(15)].map((_, i) => (
            <line key={`v-${i}`} x1={i * 40} y1="0" x2={i * 40} y2="400" stroke="#055056" strokeWidth="0.5" />
          ))}
        </g>
        
        {/* Decorative shapes */}
        <circle cx="560" cy="50" r="30" fill="#0CA5B7" opacity="0.06" className="shape-1" />
        <circle cx="40" cy="350" r="25" fill="#67D1B5" opacity="0.08" className="shape-2" />
      </g>

      {/* Medical Cross - subtle background element */}
      <g id="medicalElement" transform="translate(530, 330)" opacity="0.08">
        <use href="#medicalCross" width="40" height="40" fill="#055056" />
      </g>

      {/* Main Dashboard Container */}
      <g id="dashboardContainer" filter="url(#cardShadowP)" className="dashboard-float">
        <rect x="30" y="30" width="540" height="340" rx="16" fill="white" />
        <rect x="30" y="30" width="540" height="340" rx="16" stroke="#e0e8e8" strokeWidth="1" fill="none" />
        
        {/* Dashboard Header */}
        <g id="dashboardHeader">
          <rect x="30" y="30" width="540" height="50" rx="16" fill="url(#navyGradient)" />
          <rect x="30" y="64" width="540" height="16" fill="url(#navyGradient)" />
          
          {/* Clipboard icon in header */}
          <g transform="translate(50, 42)">
            <use href="#clipboard" width="24" height="24" color="white" opacity="0.9" />
          </g>
          
          <text x="82" y="62" fill="white" fontSize="14" fontWeight="600" fontFamily="Inter, sans-serif">
            Progress Dashboard
          </text>
          
          {/* Header stats */}
          <text x="500" y="62" fill="white" fontSize="11" fontFamily="Inter, sans-serif" textAnchor="end" opacity="0.8">
            Last 30 days
          </text>
        </g>

        {/* Accuracy Card */}
        <g id="accuracyCard" filter="url(#smallShadow)" className="card-pop">
          <rect x="50" y="100" width="160" height="120" rx="12" fill="white" stroke="#e8f0f0" strokeWidth="1" />
          
          {/* Accuracy ring */}
          <g transform="translate(130, 155)">
            <circle r="35" fill="#f8fafa" />
            <circle r="30" fill="none" stroke="#e8f0f0" strokeWidth="6" />
            <circle
              r="30"
              fill="none"
              stroke="url(#successGrad)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="188"
              strokeDashoffset="41"
              transform="rotate(-90)"
              className="accuracy-ring"
            />
            <text y="5" fill="#055056" fontSize="18" fontWeight="700" fontFamily="Inter, sans-serif" textAnchor="middle">
              78%
            </text>
          </g>
          
          <text x="70" y="118" fill="#055056" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">
            Accuracy
          </text>
          <text x="70" y="205" fill="#67D1B5" fontSize="10" fontFamily="Inter, sans-serif">
            ↑ 5% this week
          </text>
        </g>

        {/* Topic Breakdown Donut Chart */}
        <g id="topicDonut" filter="url(#smallShadow)" className="donut-pop">
          <rect x="220" y="100" width="160" height="120" rx="12" fill="white" stroke="#e8f0f0" strokeWidth="1" />
          
          <text x="240" y="118" fill="#055056" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">
            Topics
          </text>
          
          {/* Donut chart */}
          <g transform="translate(300, 160)" className="donut-rotate">
            <circle r="32" fill="none" stroke="#0CA5B7" strokeWidth="10" strokeDasharray="55 146" transform="rotate(-90)" />
            <circle r="32" fill="none" stroke="#67D1B5" strokeWidth="10" strokeDasharray="40 161" transform="rotate(-3)" />
            <circle r="32" fill="none" stroke="#C94678" strokeWidth="10" strokeDasharray="30 171" transform="rotate(69)" />
            <circle r="32" fill="none" stroke="#D8D8D8" strokeWidth="10" strokeDasharray="20 181" transform="rotate(123)" />
            <circle r="18" fill="white" />
            <text y="4" fill="#055056" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif" textAnchor="middle">
              4
            </text>
          </g>
          
          {/* Legend */}
          <g transform="translate(235, 198)">
            <circle cx="5" cy="4" r="3" fill="#0CA5B7" />
            <text x="12" y="7" fill="#666" fontSize="8" fontFamily="Inter, sans-serif">Cardio</text>
            
            <circle cx="55" cy="4" r="3" fill="#67D1B5" />
            <text x="62" y="7" fill="#666" fontSize="8" fontFamily="Inter, sans-serif">Neuro</text>
            
            <circle cx="100" cy="4" r="3" fill="#C94678" />
            <text x="107" y="7" fill="#666" fontSize="8" fontFamily="Inter, sans-serif">Pharm</text>
          </g>
        </g>

        {/* Weekly Streak Calendar */}
        <g id="streakCalendar" filter="url(#smallShadow)" className="streak-pop">
          <rect x="390" y="100" width="160" height="120" rx="12" fill="white" stroke="#e8f0f0" strokeWidth="1" />
          
          <text x="410" y="118" fill="#055056" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">
            Weekly Streak
          </text>
          
          {/* Flame icon */}
          <g transform="translate(510, 107)">
            <path d="M5 12 C5 8 8 6 8 2 C10 6 12 8 12 12 C12 16 8 18 8 18 C8 18 5 16 5 12Z" fill="#f5a623" />
            <path d="M7 12 C7 10 8 8 8 5 C9 8 10 10 10 12 C10 14 8 15 8 15 C8 15 7 14 7 12Z" fill="#ffd93d" />
          </g>
          
          {/* Week days */}
          <g transform="translate(410, 140)">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
              <g key={i} transform={`translate(${i * 20}, 0)`}>
                <text x="7" y="0" fill="#999" fontSize="8" fontFamily="Inter, sans-serif" textAnchor="middle">
                  {day}
                </text>
                <rect 
                  x="0" 
                  y="8" 
                  width="14" 
                  height="14" 
                  rx="3" 
                  fill={i < 5 ? '#67D1B5' : (i === 5 ? '#e8f0f0' : '#f8f8f8')} 
                  className={i < 5 ? `streak-day-${i}` : ''}
                />
                {i < 5 && (
                  <path 
                    d={`M${3} ${15} L${6} ${18} L${11} ${13}`} 
                    stroke="white" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    fill="none" 
                  />
                )}
              </g>
            ))}
          </g>
          
          {/* Streak count */}
          <g transform="translate(410, 180)">
            <rect width="130" height="24" rx="6" fill="#fff8f0" stroke="#f5a623" strokeWidth="0.5" />
            <text x="65" y="16" fill="#b8860b" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif" textAnchor="middle">
              🔥 5 Day Streak!
            </text>
          </g>
        </g>

        {/* Bottom Stats Row */}
        <g id="bottomStats">
          {/* Questions Completed */}
          <g transform="translate(50, 240)" className="stat-1">
            <rect width="120" height="55" rx="10" fill="#f0faf7" stroke="#67D1B5" strokeWidth="0.5" />
            <text x="60" y="25" fill="#055056" fontSize="20" fontWeight="700" fontFamily="Inter, sans-serif" textAnchor="middle">
              847
            </text>
            <text x="60" y="42" fill="#67D1B5" fontSize="9" fontFamily="Inter, sans-serif" textAnchor="middle">
              Questions Done
            </text>
          </g>
          
          {/* Study Time */}
          <g transform="translate(180, 240)" className="stat-2">
            <rect width="120" height="55" rx="10" fill="#f0f8fa" stroke="#0CA5B7" strokeWidth="0.5" />
            <text x="60" y="25" fill="#055056" fontSize="20" fontWeight="700" fontFamily="Inter, sans-serif" textAnchor="middle">
              42h
            </text>
            <text x="60" y="42" fill="#0CA5B7" fontSize="9" fontFamily="Inter, sans-serif" textAnchor="middle">
              Study Time
            </text>
          </g>
          
          {/* Weak Areas */}
          <g transform="translate(310, 240)" className="stat-3">
            <rect width="120" height="55" rx="10" fill="#fef8f5" stroke="#C94678" strokeWidth="0.5" />
            <text x="60" y="25" fill="#055056" fontSize="20" fontWeight="700" fontFamily="Inter, sans-serif" textAnchor="middle">
              3
            </text>
            <text x="60" y="42" fill="#C94678" fontSize="9" fontFamily="Inter, sans-serif" textAnchor="middle">
              Weak Areas
            </text>
          </g>
          
          {/* Improvement */}
          <g transform="translate(440, 240)" className="stat-4">
            <rect width="120" height="55" rx="10" fill="#f5f5f5" stroke="#D8D8D8" strokeWidth="0.5" />
            <text x="60" y="25" fill="#055056" fontSize="20" fontWeight="700" fontFamily="Inter, sans-serif" textAnchor="middle">
              +12%
            </text>
            <text x="60" y="42" fill="#888" fontSize="9" fontFamily="Inter, sans-serif" textAnchor="middle">
              Improvement
            </text>
          </g>
        </g>

        {/* Progress Bar at bottom */}
        <g id="overallProgress" transform="translate(50, 310)">
          <text x="0" y="0" fill="#055056" fontSize="10" fontWeight="500" fontFamily="Inter, sans-serif">
            Course Progress
          </text>
          <text x="500" y="0" fill="#888" fontSize="10" fontFamily="Inter, sans-serif" textAnchor="end">
            68% Complete
          </text>
          <rect y="10" width="510" height="8" rx="4" fill="#e8f0f0" />
          <rect y="10" width="347" height="8" rx="4" fill="url(#tealGradient)" className="progress-bar-main" />
        </g>
      </g>

      {/* CSS Animations */}
      <style>
        {`
          .progress-animated .dashboard-float {
            animation: dashboardFloat 8s ease-in-out infinite;
          }
          
          .progress-animated .card-pop {
            animation: cardPop 6s ease-in-out infinite;
          }
          
          .progress-animated .donut-pop {
            animation: cardPop 6s ease-in-out infinite 0.3s;
          }
          
          .progress-animated .streak-pop {
            animation: cardPop 6s ease-in-out infinite 0.6s;
          }
          
          .progress-animated .accuracy-ring {
            animation: drawAccuracy 2s ease-out forwards;
          }
          
          .progress-animated .donut-rotate {
            animation: slowRotate 30s linear infinite;
          }
          
          .progress-animated .progress-bar-main {
            animation: progressGrow 2.5s ease-out forwards;
          }
          
          .progress-animated .stat-1 { animation: statPop 0.5s ease-out forwards 0.5s; opacity: 0; }
          .progress-animated .stat-2 { animation: statPop 0.5s ease-out forwards 0.7s; opacity: 0; }
          .progress-animated .stat-3 { animation: statPop 0.5s ease-out forwards 0.9s; opacity: 0; }
          .progress-animated .stat-4 { animation: statPop 0.5s ease-out forwards 1.1s; opacity: 0; }
          
          .progress-animated .streak-day-0 { animation: streakPop 0.3s ease-out forwards 1.5s; opacity: 0; }
          .progress-animated .streak-day-1 { animation: streakPop 0.3s ease-out forwards 1.7s; opacity: 0; }
          .progress-animated .streak-day-2 { animation: streakPop 0.3s ease-out forwards 1.9s; opacity: 0; }
          .progress-animated .streak-day-3 { animation: streakPop 0.3s ease-out forwards 2.1s; opacity: 0; }
          .progress-animated .streak-day-4 { animation: streakPop 0.3s ease-out forwards 2.3s; opacity: 0; }
          
          .progress-animated .shape-1 { animation: shapeFloat 7s ease-in-out infinite; }
          .progress-animated .shape-2 { animation: shapeFloat 8s ease-in-out infinite 1s; }
          
          @keyframes dashboardFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
          }
          
          @keyframes cardPop {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.01); }
          }
          
          @keyframes drawAccuracy {
            0% { stroke-dashoffset: 188; }
            100% { stroke-dashoffset: 41; }
          }
          
          @keyframes slowRotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @keyframes progressGrow {
            0% { width: 0; }
            100% { width: 347px; }
          }
          
          @keyframes statPop {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes streakPop {
            0% { opacity: 0; transform: scale(0.5); }
            100% { opacity: 1; transform: scale(1); }
          }
          
          @keyframes shapeFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
        `}
      </style>
    </svg>
  );
};

export default ProgressIllustration;
