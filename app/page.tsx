import React from 'react';
import BackgroundImage from './_tools/_content/BackgroundImage';

const Page: React.FC = () => {
  return (
    <div style={{ height: '300vh' }}>
      <BackgroundImage
        imageUrl="/astrophotography/east-veil.jpg"
        overlay={true}
        heightClass="h-screen"
      />
    </div>
  );
};

export default Page;