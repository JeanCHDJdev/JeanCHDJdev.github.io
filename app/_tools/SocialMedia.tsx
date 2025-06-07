import React from 'react';

interface SocialMediaProps {
    style?: React.CSSProperties;
}
const images = {
    "instagram" : './media/social/instagram-logo.png',
    "twitter" : './media/social/twitter-logo.png',
    "linkedin" : './media/social/linkedin-logo.png',
    "youtube" : './media/social/youtube-logo.png',
    "mail" : './media/social/mail-logo.png'
}

const SocialMedia: React.FC<SocialMediaProps> = ({ style }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', ...style }}>
            <a href="https://www.instagram.com/janchaudpain/">
                <img className='clickable-mini-images' src={images["instagram"]} alt="Instagram" style={{ width: '1.5rem', marginLeft: '0.8rem', filter: 'invert(100%)'  }} />
            </a>
            <a href="https://twitter.com/TheAnswerIsMine">
                <img className='clickable-mini-images' src={images["twitter"]} alt="Twitter" style={{ width: '1.5rem', marginLeft: '0.8rem', filter: 'invert(100%)'  }} />
            </a>
            <a href="https://www.linkedin.com/in/jean-choppin-de-janvry/">
                <img className='clickable-mini-images' src={images["linkedin"]} alt="LinkedIn" style={{ width: '1.5rem', marginLeft: '0.8rem', filter: 'invert(100%)'  }} />
            </a>
            <a href="mailto:jean.choppindejanvrydev@gmail.com">
                <img className='clickable-mini-images' src={images["mail"]} alt="Mail" style={{ width: '1.5rem', marginLeft: '0.8rem', filter: 'invert(100%)'  }} />
            </a>
        </div>
    );
};

export default SocialMedia;
