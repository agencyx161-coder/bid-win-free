import watchAuction from '@/assets/watch-auction.jpg';
import artAuction from '@/assets/art-auction.jpg';
import cameraAuction from '@/assets/camera-auction.jpg';

export interface Auction {
  id: string;
  title: string;
  description: string;
  currentBid: number;
  reservePrice?: number;
  reserveMet: boolean;
  endDate: Date;
  imageUrl: string;
  bidCount: number;
  watchingCount: number;
  isWatched?: boolean;
  category: string;
}

const now = new Date();

export const sampleAuctions: Auction[] = [
  {
    id: '1',
    title: 'Rolex Submariner Date - Vintage 1976',
    description: 'Rare vintage Rolex Submariner in excellent condition with original papers and box. A true collector\'s piece.',
    currentBid: 12500,
    reservePrice: 15000,
    reserveMet: false,
    endDate: new Date(now.getTime() + 2 * 60 * 60 * 1000), // 2 hours from now
    imageUrl: watchAuction,
    bidCount: 23,
    watchingCount: 156,
    isWatched: true,
    category: 'Watches'
  },
  {
    id: '2',
    title: 'Original Oil Painting - "Sunset Over Provence"',
    description: 'Beautiful 19th century French landscape painting by renowned artist. Authenticated and in pristine condition.',
    currentBid: 8750,
    reservePrice: 8000,
    reserveMet: true,
    endDate: new Date(now.getTime() + 45 * 60 * 1000), // 45 minutes from now
    imageUrl: artAuction,
    bidCount: 17,
    watchingCount: 89,
    category: 'Fine Art'
  },
  {
    id: '3',
    title: 'Leica M3 Camera Collection - Rare Black Paint',
    description: 'Complete vintage Leica M3 camera set with three lenses. Extremely rare black paint finish from 1958.',
    currentBid: 4200,
    reservePrice: 5000,
    reserveMet: false,
    endDate: new Date(now.getTime() + 4 * 60 * 60 * 1000), // 4 hours from now
    imageUrl: cameraAuction,
    bidCount: 31,
    watchingCount: 203,
    category: 'Cameras'
  },
  {
    id: '4',
    title: 'First Edition "To Kill a Mockingbird" - Signed',
    description: 'First edition Harper Lee novel signed by the author. Dust jacket in excellent condition with minor shelf wear.',
    currentBid: 3500,
    reservePrice: 4000,
    reserveMet: false,
    endDate: new Date(now.getTime() + 6 * 60 * 60 * 1000), // 6 hours from now
    imageUrl: watchAuction,
    bidCount: 12,
    watchingCount: 67,
    category: 'Books'
  },
  {
    id: '5',
    title: 'Mid-Century Modern Eames Lounge Chair',
    description: 'Authentic Herman Miller Eames Lounge Chair and Ottoman in black leather. Vintage 1960s piece.',
    currentBid: 2100,
    reservePrice: 2500,
    reserveMet: false,
    endDate: new Date(now.getTime() + 1 * 24 * 60 * 60 * 1000), // 1 day from now
    imageUrl: artAuction,
    bidCount: 8,
    watchingCount: 34,
    category: 'Furniture'
  },
  {
    id: '6',
    title: 'Rare Pokemon Card - Charizard Base Set 1st Edition',
    description: 'PSA 10 graded first edition Charizard from Base Set. Perfect condition with sharp corners and centering.',
    currentBid: 15000,
    reservePrice: 20000,
    reserveMet: false,
    endDate: new Date(now.getTime() + 30 * 60 * 1000), // 30 minutes from now
    imageUrl: cameraAuction,
    bidCount: 45,
    watchingCount: 312,
    isWatched: true,
    category: 'Collectibles'
  }
];

export const categories = [
  'Fine Art', 'Watches', 'Jewelry', 'Collectibles', 'Cameras', 'Books', 'Furniture', 'Antiques'
];