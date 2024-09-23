// Desvanecer.js
import React from 'react';

const Desvanecer = ({ children }) => {
  return (
    <div className="opacity-0 translate-y-4 transition-all duration-1500 ease-in-out animate-fadeIn">
      {children}
    </div>
  );
};

export default Desvanecer;
