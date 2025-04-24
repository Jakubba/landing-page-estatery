import apartament1 from '../assets/images/image-apartament-1.png';
import apartament2 from '../assets/images/image-apartament-2.png';
import apartament3 from '../assets/images/image-apartament-3.png';
import house1 from '../assets/images/image-house-1.png';
import house2 from '../assets/images/image-house-2.png';
import house3 from '../assets/images/image-house-3.png';
import { ListingItem } from '../components/ListingSwiper/ListingSwiper.types';

export const houseListings: ListingItem[] = [
  {
    to: '/house/1',
    tagLabel: 'House',
    price: '$2,140',
    priceNote: '/month',
    title: 'Palm Harbor',
    location: '2699 Green Valley, Highland Lake, FL',
    imageSrc: house1,
  },
  {
    to: '/house/2',
    tagLabel: 'House',
    price: '$2,130',
    priceNote: '/month',
    title: 'Palm Harbor',
    location: '2699 Green Valley, Highland Lake, FL',
    imageSrc: house2,
  },
  {
    to: '/house/3',
    tagLabel: 'House',
    price: '$2,120',
    priceNote: '/month',
    title: 'Palm Harbor',
    location: '2699 Green Valley, Highland Lake, FL',
    imageSrc: house3,
  },
];

export const apartmentListings: ListingItem[] = [
  {
    to: '/apartment/1',
    tagLabel: 'Apartment',
    price: '$1,850',
    priceNote: '/month',
    title: 'Greenwood Heights',
    location: '8900 Elm St, Boston, MA',
    imageSrc: apartament1,
  },
  {
    to: '/apartment/2',
    tagLabel: 'Apartment',
    price: '$1,950',
    priceNote: '/month',
    title: 'Greenwood Heights',
    location: '8900 Elm St, Boston, MA',
    imageSrc: apartament2,
  },
  {
    to: '/apartment/3',
    tagLabel: 'Apartment',
    price: '$1,900',
    priceNote: '/month',
    title: 'Greenwood Heights',
    location: '8900 Elm St, Boston, MA',
    imageSrc: apartament3,
  },
];
