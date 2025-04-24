import React from 'react';
import { Logo } from '../Logo/Logo';
import { FooterNav } from '../FooterNav/FooterNav';
import { FooterBottom } from '../FooterBottom/FooterBottom';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white px-[32px] pt-2 pb-[32px] md:p-[64px]">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-0">
        <Logo />
        <FooterNav />
      </div>
      <div className="my-8 h-px w-full bg-gray-300" />
      <FooterBottom />
    </footer>
  );
};
