import React from 'react';

export const Radar: React.FC = () => {
  return (
    <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-radar bg-navy-800 bg-opacity-50 overflow-hidden shadow-[0_0_15px_rgba(100,255,218,0.3)]">
      {/* Grid Lines */}
      <div className="absolute inset-0 border border-radar-dim rounded-full scale-75"></div>
      <div className="absolute inset-0 border border-radar-dim rounded-full scale-50"></div>
      <div className="absolute inset-0 border border-radar-dim rounded-full scale-25"></div>
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-radar-dim"></div>
      <div className="absolute left-0 right-0 top-1/2 h-px bg-radar-dim"></div>

      {/* Sweeping Hand */}
      <div className="absolute inset-0 animate-spin-slow origin-center">
        <div className="w-1/2 h-1/2 bg-gradient-to-l from-radar-glow to-transparent opacity-40 ml-auto border-b border-radar"></div>
      </div>

      {/* Blips */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-alert rounded-full animate-pulse opacity-80"></div>
      <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping-slow opacity-60"></div>
    </div>
  );
};