import { ListingItem } from '../ListingSwiper/ListingSwiper.types';
export interface TabSelectorProps {
  heading: string;
  description: string;
  houseListings: ListingItem[];
  apartmentListings: ListingItem[];
}
