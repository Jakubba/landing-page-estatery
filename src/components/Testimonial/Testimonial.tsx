import { TestimonialProps } from './Testimonial.types';
const Testimonial = ({ testimonial, className }: TestimonialProps) => (
  <blockquote className={`mb-[48px] flex flex-col items-center ${className}`}>
    <p className="mb-[32px] text-center text-[20px] leading-[160%] font-medium tracking-[0%]">
      {testimonial.text}
    </p>
    <footer>
      <p className="text-center text-[16px] leading-[150%] font-normal tracking-[0%] text-[#7B8191]">
        <strong className="mr-1 font-bold text-[#000000]">{testimonial.author}</strong>
        {testimonial.role}
      </p>
    </footer>
  </blockquote>
);

export default Testimonial;
