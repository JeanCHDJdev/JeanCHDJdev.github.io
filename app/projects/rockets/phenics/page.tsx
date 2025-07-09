import React from 'react';
import RocketHeader from '@/app/_tools/_content/RocketHeader';
import InteractiveRocket from '@/app/_tools/_content/InteractiveRocket';

const rootPhenics = '/projects/rockets/phenics';
const Page: React.FC = () => {
  const phenicsComponents = [
    {
      id: 'nosecone',
      name: 'Nose Cone',
      description: 'Aerodynamic nose cone designed to minimize drag during supersonic flight.',
      position: { x: 50, y: 15 },
      details: {
        specifications: [
          'Material: Carbon Fiber',
          'Length: 45 cm',
          'Diameter: 15 cm',
          'Weight: 0.8 kg'
        ],
        purpose: 'Reduces aerodynamic drag and houses recovery electronics',
        materials: ['Carbon Fiber', 'Aluminum', 'Electronics'],
        additionalInfo: 'Custom-designed for optimal performance at Mach 1.2+',
        image: `${rootPhenics}/sim-phenics.png`,
        imageAlt: 'PheniCS nose cone design'
      }
    },
    {
      id: 'recovery',
      name: 'Recovery Bay',
      description: 'Houses the parachute deployment system and flight computer.',
      position: { x: 50, y: 25 },
      details: {
        specifications: [
          'Dual-deploy system',
          'Backup altimeter',
          'GPS tracking',
          'Capacity: 2 parachutes'
        ],
        purpose: 'Ensures safe recovery of the rocket after flight',
        materials: ['Aluminum', 'Kevlar', 'Electronics'],
        additionalInfo: 'Redundant systems for maximum safety'
      }
    },
    {
      id: 'payload',
      name: 'Payload Bay',
      description: 'Scientific payload compartment with experimental equipment.',
      position: { x: 50, y: 35 },
      details: {
        specifications: [
          'Volume: 2.5 liters',
          'Weight capacity: 3 kg',
          'Environmental protection: IP65',
          'Data logging: 1000 Hz'
        ],
        purpose: 'Carries scientific instruments and experiments',
        materials: ['Aluminum', 'Foam padding', 'Sensors'],
        additionalInfo: 'Houses accelerometers, gyroscopes, and pressure sensors'
      }
    },
    {
      id: 'avionics',
      name: 'Avionics Bay',
      description: 'Flight computer and control systems for the rocket.',
      position: { x: 50, y: 45 },
      details: {
        specifications: [
          'Dual flight computers',
          'Redundant power systems',
          'Real-time telemetry',
          'Autonomous flight control'
        ],
        purpose: 'Controls all rocket systems during flight',
        materials: ['PCB', 'Aluminum housing', 'Batteries'],
        additionalInfo: 'Custom-designed flight control algorithm'
      }
    },
    {
      id: 'motor',
      name: 'Motor Section',
      description: 'Solid rocket motor providing thrust for supersonic flight.',
      position: { x: 50, y: 70 },
      details: {
        specifications: [
          'Total impulse: 2560 N·s',
          'Burn time: 3.2 seconds',
          'Peak thrust: 1200 N',
          'Propellant: APCP composite'
        ],
        purpose: 'Provides propulsion to reach target altitude and velocity',
        materials: ['Steel casing', 'Composite propellant', 'Graphite nozzle'],
        additionalInfo: 'Certified for supersonic flight applications',
        image: '/astrophotography/east-veil.jpg', // Example image - replace with actual motor image
        imageAlt: 'PheniCS rocket motor'
      }
    },
    {
      id: 'fins',
      name: 'Fin Assembly',
      description: 'Stabilizing fins for flight control and stability.',
      position: { x: 50, y: 85 },
      details: {
        specifications: [
          'Fin count: 4',
          'Material: Fiberglass',
          'Root chord: 12 cm',
          'Tip chord: 4 cm'
        ],
        purpose: 'Provides aerodynamic stability during flight',
        materials: ['Fiberglass', 'Epoxy resin', 'Aluminum brackets'],
        additionalInfo: 'Designed for stability at supersonic speeds'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-space1">
      {/* Rocket Header */}
      <RocketHeader
        launchImageUrl={`${rootPhenics}/liftoff-phenics.jpg`}
        missionPatchUrl={`${rootPhenics}/logo-phenics.png`}
        rocketName="PHENICS"
        subtitle="2023 Supersonic Rocket"
      />

      {/* Interactive Rocket Diagram */}
      <div className="bg-space1">
        <InteractiveRocket
          rocketImageUrl="/projects/rockets/phenics/logo-phenics.png" // Replace with actual rocket diagram
          rocketName="PHENICS"
          components={phenicsComponents}
          className="py-16"
        />
      </div>

      {/* Additional content sections can be added here */}
      <div className="h-32 bg-space1"></div>
    </div>
  );
};

export default Page;