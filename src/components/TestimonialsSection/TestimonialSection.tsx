import React, { useState, useEffect } from 'react';
import { testimonials, testimonialHeader } from '../../data/testimonialsData';
import Testimonial from '../../components/Testimonial/Testimonial';
import Avatar from '../../components/Avatar/Avatar';
import { AnimatedText } from '../../components/AnimatedText/AnimatedText';
import { TestimonialsSectionProps } from './TestimonialSection.types';

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  sectionTitle = testimonialHeader.sectionTitle,
  sectionDescription = testimonialHeader.sectionDescription,
}) => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }

    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [hasAnimated]);

  const headerStyle =
    'mb-4 text-[32px] leading-[125%] font-bold tracking-[-0.01em] md:text-[40px] md:leading-[140%] md:tracking-[-1%]';
  const subHeaderStyle =
    'mb-[32px] flex justify-center flex-wrap max-w-[544px] text-center text-[20px] leading-[160%] font-medium tracking-[-0.5%] md:mb-[80px] md:text-left';

  return (
    <section className="flex min-h-[375px] w-full flex-col items-center justify-center bg-gradient-to-b from-white via-[#f4effe] to-[#f4effe] p-8">
      <div className="flex w-full max-w-[736px] flex-col items-center text-center">
        <header>
          {hasAnimated && (
            <>
              <AnimatedText text={sectionTitle} as="h3" className={headerStyle} />
              <AnimatedText text={sectionDescription} as="p" className={subHeaderStyle} />
            </>
          )}
        </header>

        <Testimonial testimonial={testimonials[currentTestimonialIndex]} />

        <div className="mt-6 flex items-center justify-center gap-2">
          {testimonials.map((testimonial, index) => (
            <Avatar
              key={testimonial.id ?? index}
              avatar={testimonial.avatar}
              isActive={currentTestimonialIndex === index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
