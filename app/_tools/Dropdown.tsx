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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSubMenu = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <ul className="bg-space2 text-white shadow-lg border border-space4 rounded w-64 p-2">
      {options.map((option, i) => (
        <li key={i} className="px-2 py-1 text-sm">
          <div className="flex justify-between items-center">
            {option.link ? (
              <Link
                href={option.link}
                className="hover:text-space5 transition-colors duration-200"
              >
                {option.label}
              </Link>
            ) : (
              <button
                onClick={() => toggleSubMenu(i)}
                className="w-full text-left hover:text-space5 transition-colors duration-200"
              >
                {option.label}
              </button>
            )}

            {option.subOptions && (
              <span
                className="cursor-pointer text-space5"
                onClick={() => toggleSubMenu(i)}
              >
                {openIndex === i ? "▲" : "▼"}
              </span>
            )}
          </div>

          {option.subOptions && openIndex === i && (
            <ul className="ml-4 mt-1 border-l border-space4 pl-3">
              {option.subOptions.map((sub, j) => (
                <li
                  key={j}
                  className="py-1 text-sm hover:text-space5 transition-colors duration-200"
                >
                  <Link href={sub.link || "#"}>{sub.label}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;

