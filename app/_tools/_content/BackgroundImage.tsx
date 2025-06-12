import React from 'react';

interface BackgroundImageProps {
  imageUrl: string;
  children?: React.ReactNode;
  overlay?: boolean;
  heightClass?: string;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  imageUrl,
  children,
  overlay = false,
  heightClass = 'h-screen',
}) => {
  return (
    <div className={`relative w-full ${heightClass} overflow-hidden`}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      {/* Optional overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
      )}

      {/* Content - Enhanced mobile centering */}
      <div className="relative z-20 w-full h-full flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-full text-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BackgroundImage;