import React from 'react';
import BackgroundImage from './_tools/_content/BackgroundImage';

const Page: React.FC = () => {
  return (
    <div style={{ height: '300vh' }}>
      {/* Add your content here */}
      <p className="text-red-400 font-bold mt-10">Tailwind is working.</p>
      <BackgroundImage
        imageUrl="/astrophotography/east-veil.jpg"
        overlay={true}
        heightClass="h-screen"
      />
    </div>
  );
};

export default Page;