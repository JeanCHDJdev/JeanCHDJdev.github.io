"use client";
import React, { useState, useRef, useEffect } from "react";
import DropdownMenu from "./Dropdown";

interface DropdownOption {
  label: string;
  link?: string;
  subOptions?: DropdownOption[];
}

interface Tab {
  label: string;
  link?: string;
  options?: DropdownOption[];
}

const Navbar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [navbarBackgroundColor, setNavbarBackgroundColor] = useState("transparent");

  const tabs: Tab[] = [
    {
      label: "Research",
      link: "/research",
      options: [
        { 
            label: "Research interests", 
            subOptions: [
                { label: "Galaxy clustering", link: "/research/galaxy-clustering" },
                { label: "Photometric redshifts", link: "/research/photoz" },
                { label: "Algorithms", link: "/research/algorithms" },
            ]
         },
         {
            label: "Publications",
            link: "/research/publications",
         },
         {
            label: "Software",
            link: "/research/software",
         },
         {
            label: "Experiments",
            link: "/research/experiments",
         }
      ],
    },
    {
      label: "Projects",
      link: "/projects",
      options: [
        {
          label: "Rockets",
          subOptions: [
            { label: "PheniCS", link: "/projects/rockets/phenics" },
            { label: "Sirius", link: "/projects/rockets/sirius" },
            { label: "HyMir", link: "/projects/rockets/hymir" },
          ],
        },
        {
          label: "Websites",
          subOptions: [
            { label: "This website", link: "/projects/websites/this" },
            { label: "Space Section (CACS)", link: "/projects/websites/space-section-cacs" },
          ],
        },
        {
          label: "Others",
          subOptions: [
            { label: "Homemade foundry", link: "/projects/others/homemade-foundry" },
            { label: "Gamejam games", link: "/projects/others/gamejam-games" },
          ],
        },
      ],
    },
    {
      label: "Overthought Games",
      link: "/overthought-games",
      options: [
        { label: "Who are we ?", link: "/overthought-games/who-are-we" },
        { label: "Our Game : Oblitare Mori", link: "/overthought-games/oblitare-mori" },
      ],
    },
    {
      label: "Awards",
      link: "/awards", 
    },
    {
      label: "Hobbies",
      options: [
        { label: "Astrophotography", link: "/hobbies/astrophotography" },
        { label: "Video games", link: "/hobbies/video-games" },
        { label: "Travels", link: "/hobbies/travelling" },
      ], 
    },
    {
      label: "About me",
      link: "/about", 
    },
  ];

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveIndex(null);
    }, 50);
  };

  const handleMobileClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveIndex(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      setNavbarBackgroundColor(window.scrollY > 300 ? "var(--space3)" : "transparent");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('nav')) {
        setIsMobileMenuOpen(false);
        setActiveIndex(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-colors duration-300"
      style={{ backgroundColor: navbarBackgroundColor }}
    >
      <div className="flex justify-between items-center px-8 py-2">
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {tabs.map((tab, index) => (
            <li
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {tab.link ? (
                <a
                  href={tab.link}
                  className="text-white hover:underline flex items-center gap-1"
                >
                  {tab.label}
                  {tab.options && (
                    <span>{activeIndex === index ? "▲" : "▼"}</span>
                  )}
                </a>
              ) : (
                <div className="text-white cursor-pointer flex items-center gap-1">
                  {tab.label}
                  {tab.options && (
                    <span>{activeIndex === index ? "▲" : "▼"}</span>
                  )}
                </div>
              )}
              {tab.options && activeIndex === index && (
                <div className="absolute top-full left-0">
                  <DropdownMenu options={tab.options} />
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-white focus:outline-none p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <div className="space-y-2">
            <div className={`w-10 h-1 bg-white transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-3' : ''}`}></div>
            <div className={`w-10 h-1 bg-white transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-10 h-1 bg-white transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-3' : ''}`}></div>
          </div>
        </button>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile menu */}
      <div className={`md:hidden fixed top-0 left-0 w-3/4 h-full bg-space2 border-r border-space4 transform transition-transform duration-300 z-50 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="pt-16 px-6 py-4">
          <ul className="space-y-3">
            {tabs.map((tab, index) => (
              <li key={index} className="relative">
                <div className="flex items-center justify-between">
                  {tab.link ? (
                    <a
                      href={tab.link}
                      className="text-white hover:text-space5 transition-colors duration-200 py-3 flex-1 text-3xl font-medium"
                      onClick={() => {
                        if (!tab.options) {
                          setIsMobileMenuOpen(false);
                        }
                      }}
                    >
                      {tab.label}
                    </a>
                  ) : (
                    <span className="text-white py-3 flex-1 text-3xl font-medium">{tab.label}</span>
                  )}
                  
                  {tab.options && (
                    <button
                      className="text-white p-2 ml-2 text-3xl"
                      onClick={() => handleMobileClick(index)}
                      aria-label={`Toggle ${tab.label} submenu`}
                    >
                      <span>{activeIndex === index ? "▶" : "▼"}</span>
                    </button>
                  )}
                </div>
                
                {tab.options && activeIndex === index && (
                  <div className="mt-2 ml-4">
                    <DropdownMenu options={tab.options} />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;