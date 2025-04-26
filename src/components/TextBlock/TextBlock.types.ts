import type { Stat } from '../StatItem/StatItem.types'; 
export type TextData = {
  header: string;
  subHeader: string;
  stats: Stat[]; 
};

export type TextBlockProps = {
  textData: TextData;
};
