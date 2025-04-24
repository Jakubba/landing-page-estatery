import React, { useState } from 'react';
import { TabButton } from '../TabButton/TabButton';
import { ListingSwiper } from '../ListingSwiper/ListingSwiper';

interface TabSelectorProps {
  heading: string;
  description: string;
}
import { houseListings, apartmentListings } from '../../data/listingsData';
export const TabSelector: React.FC<TabSelectorProps> = ({ heading, description }) => {
  const [activeTab, setActiveTab] = useState<'houses' | 'apartments'>('houses');
  return (
    <section className="flex w-full max-w-[1120px] flex-col items-center justify-center p-[32px]">
      <div className="mb-[32px] flex items-center justify-between gap-4 rounded-lg border border-[#F3F3F7] bg-[#FAF9FF] p-4">
        <TabButton
          label="Houses"
          isActive={activeTab === 'houses'}
          onClick={() => setActiveTab('houses')}
        />
        <TabButton
          label="Apartments"
          isActive={activeTab === 'apartments'}
          onClick={() => setActiveTab('apartments')}
        />
      </div>

      <h2 className="mb-[24px] max-w-[544px] text-center text-4xl leading-[140%] font-bold tracking-[-1%]">
        {heading}
      </h2>
      <p className="mb-[48px] text-center text-base leading-[160%] font-medium">{description}</p>

      <div className="relative min-h-[360px] w-full">
        {activeTab === 'houses' && <ListingSwiper listings={houseListings} />}
        {activeTab === 'apartments' && <ListingSwiper listings={apartmentListings} />}
      </div>
    </section>
  );
};
