import React from 'react';
import { footerMeta } from '../../data/footerData';
import { FooterSocialMedia } from '../FooterSocialMedia/FooterSocialMedia';

export const FooterBottom: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
      <span className="text-[16px] leading-[160%] font-medium text-gray-600">
        {footerMeta?.copyrightText}
      </span>
      <FooterSocialMedia />
    </div>
  );
};
