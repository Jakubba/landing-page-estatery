import React from 'react';
import { StatItemProps } from './StatItem.types';

const statsStyle = 'mb-1 text-[32px] leading-[125%] font-bold tracking-[-0.01em] text-[#6851FF]';
const textStyle = 'text-[16px] leading-[150%] font-medium tracking-normal text-[#7B8191]';

export const StatItem: React.FC<StatItemProps> = ({ stat }) => (
  <li className="border-l-[3px] border-[#D6D8E5] pl-4">
    <h3 className={statsStyle}>{stat.value}</h3>
    <p className={textStyle}>{stat.label}</p>
  </li>
);
