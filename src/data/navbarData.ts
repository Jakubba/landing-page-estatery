import logo from '../assets/icons/purple-house.svg';
import { NavbarData } from '../components/Navbar/Navbar.types';
export const navbarData: NavbarData = {
  loginLink: '/login',
  signUpLink: '/sign-up',
  loginText: 'Login',
  signUpText: 'Sign Up',
  menuItems: [
    { name: 'Rent', path: '/rent' },
    { name: 'Buy', path: '/buy' },
    { name: 'Sell', path: '/sell' },
    { name: 'Manage Property', path: '/manage-property' },
    { name: 'Resources', path: '/resources' },
  ],
  logoSrc: logo,
  logoText: 'Estatery',
};
