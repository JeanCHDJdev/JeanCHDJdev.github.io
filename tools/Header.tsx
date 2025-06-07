import React from 'react';

interface HeaderProps {
    bg: string;
    title: string;
    subtitle: string;
    paragraph?: string;
}
const Header: React.FC<HeaderProps> = ({bg, title, subtitle, paragraph}) => {
    return (
        <div> 
            <div className='bg'
                style={{
                objectFit:'cover',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height:'70vh', 
                width:'100vw',               
                backgroundImage: `url(${bg})`,
                filter:'brightness(70%)'
            }}/>
            <div>
                <text className='title-text huge white' style={{ textAlign: 'center', zIndex: '5', position: 'absolute', left: '10%', top: '50%'}}>{title}</text>
                <div style={{ marginTop: '5vh', display: 'flex', justifyContent: 'center', alignContent:'column', flexDirection:'column' }}>
                    <text className='title-text navy' style={{textAlign:'center', display:'flex', justifyContent:'center', marginBottom:'4%'}}>{subtitle}</text>
                    {paragraph && <p className='regular-text tiny navy' style={{ marginLeft: '20vw', marginRight: '20vw' }}>{paragraph}</p>}
                </div>
            </div>
        </div>
    );
};

export default Header;
