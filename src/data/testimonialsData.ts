import avatar1 from '../assets/images/avatars/avatar1.png';
import avatar2 from '../assets/images/avatars/avatar2.png';
import avatar3 from '../assets/images/avatars/avatar3.png';
import { Testimonial } from '../components/Testimonial/Testimonial.types';

export const testimonialHeader = {
  sectionTitle: 'Testimonials',
  sectionDescription: 'See what our property managers, landlords, and tenants have to say',
};

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    text: 'Estatery is the platform I go to on almost a daily basis for 2nd home and vacation condo shopping, or to just look at dream homes in new areas. Thanks for fun home shopping and comparative analyzing, Estatery!',
    author: 'Mira Culos,',
    role: 'Renter',
    avatar: avatar1,
  },
  {
    id: 'testimonial-2',
    text: "I check Estatery almost every day — whether I'm seriously house hunting or just daydreaming about future getaways. It makes exploring new locations and comparing properties incredibly easy and enjoyable.",
    author: 'Mark Brown,',
    role: 'Renter',
    avatar: avatar2,
  },
  {
    id: 'testimonial-3',
    text: "Estatery turns home shopping into a daily delight. Whether I'm planning for the future or just exploring what's out there, I always find something exciting and new.",
    author: 'Jake White,',
    role: 'Renter',
    avatar: avatar3,
  },
];
