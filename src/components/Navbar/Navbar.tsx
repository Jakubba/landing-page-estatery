import React, { useState } from 'react';
import { Menu } from './../Menu/Menu';
import { AuthButtons } from './../AuthButtons/AuthButtons';
import { HamburgerMenu } from './../HamburgerMenu/HamburgerMenu';
import { Logo } from './../Logo/Logo';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed z-50 w-full bg-white">
      <div className="flex items-center justify-between p-4">
        <div className="relative z-50">
          <Logo />
        </div>
        <HamburgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <div
          className={`flex-col items-start space-y-4 bg-white/70 p-6 backdrop-blur-md lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:p-0 ${
            isMenuOpen ? 'absolute top-full right-0 left-0 z-40 flex' : 'hidden'
          } w-full lg:static lg:flex`}
          aria-hidden={!isMenuOpen}
        >
          <Menu />
          <AuthButtons />
        </div>
      </div>
    </nav>
  );
};
