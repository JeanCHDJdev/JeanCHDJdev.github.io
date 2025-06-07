import React from "react";

interface DropdownProps {
    options: string[];
    links: string[];
}

const DropdownMenu: React.FC<DropdownProps> = ({ options, links }) => {
    return (
        <div className="dropdown-menu">
            <ul>
                {options.map((option, index) => (
                    <li className = 'list-navbar' key={index}>
                        <a href={links[index]}>{option}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DropdownMenu;