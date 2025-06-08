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
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [navbarBackgroundColor, setNavbarBackgroundColor] = useState("transparent");

  const tabs: Tab[] = [
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
      label: "Awards",
      link: "/awards", 
    },
    {
      label: "Hobbies",
      options: [
        { label: "Astrophotography", link: "/hobbies/astrophotography" },
        { label: "Video games", link: "/hobbies/video-games" },
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
    }, 300);
  };

  useEffect(() => {
    const handleScroll = () => {
      setNavbarBackgroundColor(window.scrollY > 300 ? "var(--space3)" : "transparent");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-colors duration-300"
      style={{ backgroundColor: navbarBackgroundColor }}
    >
      <div className="flex justify-between items-center px-8 py-2">
        <ul className="flex gap-6">
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
                <div className="text-white cursor-pointer">{tab.label}</div>
              )}
              {tab.options && activeIndex === index && (
                <div className="absolute top-full left-0">
                  <DropdownMenu options={tab.options} />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
