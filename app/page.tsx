import React from 'react';
import BackgroundImage from './_tools/_content/BackgroundImage';
import TextImage from './_tools/_content/TextImage';
import TextOverlayImage from './_tools/_content/TextOverlayImage';
import StandardButton from './_tools/_content/Button';

const Page: React.FC = () => {
  return (
    <div>
      <BackgroundImage
        imageUrl="/astrophotography/east-veil.jpg"
        overlay={true}
        heightClass="h-screen"
        >
        <TextImage
          imageUrl="/photo_jean.png"
          imageAlt="Me at Sequioa National Park ! Taken by my friend Matthieu Prigent."
          imagePosition="right"
          className="max-w-4xl mx-auto p-6" 
          imageWidth={35}
          mobileImageWidth={70}
          children={
            <div className="text-white text-center">
              <h1 className="text-6xl font-bold">Jean</h1>
              <h1 className="text-6xl font-bold mb-4">Choppin de Janvry</h1>
              <p className="text-3xl"><i>Cosmologist / Data Analyst apprentice at CEA Paris-Saclay</i></p>
            </div>
          }
        />
      </BackgroundImage>
      <BackgroundImage
        imageUrl="/astrophotography/lobster.JPEG"
        overlay={true}
        heightClass="h-screen"
        >
        <TextOverlayImage
          imageUrl="/astrophotography/lobster.JPEG"
          imageAlt="Description of your image"
          className="max-w-4xl mx-auto p-6" 
          imageWidth={60}
          mobileImageWidth={60}
          children={
            <div className="text-white text-center">
              <h1 className="text-5xl font-bold mb-4">PROJECTS</h1>
              <p className="text-2xl">Discover some of my projects ! </p>
            </div>
          }
        />
      </BackgroundImage>
      <BackgroundImage
        imageUrl="/astrophotography/pickering.JPEG"
        overlay={true}
        heightClass="h-screen"
        >
        <StandardButton/>
      </BackgroundImage>
    </div>
  );
};

export default Page;