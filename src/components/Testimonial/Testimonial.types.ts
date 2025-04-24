export interface TestimonialProps {
  testimonial: {
    id: string;
    text: string;
    author: string;
    role: string;
  };
  className?: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
  avatar: string;
}
