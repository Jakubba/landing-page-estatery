import React from 'react';

type Props = {
  isActive: boolean;
  label: string;
  onClick: () => void;
};

export const TabButton: React.FC<Props> = ({ isActive, label, onClick }) => (
  <button
    className={`min-w-[151px] cursor-pointer rounded-lg border px-[8px] py-[12px] text-center align-middle text-lg leading-6 font-bold tracking-tight transition-all duration-300 ${
      isActive
        ? 'border-[#8B8AFF] bg-white text-[#6851FF] hover:border-[#D6D8E5] hover:bg-[#EDEAFF] focus:border-[#6851FF]'
        : 'border-transparent bg-transparent text-[#7B8191] hover:text-[#6851FF] focus:border-[#6851FF]'
    }`}
    onClick={onClick}
    onFocus={onClick}
  >
    {label}
  </button>
);
