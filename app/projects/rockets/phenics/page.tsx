import React from 'react';
import BackgroundImage from '@/app/_tools/_content/BackgroundImage';
import TextImage from '@/app/_tools/_content/TextImage';

const Page: React.FC = () => {
  return (
    <div style={{ height: '300vh' }}>
      {/* Add your content here */}
      <BackgroundImage
        imageUrl="/astrophotography/east-veil.jpg"
        overlay={true}
        heightClass="h-screen"
      >
        <TextImage
          imageUrl="/projects/rockets/phenics/logo-phenics.png"
          imageAlt="Logo for the PheniCS mission."
          imagePosition="right"
          className="max-w-4xl mx-auto p-6"
          imageWidth={35}
          mobileImageWidth={70}>
          <div className="text-white text-center">
            <h1 className="text-6xl font-bold">PHENICS</h1>
            <p className="text-3xl"><i>2023 Supersonic rocket</i></p>
          </div>
        </TextImage>
      </BackgroundImage>
    </div>
  );
};

export default Page;