import logo from '../assets/icons/purple-house.svg';
import { NavbarData } from '../components/Navbar/Navbar.types';
export const navbarData: NavbarData = {
  loginLink: '/',
  signUpLink: '/',
  loginText: 'Login',
  signUpText: 'Sign Up',
  menuItems: [
    { name: 'Rent', path: '/' },
    { name: 'Buy', path: '/' },
    { name: 'Sell', path: '/' },
    { name: 'Manage Property', path: '/' },
    { name: 'Resources', path: '/' },
  ],
  logoSrc: logo,
  logoText: 'Estatery',
};
