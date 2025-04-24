import React from 'react';
import { Link } from 'react-router-dom';
import { navbarData } from '../../data/navbarData';

export const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center text-[20px] leading-[140%] font-bold">
      <img src={navbarData.logoSrc} alt="purple icon house" className="mr-2" />
      {navbarData.logoText}
    </Link>
  );
};
