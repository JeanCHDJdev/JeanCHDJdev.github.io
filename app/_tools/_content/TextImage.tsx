import React from 'react';

interface TextImageProps {
  children: React.ReactNode;
  imageUrl: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
  imageWidth?: number; 
  mobileImageWidth?: number; // New prop for mobile image width
  className?: string;
}

const TextImage: React.FC<TextImageProps> = ({
  children,
  imageUrl,
  imageAlt = 'Image',
  imagePosition = 'right',
  imageWidth = 50, // Default to 50% (equal split)
  mobileImageWidth = 100, // Default to full width on mobile
  className = '',
}) => {
  const clampedImageWidth = Math.max(10, Math.min(90, imageWidth));
  const clampedMobileImageWidth = Math.max(10, Math.min(100, mobileImageWidth));
  const textWidth = 100 - clampedImageWidth;

  return (
    <div className={`w-full ${className}`}>
      {/* Desktop Layout */}
      <div className={`hidden md:flex items-center gap-8 ${
        imagePosition === 'left' ? 'flex-row' : 'flex-row-reverse'
      }`}>
        {/* Text */}
        <div style={{ flexBasis: `${textWidth}%`, flexShrink: 0 }}>
          <div className="text-white leading-relaxed">{children}</div>
        </div>
        
        {/* Image */}
        <div style={{ flexBasis: `${clampedImageWidth}%`, flexShrink: 0 }}>
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex flex-col md:hidden space-y-4">
        {/* Image first on mobile */}
        <div style={{ width: `${clampedMobileImageWidth}%` }} className="mx-auto">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
        
        {/* Text below on mobile */}
        <div className="w-full">
          <div className="text-base leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default TextImage;