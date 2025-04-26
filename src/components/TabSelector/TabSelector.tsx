import React, { useState } from 'react';
import { TabButton } from '../TabButton/TabButton';
import { ListingSwiper } from '../ListingSwiper/ListingSwiper';
import { AnimatedText } from '../AnimatedText/AnimatedText';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { TabSelectorProps } from './TabSelector.types';

const headerStyle =
  'flex flex-wrap justify-center mb-[24px] max-w-[544px] text-center text-4xl leading-[140%] font-bold tracking-[-1%]';
const subHeaderStyle =
  'flex flex-wrap justify-center mb-[48px]  max-w-[544px] text-center text-base leading-[160%] font-medium';


export const TabSelector: React.FC<TabSelectorProps> = ({
  heading,
  description,
  houseListings,
  apartmentListings,
}) => {
  const [activeTab, setActiveTab] = useState<'houses' | 'apartments'>('houses');

  const { ref, controls } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="flex w-full max-w-[1120px] flex-col items-center justify-center p-[32px]"
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
        className="mb-[32px] flex items-center justify-between gap-4 rounded-lg border border-[#F3F3F7] bg-[#FAF9FF] p-4"
      >
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
      </motion.div>

      <motion.div initial="hidden" animate={controls} variants={fadeInUp}>
        <AnimatedText text={heading} as="h2" className={headerStyle} />
        <AnimatedText text={description} as="p" className={subHeaderStyle} />
      </motion.div>

      <div className="relative min-h-[360px] w-full">
        {activeTab === 'houses' && <ListingSwiper listings={houseListings} />}
        {activeTab === 'apartments' && <ListingSwiper listings={apartmentListings} />}
      </div>
    </section>
  );
};
