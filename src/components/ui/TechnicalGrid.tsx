"use client";

import React from 'react';

export const TechnicalGrid = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none opacity-[0.03]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 2px, transparent 2px),
            linear-gradient(to bottom, #ffffff 2px, transparent 2px)
          `,
          backgroundSize: '200px 200px'
        }}
      />
      {/* Decorative coordinate markers */}
      <div className="absolute top-10 left-10 font-mono text-[10px] text-white">40.7128° N, 74.0060° W</div>
      <div className="absolute bottom-10 right-10 font-mono text-[10px] text-white tracking-widest uppercase">Cortical Mapping System v0.4.2</div>
    </div>
  );
};
