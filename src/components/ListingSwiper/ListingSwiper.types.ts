export interface ListingItem {
  to: string;
  tagLabel: string;
  price: string;
  priceNote: string;
  title: string;
  location: string;
  imageSrc: string;
}

export interface ListingSwiperProps {
  listings: ListingItem[];
}
