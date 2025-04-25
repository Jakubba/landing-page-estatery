import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, to }) => {
  const baseStyle =
    'cursor-pointer text-center text-base px-4 py-2 transition-all duration-300 ease-in-out';

  const variantStyles: { [key in 'primary' | 'secondary']: string } = {
    primary:
      'min-w-max rounded-lg border-2 border-[#D6D8E5] text-black font-bold text-[16px] leading-[150%] py-3 px-8 hover:border-[#6851FF] focus:border-[#6851FF] focus:text-[#6851FF] active:border-[#2511AE] active:text-[#2511AE] disabled:border-[#717788] disabled:text-[#717788] disabled:cursor-not-allowed',
    secondary:
      'min-w-max rounded-lg text-white font-bold text-[16px] leading-[150%] border-2 border-[#6851FF] bg-[#6851FF] py-3 px-8 hover:bg-[#8B8AFF] focus:border-[#3118D6] focus:bg-[#6851FF] active:bg-[#3D1EFE] active:border-[#3D1EFE] disabled:bg-[#B5B8CB] disabled:border-[#B5B8CB] disabled:cursor-not-allowed',
  };

  const buttonClass = `${baseStyle} ${variantStyles[variant]}`;

  return to ? (
    <Link to={to} className={`block ${buttonClass}`}>
      {children}
    </Link>
  ) : (
    <button className={`block ${buttonClass}`} disabled>
      {children}
    </button>
  );
};

export default Button;
