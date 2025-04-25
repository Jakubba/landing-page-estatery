import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { TestimonialProps } from './Testimonial.types';

const Testimonial = ({ testimonial, className }: TestimonialProps) => {
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.blockquote
      ref={ref}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } },
      }}
      initial="hidden"
      animate={controls}
      className={`mb-[48px] flex flex-col items-center ${className}`}
    >
      <p className="mb-[32px] text-center text-[20px] leading-[160%] font-medium tracking-[0%]">
        {testimonial.text}
      </p>
      <footer>
        <p className="text-center text-[16px] leading-[150%] font-normal tracking-[0%] text-[#7B8191]">
          <strong className="mr-1 font-bold text-[#000000]">{testimonial.author}</strong>
          {testimonial.role}
        </p>
      </footer>
    </motion.blockquote>
  );
};

export default Testimonial;
