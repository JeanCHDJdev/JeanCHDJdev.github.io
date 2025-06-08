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
  options: DropdownOption[];
}

const Navbar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [navbarBackgroundColor, setNavbarBackgroundColor] = useState("transparent");

  const tabs: Tab[] = [
    {
      label: "Projects",
      options: [
        { label: "Projets", link: "/Projets" },
        { label: "Membres", link: "/Membres" },
      ],
    },
    {
      label: "Experiments",
      options: [
        { label: "Formations", link: "/Formations" },
        {
          label: "Hackathon",
          subOptions: [
            { label: "2024", link: "/Hackathon/2024" },
            { label: "2023", link: "/Hackathon/2023" },
          ],
        },
      ],
    },
    {
      label: "Partenariats",
      options: [
        { label: "Nos Partenaires", link: "/Partenaires" },
        { label: "Devenir Partenaire", link: "/Devenir-Partenaire" },
      ],
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
              <div className="cursor-pointer text-white">{tab.label}</div>
              {activeIndex === index && (
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
