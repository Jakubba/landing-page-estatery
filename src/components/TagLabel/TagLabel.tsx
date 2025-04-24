import React from 'react';
import stars from '../../assets/icons/icon-white-stars.svg';
import { TagLabelProps } from './TagLabel.types';

export const TagLabel = ({ label }: TagLabelProps) => (
  <div className="absolute top-[180px] left-[-1rem]">
    <div className="purpleribbon flex items-center gap-2 rounded-lg bg-[#6851FF] px-4 py-2">
      <img className="h-[16px] w-[16px]" src={stars} alt="stars icon" />
      <span className="text-xs font-bold text-white">{label}</span>
    </div>
  </div>
);
