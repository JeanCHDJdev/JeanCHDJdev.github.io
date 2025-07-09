import React from 'react';

interface RocketHeaderProps {
  launchImageUrl: string;
  missionPatchUrl: string;
  rocketName: string;
  subtitle?: string;
  className?: string;
}

const RocketHeader: React.FC<RocketHeaderProps> = ({
  launchImageUrl,
  missionPatchUrl,
  rocketName,
  subtitle,
  className = '',
}) => {
  return (
    <div className={`relative w-full h-screen overflow-hidden ${className}`}>
      {/* Launch Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${launchImageUrl})` }}
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      {/* Bottom fade to background color - covers bottom third */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-space1 via-space1/90 to-transparent z-15" />

      {/* Content - shifted towards top */}
      <div className="relative z-20 w-full h-full flex items-start justify-center pt-16 sm:pt-20 md:pt-24 p-4 sm:p-6 md:p-8">
        <div className="flex flex-row items-center gap-6 md:gap-12 max-w-6xl mx-auto">
          {/* Mission Patch */}
          <div className="flex-shrink-0">
            <img
              src={missionPatchUrl}
              alt={`${rocketName} mission patch`}
              className="w-72 h-72 md:w-48 md:h-48 lg:w-64 lg:h-64 object-contain rounded-full border-2 border-white/15 shadow-2xl"
            />
          </div>

          {/* Rocket Name and Details */}
          <div className="text-center md:text-left text-white">
            <h1 className="text-7xl md:text-6xl lg:text-7xl font-bold font-montserrat mb-4 drop-shadow-lg">
              {rocketName}
            </h1>
            {subtitle && (
              <p className="text-4xl md:text-2xl lg:text-3xl font-light italic opacity-90 drop-shadow-md">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RocketHeader;
