"use client";
import React, { useState } from 'react';

interface RocketComponent {
  id: string;
  name: string;
  description: string;
  position: {
    x: number; // percentage from left
    y: number; // percentage from top
  };
  details: {
    specifications?: string[];
    purpose?: string;
    materials?: string[];
    additionalInfo?: string;
    image?: string; // Optional image URL
    imageAlt?: string; // Optional alt text for the image
  };
}

interface InteractiveRocketProps {
  rocketImageUrl: string;
  rocketName: string;
  components: RocketComponent[];
  className?: string;
}

const InteractiveRocket: React.FC<InteractiveRocketProps> = ({
  rocketImageUrl,
  rocketName,
  components,
  className = '',
}) => {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);

  const handleComponentClick = (componentId: string) => {
    setActiveComponent(activeComponent === componentId ? null : componentId);
  };

  return (
    <div className={`w-full py-12 -mt-80 relative z-30 ${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="relative flex flex-col lg:flex-row gap-8 items-start">
          {/* Rocket Image Container */}
          <div className="relative flex-shrink-0 w-full lg:w-1/2 max-w-md mx-auto lg:mx-0">
            <img
              src={rocketImageUrl}
              alt={`${rocketName} diagram`}
              className="w-full h-auto object-contain"
            />
            
            {/* Interactive Points */}
            {components.map((component) => (
              <div
                key={component.id}
                className="absolute group cursor-pointer"
                style={{
                  left: `${component.position.x}%`,
                  top: `${component.position.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                onClick={() => handleComponentClick(component.id)}
              >
                {/* Clickable Point */}
                <div className={`
                  w-4 h-4 rounded-full border-2 transition-all duration-300
                  ${activeComponent === component.id 
                    ? 'bg-lightblue border-white scale-150 shadow-lg' 
                    : 'bg-white/80 border-lightblue hover:bg-lightblue hover:border-white hover:scale-125'
                  }
                `}>
                  {/* Pulsing animation for active component */}
                  {activeComponent === component.id && (
                    <div className="absolute inset-0 rounded-full bg-lightblue animate-ping opacity-75"></div>
                  )}
                </div>
                
                {/* Component Label */}
                <div className={`
                  absolute top-6 left-1/2 transform -translate-x-1/2 
                  bg-space2 text-white px-2 py-1 rounded text-xs whitespace-nowrap
                  transition-all duration-300
                  ${activeComponent === component.id 
                    ? 'opacity-100 visible' 
                    : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'
                  }
                `}>
                  {component.name}
                </div>
              </div>
            ))}
          </div>

          {/* Component Details Panel */}
          <div className="flex-1 min-h-[400px] w-full max-w-lg mx-auto lg:max-w-none lg:mx-0">
            {activeComponent ? (
              <div className="bg-space2 rounded-lg p-6 border border-space3">
                {(() => {
                  const component = components.find(c => c.id === activeComponent);
                  if (!component) return null;
                  
                  return (
                    <div className="text-white">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-lightblue">
                          {component.name}
                        </h3>
                        <button
                          onClick={() => setActiveComponent(null)}
                          className="text-gray hover:text-white transition-colors"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      
                      <p className="text-gray mb-6 leading-relaxed">
                        {component.description}
                      </p>

                      {/* Optional Component Image */}
                      {component.details.image && (
                        <div className="mb-6">
                          <img
                            src={component.details.image}
                            alt={component.details.imageAlt || `${component.name} detail`}
                            className="w-full max-w-md mx-auto rounded-lg shadow-lg border border-space3"
                          />
                        </div>
                      )}

                      {component.details.purpose && (
                        <div className="mb-4">
                          <h4 className="text-lg font-semibold text-lightblue mb-2">Purpose</h4>
                          <p className="text-gray">{component.details.purpose}</p>
                        </div>
                      )}

                      {component.details.specifications && component.details.specifications.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-lg font-semibold text-lightblue mb-2">Specifications</h4>
                          <ul className="text-gray space-y-1">
                            {component.details.specifications.map((spec, index) => (
                              <li key={index} className="flex items-center">
                                <span className="w-2 h-2 bg-lightblue rounded-full mr-3 flex-shrink-0"></span>
                                {spec}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {component.details.materials && component.details.materials.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-lg font-semibold text-lightblue mb-2">Materials</h4>
                          <div className="flex flex-wrap gap-2">
                            {component.details.materials.map((material, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-space3 text-white rounded-full text-sm"
                              >
                                {material}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {component.details.additionalInfo && (
                        <div className="mb-4">
                          <h4 className="text-lg font-semibold text-lightblue mb-2">Additional Information</h4>
                          <p className="text-gray">{component.details.additionalInfo}</p>
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>
            ) : (
              <div className="bg-space2 rounded-lg p-6 border border-space3 h-full flex items-center justify-center max-w-lg mx-auto lg:max-w-none lg:mx-0">
                <div className="text-center text-gray">
                  <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-lg">Click on any component to view details</p>
                  <p className="text-sm opacity-75 mt-2">Interactive points are marked on the rocket diagram</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveRocket;
