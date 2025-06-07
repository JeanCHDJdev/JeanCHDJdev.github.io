"use client";
import React, { useState, useRef, useEffect } from 'react';
import DropdownMenu from './Dropdown';

interface Tab {
    label: string;
    options: string[];
    links: string[];
    showMenu: boolean;
}

const Navbar: React.FC = () => {
    const [tabs, setTabs] = useState<Tab[]>([
        {
            label: 'Informations',
            options: ['Projets', 'Membres'],
            links: ['/Projets', '/Membres'],
            showMenu: false,
        },
        {
            label: 'Rejoignez-nous!',
            options: ['Formations', 'Hackathon'],
            links: ['/Formations', '/Hackathon'],
            showMenu: false,
        },
        {
            label: 'Partenariats',
            options: ['Nos Partenaires', 'Devenir Partenaire'],
            links: ['/Partenaires', '/Devenir-Partenaire'],
            showMenu: false,
        },
        // Add more tabs here if needed
    ]);

    const timeoutRef = useRef<number | null>(null);

    const handleTabClick = (index: number) => {
        setTabs((prevTabs) => {
            const updatedTabs = prevTabs.map((tab, i) => ({
                ...tab,
                showMenu: i === index ? !tab.showMenu : false,
            }));
            return updatedTabs;
        });
    };

    const handleBlur: React.FocusEventHandler<HTMLLIElement> = (event) => {
        const index = tabs.findIndex((tab) => event.currentTarget.contains(event.relatedTarget as Node));
        if (index !== -1) {
            clearTimeout(timeoutRef.current!); // Clear the timeout
            timeoutRef.current = window.setTimeout(() => {
                setTabs((prevTabs) => {
                    const updatedTabs = [...prevTabs];
                    updatedTabs[index] = { ...updatedTabs[index], showMenu: false };
                    return updatedTabs;
                });
            }, 500);
        }
    };

    const handleMouseEnter = (index: number) => {
        clearTimeout(timeoutRef.current!); // Clear the timeout
        setTabs((prevTabs) => {
            const updatedTabs = prevTabs.map((tab, i) => ({
                ...tab,
                showMenu: i === index ? true : false,
            }));
            return updatedTabs;
        });
    };

    const handleMouseLeave = () => {
        clearTimeout(timeoutRef.current!); // Clear the timeout
        timeoutRef.current = window.setTimeout(() => {
            setTabs((prevTabs) => {
                const updatedTabs = prevTabs.map((tab) => ({
                    ...tab,
                    showMenu: false,
                }));
                return updatedTabs;
            });
        }, 1000);
    };
    const [navbarBackgroundColor, setNavbarBackgroundColor] = useState<string>('transparent');

    useEffect(() => {
        const handleScroll = () => {
            const scrollDistance = window.scrollY;
            const scrollThreshold = '300rem'; 

            if (scrollDistance > parseFloat(scrollThreshold)) {
                setNavbarBackgroundColor('rgba(0, 0, 50, 0.6)');
            } else {
                setNavbarBackgroundColor('transparent');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            alignItems: 'center', 
            backgroundColor: navbarBackgroundColor, 
            padding: '0.5rem 1rem', 
            position: 'fixed', 
            top: 0, 
            width: "100%",
            height: 'auto',
            transition: 'background-color 0.3s ease-in-out',
            zIndex: 100,
            }}>
            {/*CACS Home Logo*/}
            <a href="/">
                <img className='clickable-mini-images' src="../home_page/main_animations/cacs_animated_gif.gif" alt="Logo" style={{ width: '1.875rem', transform: 'scale(4)', marginRight: '1.5rem', marginLeft: '1rem' }} />
            </a>
            {/*Menus*/}
            <ul style={{ display: 'flex', flexDirection: 'row', listStyleType: 'none', padding: '0rem', marginLeft: '1rem'}}>
                {tabs.map((tab, index) => (
                    <li  className='list-navbar' key={index} style={{ marginRight: '0.5rem' }} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave()} onBlur={handleBlur} tabIndex={0}>
                        <div onClick={() => handleTabClick(index)}>{tab.label}</div>
                        {tab.showMenu && (
                            <div style={{ position: 'absolute', top: '100%', marginLeft: '-0.5rem' }}>
                                <DropdownMenu options={tab.options} links={tab.links} />
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            <ul style={{ display: 'flex', flexDirection: 'row', listStyleType: 'none', padding: 0, marginRight: 'auto' }} onMouseEnter={() => handleMouseEnter(-1)}>
                <li  className='list-navbar' style={{ marginRight: '2rem' }}>
                    <a href="/Contact">Contact</a>
                </li>
            </ul>
            {/*Social Media*/}
            {/*<SocialMedia style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }} />*/}
        </nav>
    );
};

export default Navbar;
