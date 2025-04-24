import React from 'react';
import { Link } from 'react-router-dom';
import { navbarData } from '../../data/navbarData';

export const Menu: React.FC = () => {
  return (
    <ul className="flex w-full flex-col lg:flex-row lg:justify-center lg:space-x-8">
      {navbarData.menuItems.map((item) => (
        <li
          key={item.name}
          className="cursor-pointer text-left text-base leading-[150%] font-medium hover:text-gray-500 lg:text-center"
        >
          <Link to={item.path} className="block px-2 py-1">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
