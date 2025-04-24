import React from 'react';
import Button from '../Button/Button';
import { navbarData } from '../../data/navbarData';

export const AuthButtons: React.FC = () => {
  const { loginLink, signUpLink, loginText, signUpText } = navbarData;

  return (
    <ul className="flex w-full flex-col gap-6 pt-4 lg:w-auto lg:flex-row lg:gap-[18px] lg:space-x-4 lg:border-none lg:pt-0">
      <li className="w-full lg:w-auto">
        <Button to={loginLink} variant="primary">
          {loginText}
        </Button>
      </li>
      <li className="w-full lg:w-auto">
        <Button to={signUpLink} variant="secondary">
          {signUpText}
        </Button>
      </li>
    </ul>
  );
};
