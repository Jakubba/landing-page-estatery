import instagramIcon from '../assets/icons/icon-instagram.svg';
import facebookIcon from '../assets/icons/icon-facebook.svg';
import twitterIcon from '../assets/icons/icon-twitter.svg';
import linkedinIcon from '../assets/icons/icon-linkedin.svg';

import { FooterLink } from './../components/FooterNav/FooterNav.types';
import { SocialIcon } from './../components/FooterSocialMedia/FooterSocialMedia.types';

export const footerLinks: FooterLink[] = [
  { name: 'Help Center', path: '/' },
  { name: 'Faq', path: '/' },
  { name: 'Terms & Privacy', path: '/' },
];

export const socialIcons: SocialIcon[] = [
  { icon: facebookIcon, alt: 'Facebook', path: '/' },
  { icon: instagramIcon, alt: 'Instagram', path: '/' },
  { icon: twitterIcon, alt: 'Twitter', path: '/' },
  { icon: linkedinIcon, alt: 'LinkedIn', path: '/' },
];

export interface FooterMeta {
  copyrightText: string;
}

export const footerMeta: FooterMeta = {
  copyrightText: `©${new Date().getFullYear()} Estatery. All rights reserved`,
};
