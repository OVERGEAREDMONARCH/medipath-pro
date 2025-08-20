import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative">
        <svg className="w-24 h-24 md:w-32 md:h-32" width={240} height={240} viewBox="0 0 240 240">
          <circle 
            className="animate-[ringA_2s_linear_infinite]" 
            cx={120} 
            cy={120} 
            r={105} 
            fill="none" 
            stroke="hsl(var(--primary))" 
            strokeWidth={20} 
            strokeDasharray="0 660" 
            strokeDashoffset={-330} 
            strokeLinecap="round" 
          />
          <circle 
            className="animate-[ringB_2s_linear_infinite]" 
            cx={120} 
            cy={120} 
            r={35} 
            fill="none" 
            stroke="hsl(var(--secondary))" 
            strokeWidth={20} 
            strokeDasharray="0 220" 
            strokeDashoffset={-110} 
            strokeLinecap="round" 
          />
          <circle 
            className="animate-[ringC_2s_linear_infinite]" 
            cx={85} 
            cy={120} 
            r={70} 
            fill="none" 
            stroke="hsl(var(--accent))" 
            strokeWidth={20} 
            strokeDasharray="0 440" 
            strokeLinecap="round" 
          />
          <circle 
            className="animate-[ringD_2s_linear_infinite]" 
            cx={155} 
            cy={120} 
            r={70} 
            fill="none" 
            stroke="hsl(var(--primary))" 
            strokeWidth={20} 
            strokeDasharray="0 440" 
            strokeLinecap="round" 
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-lg font-semibold text-foreground mb-2">MediConnect</div>
            <div className="text-sm text-muted-foreground">Loading...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;