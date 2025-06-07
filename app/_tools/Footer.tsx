import React from 'react';
import SocialMedia from './SocialMedia';

const Footer: React.FC = () => {

  return (
    <footer style={{ width: '100%', height: '28rem', backgroundColor: 'rgb(0, 0, 50)', borderTop: '0.75rem solid white' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', height: '100%' }}>
        </div>
        <div style={{ flex: '2', textAlign: 'center' }}>
          <p style={{ color: 'white', textAlign: 'center', marginBottom: '1rem' }}>Suivez-nous sur les réseaux sociaux: </p>
          <SocialMedia style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}/>
      </div>
    </footer>
  );
};

export default Footer;
