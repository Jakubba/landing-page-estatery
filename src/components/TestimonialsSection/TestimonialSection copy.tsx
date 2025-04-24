// import { useState, useEffect } from 'react';
// import { testimonials } from '../../data/testimonialsData';
// import Testimonial from '../Testimonial/Testimonial';
// import Avatar from '../Avatar/Avatar';

// const TestimonialsSection = () => {
//   const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState<number>(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="flex min-h-[375px] w-full flex-col items-center justify-center bg-gradient-to-b from-white via-[#f4effe] to-[#f4effe] p-8">
//       <div className="flex w-full max-w-[736px] flex-col items-center justify-center">
//         <header>
//           <h3 className="mb-4 text-center text-[32px] leading-[125%] font-bold tracking-[-0.01em] md:text-[40px] md:leading-[140%] md:tracking-[-1%]">
//             Testimonials
//           </h3>
//           <p className="mb-7 text-center text-[16px] leading-[160%] font-normal md:mb-12">
//             See what our property managers, landlords, and tenants have to say
//           </p>
//         </header>

//         <div className="relative min-h-[310px] w-full md:min-h-[200px]">
//           {testimonials.map((testimonial, index) => (
//             <Testimonial
//               key={index}
//               testimonial={testimonial}
//               className={`absolute inset-0 w-full transition-opacity duration-500 ease-in-out ${
//                 currentTestimonialIndex === index ? 'opacity-100' : 'opacity-0'
//               }`}
//             />
//           ))}
//         </div>

//         <div className="mt-6 flex items-center justify-center gap-2">
//           {testimonials.map((testimonial, index) => (
//             <Avatar
//               key={index}
//               avatar={testimonial.avatar}
//               isActive={currentTestimonialIndex === index}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;
// src/components/TestimonialsSection/TestimonialsSection.tsx