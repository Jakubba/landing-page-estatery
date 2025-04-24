import React from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from './FooterSocialMedia.types';
import { socialIcons } from '../../data/footerData';

export const FooterSocialMedia = () => {
  return (
    <ul className="flex gap-10">
      {socialIcons.map(({ icon, alt, path }: SocialIcon) => (
        <li key={alt}>
          <Link to={path}>
            <img
              src={icon}
              alt={`icon ${alt}`}
              className="transtion h-6 w-6 duration-300 ease-in-out hover:opacity-50"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};
