import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export const useScrollAnimation = (once = true, threshold = 0.1) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: once, threshold });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return { ref, controls };
};
