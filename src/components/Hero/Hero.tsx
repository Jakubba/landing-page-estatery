import { TextBlock } from '../TextBlock/TextBlock';
import { MapBlock } from '../MapBlock/MapBlock';
import gradientbg from '../../assets/images/Gradient-background.png';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const Hero = () => {
  const { ref, controls } = useScrollAnimation();
  return (
    <motion.section
      ref={ref}
      variants={fadeIn}
      initial="hidden"
      animate={controls}
      className="relative mx-auto flex w-full justify-center md:mb-[64px] md:min-h-[750px] md:flex-row"
    >
      <div className="flex w-full max-w-[1440px] flex-col md:flex-row">
        <TextBlock />
        <MapBlock />
      </div>
      <img className="absolute bottom-0 left-0 hidden md:block" src={gradientbg} alt="" />
    </motion.section>
  );
};
