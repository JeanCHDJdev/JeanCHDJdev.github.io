import React from 'react';
import SocialMedia from '../SocialMedia';

const Footer: React.FC = () => {
  const autres_assos = [
    { src: '../layout_images/footer/club_tech_cut.png', alt: 'Club Tech', text: 'Le Club Tech est l\'association de robotique et de conception de CentraleSupélec. Nous partageons avec eux le local technique et nous entraidons mutuellement sur les projets.', width: '14rem', height: 'auto', marginLeft: '2.5rem', scale: '1' },
    { src: '../layout_images/footer/ViaRezo.png', alt: 'ViaRézo', text: 'ViaRézo est l\'association d\'informatique et de réseau de CentraleSupélec à Gif. L\'association héberge ce site web!', link: 'https://viarezo.fr/', width: '7rem', height: 'auto', marginLeft: '3.15rem', scale: '1' },
    { src: '../layout_images/footer/pics.png', alt: 'Pics', text: 'Pics est l\'association de photographie de CentraleSupélec. Plusieurs contenus de ce site ont été photographiés par leurs soins!', link: 'https://galerie.pics/galerie', width: '10rem', height: 'auto', marginLeft: '2.4rem', scale: '1' },
    { src: '../layout_images/footer/Logo_Hyris_B.png', alt: 'Hyris', text: 'Hyris est l\'assocation d\'audiovisuel de CentraleSupélec. Une partie de notre contenu vidéo a été fourni par leur travail !', link: 'https://hyris.tv/', width: '7rem', height: 'auto', marginLeft: '3.4rem', scale: '1' },
  ];

  const partenaires = [
    { src :'/soutiens/ArianeGroup_blanc.png', alt: 'ArianeGroup', link: 'https://www.ariane.group/fr/', width: '25rem', height: 'auto', marginLeft: '2.5rem', text: 'ArianeGroup est le leader européen des lanceurs spatiaux, avec leur programme de fusée phare Ariane. ArianeGroup nous soutient à la fois par son expertise technique et financièrement dans nos projets.', scale: '1.5'},
    { src :'/soutiens/archery.png', alt: 'Archery', link: 'https://www.archeryconsulting.com/', width: '20rem', height: 'auto', marginLeft: '2.5rem', text: 'Archery Strategy Consulting est un cabinet de conseil en stratégie notamment impliqué dans l\'aérospatial et la défense, qui nous soutient dans nos projets.', scale: '0.8'},
  ];

  return (
    <footer style={{ width: '100%', height: '28rem', backgroundColor: 'rgb(0, 0, 50)', borderTop: '0.75rem solid white' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', height: '100%' }}>
        <div style={{ flex: '1', textAlign: 'center' }}>
          <p style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.75rem', marginTop: '0.75rem' }}>D&apos;autres assos qu&apos;on apprécie</p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', marginLeft: '1.5rem' }}>
            {autres_assos.map((image, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                <a href={image.link} target="_blank" rel="noopener noreferrer">
                  <img className='clickable-mini-images' src={image.src} alt={image.alt} style={{ width: image.width, height: image.height, marginRight: '0.75rem' }} />
                </a>
                <p style={{ color: 'white', fontSize: '0.6vw', marginLeft: image.marginLeft, textAlign: 'left' }} className='hide-mobile'>{image.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div style={{ flex: '2', textAlign: 'center' }}>
          <p style={{ color: 'white', textAlign: 'center', fontSize: '2.25rem', fontWeight: 'bold', fontStyle: 'italic' }}>CACS</p>
          <p style={{ color: 'white', textAlign: 'center', fontSize: '1.5rem', marginBottom: '1.5rem' }}>Cercle Aéronautique CentraleSupélec</p>
          <p style={{ color: 'white', textAlign: 'center', marginBottom: '1rem' }}>Suivez-nous sur les réseaux sociaux: </p>
          <SocialMedia style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}/>
          <a style={{ color: 'white', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '8rem' }} href="mailto:cercle.aero.cs@gmail.com">
            Nous contacter par mail :
            <img className='clickable-mini-images' src="../layout_images/networks/mail_logo.png" alt="Mail icon" style={{ width: '2.25rem', height: '1.5rem', filter: 'invert(1)', marginLeft: '0.9rem' }} />
          </a>
          <p style={{ color: 'white', textAlign: 'center', fontSize: '0.75rem', marginBottom: '0.6rem' }}>© 2024 - CACS - By Jean Choppin de Janvry & Anas Himmi (P25)</p>
          <p style={{ color: 'white', textAlign: 'center', fontSize: '0.75rem', marginBottom: '0.75rem' }}>Tous droits réservés</p>
        </div>
        <div style={{ flex: '1', textAlign: 'center' }}>
          <p style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.75rem', marginTop: '0.75rem' }}>Partenaires</p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', marginLeft: '1.5rem' }}>
              {partenaires.map((image, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <a href={image.link} target="_blank" rel="noopener noreferrer">
                      <img className='clickable-mini-images' src={image.src} alt={image.alt} style={{ width: image.width, height: image.height, scale: image.scale}} />
                    </a>
                    <p style={{ color: 'white', fontSize: '0.6vw', marginLeft: image.marginLeft, marginRight:'0.75rem', textAlign: 'left' }} className='hide-mobile'>{image.text}</p>
                  </div>
                ))}
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
