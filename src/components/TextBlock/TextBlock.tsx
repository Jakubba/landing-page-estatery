import React from 'react';
import { StatItem } from '../StatItem/StatItem';
import { TextBlockProps } from './TextBlock.types';
import gradientbg from '../../assets/images/Gradient-background.png';
import { AnimatedText } from '../AnimatedText/AnimatedText';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const headerStyle =
  'mb-8 flex flex-wrap max-w-[544px] text-center text-[40px] leading-[110%] font-bold tracking-[-0.01em] md:text-left md:text-[60px]';
const subHeaderStyle =
  'mb-[32px] flex flex-wrap max-w-[544px] text-center text-[20px] leading-[160%] font-medium tracking-[-0.5%] md:mb-[80px] md:text-left';



export const TextBlock: React.FC<TextBlockProps> = ({ textData }) => {
  const { ref, controls } = useScrollAnimation();

  return (
    <div className="relative z-10 flex w-full flex-col items-start justify-center md:w-1/2 md:px-[64px]">
      <img className="absolute bottom-0 left-0 md:hidden" src={gradientbg} alt="" />
      <div className="relative p-[32px] md:p-0">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={fadeInUp}>
          <AnimatedText text={textData.header} className={headerStyle} />
          <AnimatedText text={textData.subHeader} as="p" className={subHeaderStyle} />
        </motion.div>

        <motion.ul
          className="mb-[32px] flex gap-8"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          {textData.stats.map((stat) => (
            <StatItem key={stat.id} stat={stat} /> 
          ))}
        </motion.ul>
      </div>
    </div>
  );
};
