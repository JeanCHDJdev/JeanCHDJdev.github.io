import React from 'react';

interface SocialMediaProps {
  className?: string;
}

const images = {
  instagram: '/media/social/instagram-logo.png',
  twitter: '/media/social/twitter-logo.png',
  linkedin: '/media/social/linkedin-logo.png',
  youtube: '/media/social/youtube-logo.png',
  mail: '/media/social/mail-logo.png',
};

const SocialMedia: React.FC<SocialMediaProps> = ({ className = '' }) => {
  const iconClass = 'w-6 ml-3 transition-transform duration-200 hover:scale-110';

  return (
    <div className={`flex items-center ${className}`}>
      <a href="https://www.instagram.com/janchaudpain/">
        <img className={iconClass} src={images.instagram} alt="Instagram" />
      </a>
      <a href="https://twitter.com/TheAnswerIsMine">
        <img className={iconClass} src={images.twitter} alt="Twitter" />
      </a>
      <a href="https://www.linkedin.com/in/jean-choppin-de-janvry/">
        <img className={iconClass} src={images.linkedin} alt="LinkedIn" />
      </a>
      <a href="mailto:jean.choppindejanvrydev@gmail.com">
        <img className={iconClass} src={images.mail} alt="Mail" />
      </a>
    </div>
  );
};

export default SocialMedia;