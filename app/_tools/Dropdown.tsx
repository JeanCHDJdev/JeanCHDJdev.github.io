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
      className="bg-space2 text-white shadow-2xl rounded w-full p-2 md:text-md text-xl"
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
                  className="hover:text-space5 transition-colors duration-200 text-base md:text-md font-medium"
                >
                  {option.label}
                </Link>
              ) : (
                <span className="text-white text-base md:text-md font-medium">{option.label}</span>
              )}

              {hasSub && (
                <span
                  className="cursor-pointer text-space5 ml-2 text-2xl md:text-sm"
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
              <ul className="mt-2 bg-space2 rounded shadow-2xl">
                {option.subOptions!.map((sub, j) => (
                  <li
                    key={j}
                    className="px-3 py-3 md:py-2 hover:text-space5 transition-colors duration-200"
                  >
                    <Link 
                      href={sub.link || "#"}
                      className="text-base md:text-md font-large"
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