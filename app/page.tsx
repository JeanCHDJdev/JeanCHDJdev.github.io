import React from 'react';
import BackgroundImage from './_tools/_content/BackgroundImage';
import TextImage from './_tools/_content/TextImage';

const Page: React.FC = () => {
  return (
    <div style={{ height: '300vh' }}>
      <BackgroundImage
        imageUrl="/astrophotography/east-veil.jpg"
        overlay={true}
        heightClass="h-screen"
      />
      <TextImage
        text="This is some example text"
        imageUrl="/astrophotography/east-veil.jpg"
        imageAlt="Description of your image"
        imagePosition="left" // or "right"
        className="max-w-4xl mx-auto p-6" // optional additional styling
      />
    </div>
  );
};

export default Page;