import React from 'react';
import { HamburgerMenuProps } from './HamburgerMenu.types';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isMenuOpen, toggleMenu }) => {
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={controls}
      className="z-50 flex h-6 w-6 cursor-pointer flex-col items-center justify-center space-y-1 lg:hidden"
      onClick={toggleMenu}
    >
      <span
        className={`h-0.5 w-full transform bg-black transition duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-[6px] rotate-45' : ''
        }`}
      />
      <span
        className={`h-0.5 w-full bg-black transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-0' : ''
        }`}
      />
      <span
        className={`h-0.5 w-full transform bg-black transition duration-300 ease-in-out ${
          isMenuOpen ? '-translate-y-[6px] -rotate-45' : ''
        }`}
      />
    </motion.div>
  );
};
