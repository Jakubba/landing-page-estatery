import React from 'react';
import { Card } from '../Card/Card';
import mapa from '../../assets/images/mapa.png';
import house from '../../assets/images/image-apartament-3.png';

export const HeroMapBlock: React.FC = () => (
  <div className="relative z-10 flex w-full p-[32px] md:w-1/2 md:p-0">
    <Card
      className="absolute left-[-6rem] z-10 scale-60 md:top-1/2 md:left-[-3rem] md:-translate-y-1/2 md:scale-100"
      to="/house/1"
      price="$2,140"
      priceNote="/month"
      title="Palm Harbor"
      location="2699 Green Valley, Highland Lake, FL"
      imageSrc={house}
    />
    <img
      src={mapa}
      alt="map representation"
      className="absolute top-1/2 left-1/2 h-full w-full translate-x-[-50%] translate-y-[-50%] object-cover p-[32px] md:p-0"
    />
  </div>
);
