import React from 'react';

interface TextImageProps {
  text: string;
  imageUrl: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
  className?: string;
}

const TextImage: React.FC<TextImageProps> = ({
  text,
  imageUrl,
  imageAlt = 'Image',
  imagePosition = 'right',
  className = '',
}) => {
  return (
    <div className={`w-full ${className}`}>
      {/* Desktop Layout */}
      <div className={`hidden md:flex items-center gap-8 ${
        imagePosition === 'left' ? 'flex-row' : 'flex-row-reverse'
      }`}>
        {/* Text */}
        <div className="flex-1">
          <p className="text-base leading-relaxed">{text}</p>
        </div>
        
        {/* Image */}
        <div className="flex-1">
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
        <div className="w-full">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
        
        {/* Text below on mobile */}
        <div className="w-full">
          <p className="text-base leading-relaxed">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default TextImage;