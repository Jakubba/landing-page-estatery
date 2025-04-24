import React from 'react';
import { HeroTextBlock } from '../HeroTextBlock/HeroTextBlock';
import { HeroMapBlock } from '../HeroMapBlock/HeroMapBlock';
import gradientbg from '../../assets/images/Gradient-background.png';

export const Hero = () => {
  return (
    <section className="relative mx-auto flex w-full justify-center md:mb-[64px] md:min-h-[750px] md:flex-row">
      <div className="flex w-full max-w-[1440px] flex-col md:flex-row">
        <HeroTextBlock />
        <HeroMapBlock />
      </div>
      <img className="absolute bottom-0 left-0 hidden md:block" src={gradientbg} alt="" />
    </section>
  );
};
