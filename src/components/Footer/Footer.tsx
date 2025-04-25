import React from 'react';
import { Logo } from '../Logo/Logo';
import { FooterNav } from '../FooterNav/FooterNav';
import { FooterBottom } from '../FooterBottom/FooterBottom';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
export const Footer: React.FC = () => {
  const { ref, controls } = useScrollAnimation();
  return (
    <footer ref={ref} className="w-full bg-white px-[32px] pt-2 pb-[32px] md:p-[64px]">
      <motion.div initial="hidden" animate={controls} variants={fadeIn}>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-0">
          <Logo className="mr-auto" />
          <FooterNav />
        </div>
        <div className="my-8 h-px w-full bg-gray-300" />
        <FooterBottom />
      </motion.div>
    </footer>
  );
};
