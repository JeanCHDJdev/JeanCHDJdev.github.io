"use client";
import React, { useState } from 'react';

interface TextOverlayImageProps {
  children: React.ReactNode;
  imageUrl: string;
  imageAlt?: string;
  imageWidth?: number;
  mobileImageWidth?: number;
  className?: string;
}

const TextOverlayImage: React.FC<TextOverlayImageProps> = ({
  children,
  imageUrl,
  imageAlt = 'Image',
  imageWidth = 100,
  mobileImageWidth = 100,
  className = '',
}) => {
  const [isActive, setIsActive] = useState(false);
  
  const clampedImageWidth = Math.max(10, Math.min(100, imageWidth));
  const clampedMobileImageWidth = Math.max(10, Math.min(100, mobileImageWidth));

  return (
    <div className={`w-full flex justify-center ${className}`}>
      {/* Mobile Layout */}
      <div 
        className="md:hidden relative overflow-hidden rounded-lg cursor-pointer group"
        style={{ width: `${clampedMobileImageWidth}%` }}
      >
        {/* Image */}
        <img
          src={imageUrl}
          alt={imageAlt}
          className={`w-full h-auto object-cover transition-all duration-500 ease-out transform
            ${isActive 
              ? 'brightness-50 contrast-110 scale-105' 
              : 'brightness-75 contrast-100 scale-100'
            }
            group-hover:brightness-50 group-hover:contrast-110 group-hover:scale-105
          `}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          onClick={() => setIsActive(!isActive)}
        />
        
        {/* Content Overlay */}
        <div className={`
          absolute inset-0 flex justify-center items-center p-4
          transition-all duration-500 ease-out pointer-events-none
          ${isActive 
            ? 'brightness-125 scale-105 drop-shadow-2xl' 
            : 'brightness-100 scale-100 drop-shadow-lg'
          }
          group-hover:brightness-125 group-hover:scale-105 group-hover:drop-shadow-2xl
        `}>
          <div className="text-center max-w-full">
            {children}
          </div>
        </div>
        
        {/* Animated border effect */}
        <div className={`
          absolute inset-0 rounded-lg border-2 transition-all duration-500 ease-out
          ${isActive 
            ? 'border-white/50 shadow-lg shadow-white/25' 
            : 'border-transparent'
          }
          group-hover:border-white/50 group-hover:shadow-lg group-hover:shadow-white/25
        `} />
      </div>

      {/* Desktop Layout */}
      <div 
        className="hidden md:block relative overflow-hidden rounded-lg cursor-pointer group"
        style={{ width: `${clampedImageWidth}%` }}
      >
        {/* Image */}
        <img
          src={imageUrl}
          alt={imageAlt}
          className={`w-full h-auto object-cover transition-all duration-500 ease-out transform
            ${isActive 
              ? 'brightness-50 contrast-110 scale-105' 
              : 'brightness-75 contrast-100 scale-100'
            }
            group-hover:brightness-50 group-hover:contrast-110 group-hover:scale-105
          `}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          onClick={() => setIsActive(!isActive)}
        />
        
        {/* Content Overlay */}
        <div className={`
          absolute inset-0 flex justify-center items-center p-4 md:p-8
          transition-all duration-500 ease-out pointer-events-none
          ${isActive 
            ? 'brightness-125 scale-105 drop-shadow-2xl' 
            : 'brightness-100 scale-100 drop-shadow-lg'
          }
          group-hover:brightness-125 group-hover:scale-105 group-hover:drop-shadow-2xl
        `}>
          <div className="text-center max-w-full">
            {children}
          </div>
        </div>
        
        {/* Animated border effect */}
        <div className={`
          absolute inset-0 rounded-lg border-2 transition-all duration-500 ease-out
          ${isActive 
            ? 'border-white/50 shadow-lg shadow-white/25' 
            : 'border-transparent'
          }
          group-hover:border-white/50 group-hover:shadow-lg group-hover:shadow-white/25
        `} />
      </div>
    </div>
  );
};

export default TextOverlayImage;