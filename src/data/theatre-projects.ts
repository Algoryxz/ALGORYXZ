import { projects, type Project } from './projects';

export type SeatStatus = 'ACTIVE' | 'CONCEPT' | 'RESERVED' | 'PREMIUM';

export interface TheatreSeatData {
  id: string; // '000', '001', '002', '003', etc., or 'LODGE'
  row: 'A' | 'B' | 'C' | 'REAR';
  seatNumber: string; // 'A2', 'B3', etc.
  status: SeatStatus;
  category: string;
  label: string;
  shortDescription: string;
  seatBackType: 'structure' | 'someone' | 'business' | 'reserved' | 'lodge';
  screenHeroImage?: string;
  projectHref?: string;
  liveUrl?: string;
  canonicalProject?: Project;
}

export const theatreSeats: TheatreSeatData[] = [
  {
    id: '000',
    row: 'B',
    seatNumber: 'B3',
    status: 'ACTIVE',
    category: 'Studio Architecture',
    label: 'Algoryxz Studio Platform',
    shortDescription: 'The foundational digital architecture, engineering system, and archive for Algoryxz.',
    seatBackType: 'structure',
    screenHeroImage: '/assets/projects/000-hero.svg',
    projectHref: '/work/000',
    liveUrl: 'https://algoryxz.com',
    canonicalProject: projects.find((p) => p.number === '000')
  },
  {
    id: '001',
    row: 'A',
    seatNumber: 'A2',
    status: 'CONCEPT',
    category: 'Celebrations',
    label: 'The Courtyard Wedding Portal',
    shortDescription: 'An editorial celebration experience with bespoke itinerary and living memories.',
    seatBackType: 'someone',
    screenHeroImage: '/assets/lab/monsoon_vows_memory.jpg',
    projectHref: '/work/001',
    canonicalProject: projects.find((p) => p.number === '001')
  },
  {
    id: '002',
    row: 'A',
    seatNumber: 'A4',
    status: 'CONCEPT',
    category: 'Business & Brand',
    label: 'Bhubaneswar Artisan Roastery',
    shortDescription: 'A high-speed digital storefront and interactive menu for specialty coffee.',
    seatBackType: 'business',
    screenHeroImage: '/assets/projects/002-hero.svg',
    projectHref: '/work/002',
    canonicalProject: projects.find((p) => p.number === '002')
  },
  {
    id: '003',
    row: 'C',
    seatNumber: 'C1',
    status: 'RESERVED',
    category: 'Celebrations',
    label: 'Private Commission Slot',
    shortDescription: 'Production slot reserved for upcoming celebration portal.',
    seatBackType: 'reserved'
  },
  {
    id: '004',
    row: 'C',
    seatNumber: 'C2',
    status: 'RESERVED',
    category: 'Intimate Keepsakes',
    label: 'Editorial Anniversary Archive',
    shortDescription: 'Production slot reserved for romantic timeline portal.',
    seatBackType: 'reserved'
  },
  {
    id: '005',
    row: 'C',
    seatNumber: 'C4',
    status: 'RESERVED',
    category: 'Creators & Culture',
    label: 'Independent Creator Portfolio',
    shortDescription: 'Production slot reserved for photography monograph experience.',
    seatBackType: 'reserved'
  },
  {
    id: '006',
    row: 'C',
    seatNumber: 'C5',
    status: 'RESERVED',
    category: 'Custom Systems',
    label: 'Operational Platform Engine',
    shortDescription: 'Production slot reserved for booking and operational interface.',
    seatBackType: 'reserved'
  }
];

export const premiumLodgeData = {
  id: 'LODGE',
  row: 'REAR' as const,
  seatNumber: 'LODGE 01',
  status: 'PREMIUM' as const,
  category: 'Future Client Commission',
  label: 'Reserved For What\'s Next',
  seatBackType: 'lodge' as const,
  title: 'YOUR PROJECT COULD SCREEN HERE.',
  subtitle: 'The best seat in the house is still empty.',
  copy: 'Bring the idea; we\'ll build the world around it. Independent design and digital engineering from Bhubaneswar.',
  ctaText: 'START A PROJECT',
  ctaHref: '/contact'
};
