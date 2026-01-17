import React from 'react';

interface HealthBarProps {
  current: number;
  max: number;
}

export const HealthBar: React.FC<HealthBarProps> = ({ current, max }) => {
  const percentage = Math.max(0, Math.min(100, (current / max) * 100));
  
  let colorClass = "bg-radar";
  if (percentage < 30) colorClass = "bg-alert animate-pulse-fast";
  else if (percentage < 60) colorClass = "bg-yellow-500";

  return (
    <div className="w-full max-w-md border border-radar-dim p-1 bg-navy-900">
      <div className="flex justify-between text-xs text-radar mb-1 uppercase tracking-widest">
        <span>Hull Integrity</span>
        <span>{percentage.toFixed(0)}%</span>
      </div>
      <div className="h-4 w-full bg-navy-700 relative overflow-hidden">
        {/* Grid background for bar */}
        <div className="absolute inset-0 w-full h-full opacity-20" 
             style={{backgroundImage: 'linear-gradient(90deg, transparent 95%, #000 95%)', backgroundSize: '10px 100%'}}></div>
        <div 
          className={`h-full ${colorClass} transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};