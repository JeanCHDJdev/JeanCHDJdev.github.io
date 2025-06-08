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
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <ul className="bg-space2 text-white shadow-lg border border-space4 rounded w-64 p-2">
      {options.map((option, i) => {
        const isOpen = hoverIndex === i;

        return (
          <li
            key={i}
            className="px-2 py-1 text-sm relative"
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(null)}
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

              {option.subOptions && (
                <span className="text-space5 ml-2">
                  {isOpen ? "▲" : "▼"}
                </span>
              )}
            </div>

            {option.subOptions && isOpen && (
              <ul className="mt-2 bg-space3 border border-space4 rounded shadow-md">
                {option.subOptions.map((sub, j) => (
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
