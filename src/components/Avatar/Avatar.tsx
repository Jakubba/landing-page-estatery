import React from 'react';
import { AvatarProps } from './Avatar.types';
const Avatar = ({ avatar, isActive }: AvatarProps) => (
  <div className="avatar relative mx-[10px] flex inline-block h-[60px] w-[60px] items-center justify-center">
    {isActive && <span className="loader"></span>}
    <img
      className="relative z-20 h-[60px] w-[60px] rounded-full border border-2 border-[transparent] bg-[#D6D8E5]"
      src={avatar}
      alt="Avatar"
    />
  </div>
);

export default Avatar;
