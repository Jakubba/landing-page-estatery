import React from 'react';
import { motion } from 'framer-motion';
import { letterFadeIn, textContainer } from '../../utils/animations';
import { AnimatedTextProps } from './AnimationText.types';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, as = 'h1', className }) => {
  const { ref, controls } = useScrollAnimation();

  // @ts-ignore
  const MotionComponent = motion[as] || motion.h1;

  return (
    <MotionComponent
      ref={ref}
      variants={textContainer}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {text.split(' ').map((word, index) => (
        <motion.span key={index} variants={letterFadeIn}>
          {word}
          {index < text.split(' ').length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </MotionComponent>
  );
};
