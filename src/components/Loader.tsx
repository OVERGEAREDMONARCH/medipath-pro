import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center space-y-4">
        <svg className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40" viewBox="0 0 240 240">
          <circle 
            className="loader-ring-a" 
            cx={120} 
            cy={120} 
            r={105} 
            fill="none" 
            stroke="currentColor" 
            strokeWidth={20} 
            strokeDasharray="0 660" 
            strokeDashoffset={-330} 
            strokeLinecap="round" 
          />
          <circle 
            className="loader-ring-b" 
            cx={120} 
            cy={120} 
            r={35} 
            fill="none" 
            stroke="currentColor" 
            strokeWidth={20} 
            strokeDasharray="0 220" 
            strokeDashoffset={-110} 
            strokeLinecap="round" 
          />
          <circle 
            className="loader-ring-c" 
            cx={85} 
            cy={120} 
            r={70} 
            fill="none" 
            stroke="currentColor" 
            strokeWidth={20} 
            strokeDasharray="0 440" 
            strokeLinecap="round" 
          />
          <circle 
            className="loader-ring-d" 
            cx={155} 
            cy={120} 
            r={70} 
            fill="none" 
            stroke="currentColor" 
            strokeWidth={20} 
            strokeDasharray="0 440" 
            strokeLinecap="round" 
          />
        </svg>
        <p className="text-muted-foreground font-medium">Loading MediConnect...</p>
      </div>
    </div>
  );
};

export default Loader;