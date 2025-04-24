import purpleHeart from '../../assets/icons/purple-heart.svg';

export const HeartButton = () => {
  const buttonClasses = [
    'group absolute top-4 right-4 z-10 cursor-pointer rounded-full border border-[#EAECF4] p-2 opacity-80',
    'hover:border-[#8B8AFF]',
    'focus:border-[#8B8AFF] focus:bg-[#AFABF0]',
    'active:border-[#8B8AFF] active:bg-[#564DFF]',
  ].join(' ');

  const iconClasses =
    'relative z-10 h-[24px] w-[24px] group-active:filter group-active:brightness-0 group-active:invert';

  return (
    <button className={buttonClasses}>
      <img src={purpleHeart} alt="purple heart icon" className={iconClasses} />
    </button>
  );
};
