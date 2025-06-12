import React from 'react';
import SocialMedia from './SocialMedia';

const Footer: React.FC = () => {
  return (
    <footer className="w-full h-[28rem] bg-[rgb(0,0,50)] border-t-[0.75rem] border-white">
      <div className="flex justify-between items-start h-full">
        {/* Add more columns or content here if needed */}
        <div className="flex-2 text-center mx-auto">
          <p className="text-white mb-4">Socials</p>
          <SocialMedia className="flex justify-center mb-4" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

