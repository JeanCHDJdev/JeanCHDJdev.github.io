"use client";
import React, { useState } from "react";
import Link from "next/link";

interface DropdownOption {
  label: string;
  link?: string;
  subOptions?: DropdownOption[];
}

interface DropdownMenuProps {
  options: DropdownOption[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ options }) => {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setOpenIndexes(new Set());
    }
  };

  const handleMouseEnter = (index: number) => {
    if (window.innerWidth >= 768) {
      setOpenIndexes((prev) => {
        const next = new Set(prev);
        next.add(index);
        return next;
      });
    }
  };

  const handleClick = (index: number) => {
    setOpenIndexes((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <ul
      className="bg-space2 text-white shadow-2xl drop-shadow-2xl rounded w-full p-2 text-3xl md:text-base border border-space4"
      style={{ 
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 10px 20px -5px rgba(0, 0, 0, 0.6)' 
      }}
      onMouseLeave={handleMouseLeave}
    >
      {options.map((option, i) => {
        const hasSub = !!option.subOptions;
        const isOpen = openIndexes.has(i);

        return (
          <li
            key={i}
            className="px-2 py-2 md:py-1 relative"
            onMouseEnter={() => hasSub && handleMouseEnter(i)}
          >
            <div className="flex justify-between items-center">
              {option.link ? (
                <Link
                  href={option.link}
                  className="hover:text-space5 transition-colors duration-200 text-3xl md:text-base font-medium"
                >
                  {option.label}
                </Link>
              ) : (
                <span className="text-white text-3xl md:text-base font-medium">{option.label}</span>
              )}

              {hasSub && (
                <span
                  className="cursor-pointer text-space5 ml-2 text-3xl md:text-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClick(i);
                  }}
                >
                  {isOpen ? "▲" : "▼"}
                </span>
              )}
            </div>

            {hasSub && isOpen && (
              <ul 
                className="mt-2 bg-space2 rounded border border-space4"
                style={{ 
                  boxShadow: '0 20px 40px -8px rgba(0, 0, 0, 0.8), 0 8px 16px -4px rgba(0, 0, 0, 0.6)' 
                }}
              >
                {option.subOptions!.map((sub, j) => (
                  <li
                    key={j}
                    className="px-3 py-3 md:py-2 hover:text-space5 transition-colors duration-200 whitespace-nowrap"
                  >
                    <Link 
                      href={sub.link || "#"}
                      className="text-3xl md:text-base font-large block"
                    >
                      {sub.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default DropdownMenu;