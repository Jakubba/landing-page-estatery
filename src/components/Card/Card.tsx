import React from 'react';
import { Link } from 'react-router-dom';
import { CardProps } from './Card.types';
import { TagLabel } from './../TagLabel/TagLabel';
import { HeartButton } from './../HeartButton/HeartButton';

export const Card = ({
  className = '',
  to,
  tagLabel,
  price,
  priceNote = '/month',
  title,
  location,
  imageSrc,
  showHeartButton = false,
}: CardProps) => {
  const Wrapper: React.ElementType = to ? Link : 'section';

  const wrapperProps = {
    ...(to ? { to } : {}),
    className: `block ${className} relative cursor-pointer ml-4 w-max h-max `,
  };

  return (
    <Wrapper {...wrapperProps}>
      <div className="card relative flex max-w-[300px] flex-col overflow-hidden rounded-lg transition-all duration-300 ease-in-out hover:shadow-xl">
        <div className="relative h-[200px] w-full overflow-hidden">
          <img src={imageSrc} alt={title} className="absolute h-full w-full object-cover" />
        </div>
        <div className="relative flex flex-col items-start rounded-b-lg border border-[#EAECF4] bg-white px-6 pt-8 pb-6">
          {showHeartButton && <HeartButton />}

          <div className="mb-2 flex items-center gap-2 text-base text-[#808494]">
            <span className="text-2xl font-extrabold text-[#6851FF]">{price}</span>
            {priceNote && <span>{priceNote}</span>}
          </div>
          <p className="text-start text-2xl font-bold">{title}</p>
          <p className="text-start text-base text-[#808494]">{location}</p>
        </div>
      </div>
      {tagLabel && <TagLabel label={tagLabel} />}{' '}
    </Wrapper>
  );
};
