import React from 'react';
import { Link } from 'react-router-dom';
import { footerLinks } from '../../data/footerData';
import { FooterLink } from './FooterNav.types';

export const FooterNav: React.FC = () => {
  return (
    <ul className="flex flex-wrap justify-center gap-8 text-center uppercase">
      {footerLinks.map(({ name, path }: FooterLink) => (
        <li key={name}>
          <Link
            to={path}
            className="transtion text-[16px] leading-[160%] font-medium tracking-normal text-black duration-300 ease-in-out hover:opacity-50"
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
