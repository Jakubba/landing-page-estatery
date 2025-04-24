import React, { useState, useEffect } from 'react';
import { testimonials, testimonialHeader } from '../../data/testimonialsData';
import Testimonial from '../Testimonial/Testimonial';
import Avatar from '../Avatar/Avatar';

interface TestimonialsSectionProps {
  sectionTitle?: string;
  sectionDescription?: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  sectionTitle = testimonialHeader.sectionTitle,
  sectionDescription = testimonialHeader.sectionDescription,
}) => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex min-h-[375px] w-full flex-col items-center justify-center bg-gradient-to-b from-white via-[#f4effe] to-[#f4effe] p-8">
      <div className="flex w-full max-w-[736px] flex-col items-center text-center">
        <header>
          <h3 className="mb-4 text-[32px] leading-[125%] font-bold tracking-[-0.01em] md:text-[40px] md:leading-[140%] md:tracking-[-1%]">
            {sectionTitle}
          </h3>
          <p className="mb-7 text-[16px] leading-[160%] font-normal md:mb-12">
            {sectionDescription}
          </p>
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
