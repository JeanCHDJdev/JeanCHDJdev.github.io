
import React from 'react';

interface StandardButtonProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
}

const StandardButton = ({ 
  children = "Launch Mission", 
  onClick, 
  className = "",
  disabled = false 
}: StandardButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative overflow-hidden
        px-8 py-4 
        bg-transparent text-white
        border border-white
        font-medium text-lg
        transition-all duration-300 ease-out
        disabled:opacity-50 disabled:cursor-not-allowed
        group
        ${className}
      `}
    >
      {/* Sliding Background Image */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-space5 via-purple-900 to-blue-900 
                        transform -translate-x-full group-hover:translate-x-0
                        transition-transform duration-700 ease-out
                        bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cdefs%3E%3Cpattern id=%22stars%22 patternUnits=%22userSpaceOnUse%22 width=%2210%22 height=%2210%22%3E%3Ccircle cx=%222%22 cy=%222%22 r=%220.5%22 fill=%22white%22 opacity=%220.3%22/%3E%3Ccircle cx=%227%22 cy=%227%22 r=%220.3%22 fill=%22white%22 opacity=%220.5%22/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=%22100%22 height=%22100%22 fill=%22url(%23stars)%22/%3E%3C/svg%3E')]">
        </div>
      </div>

      {/* Right Fade Overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/60 
                        transform translate-x-full group-hover:translate-x-0
                        transition-transform duration-700 ease-out delay-100">
        </div>
      </div>

      <span className="relative z-10 font-semibold tracking-wide">
        {children}
      </span>
    </button>
  );
};

export default StandardButton;