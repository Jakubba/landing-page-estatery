import React from 'react';
import { textData } from './../../data/heroData';
import { StatItem } from '../StatItem/StatItem';
import gradientbg from '../../assets/images/Gradient-background.png';

const headerStyle =
  'mb-8 max-w-[544px] text-center text-[40px] leading-[110%] font-bold tracking-[-0.01em] md:text-left md:text-[60px]';
const subHeaderStyle =
  'mb-[32px] max-w-[544px] text-center text-[20px] leading-[160%] font-medium tracking-[-0.5%] md:mb-[80px] md:text-left';

export const HeroTextBlock: React.FC = () => (
  <div className="relative z-10 flex w-full flex-col items-start justify-center md:w-1/2 md:px-[64px]">
    <img className="absolute bottom-0 left-0 md:hidden" src={gradientbg} alt="" />
    <div className="relative p-[32px] md:p-0">
      <h1 className={headerStyle}>{textData.header}</h1>
      <p className={subHeaderStyle}>{textData.subHeader}</p>
      <ul className="mb-[32px] flex gap-8">
        {textData.stats.map((stat) => (
          <StatItem key={stat.label} stat={stat} />
        ))}
      </ul>
    </div>
  </div>
);
