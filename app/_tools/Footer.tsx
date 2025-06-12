import React from 'react';
import SocialMedia from './SocialMedia';

const Footer: React.FC = () => {
  return (
    <footer className="w-full h-50 bg-space2 z-30">
      <div className="flex justify-between items-start h-full">
        <div className="flex-1 text-center mx-auto">
          <p className="text-white mb-4 text-2xl mt-8">Socials</p>
          <SocialMedia className="flex justify-center mb-4" />
          <p className="text-gray mb-4 text-md mt-8"><i>All rights reserved - Jean Choppin de Janvry - 2025</i></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
