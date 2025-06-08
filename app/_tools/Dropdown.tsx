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
    setOpenIndexes(new Set());
  };

  const handleMouseEnter = (index: number) => {
    setOpenIndexes((prev) => {
      const next = new Set(prev);
      next.add(index);
      return next;
    });
  };

  const handleClick = (index: number) => {
    setOpenIndexes((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index); // Collapse on click
      } else {
        next.add(index);    // Expand on click
      }
      return next;
    });
  };

  return (
    <ul
      className="bg-space2 text-white shadow-lg border border-space4 rounded w-64 p-2"
      onMouseLeave={handleMouseLeave}
    >
      {options.map((option, i) => {
        const hasSub = !!option.subOptions;
        const isOpen = openIndexes.has(i);

        return (
          <li
            key={i}
            className="px-2 py-1 text-sm relative"
            onMouseEnter={() => hasSub && handleMouseEnter(i)}
          >
            <div className="flex justify-between items-center">
              {option.link ? (
                <Link
                  href={option.link}
                  className="hover:text-space5 transition-colors duration-200"
                >
                  {option.label}
                </Link>
              ) : (
                <span className="text-white">{option.label}</span>
              )}

              {hasSub && (
                <span
                  className="cursor-pointer text-space5 ml-2"
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
              <ul className="mt-2 bg-space3 border border-space4 rounded shadow-md">
                {option.subOptions!.map((sub, j) => (
                  <li
                    key={j}
                    className="px-3 py-2 text-sm hover:text-space5 transition-colors duration-200"
                  >
                    <Link href={sub.link || "#"}>{sub.label}</Link>
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

