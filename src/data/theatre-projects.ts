import { projects, type Project } from './projects';

export type SeatStatus = 'ACTIVE' | 'CONCEPT' | 'RESERVED' | 'PREMIUM';

export interface TheatreSeatData {
  id: string; // '000', '001', '002', '003', etc., or 'LODGE'
  row: string; // 'A', 'B', 'C', or 'REAR'
  seatNumber: string; // 'A1', 'B2', etc.
  status: SeatStatus;
  category: string;
  label: string;
  shortDescription: string;
  kind?: 'structure' | 'someone' | 'business';
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
    shortDescription: 'The foundational public digital studio platform, engineering system, and archive for Algoryxz.',
    kind: 'structure',
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
    shortDescription: 'An editorial multi-day celebration experience with bespoke itinerary and real-time guest RSVP.',
    kind: 'someone',
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
    shortDescription: 'A modern, high-speed digital storefront and interactive menu for a local specialty coffee café.',
    kind: 'business',
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
    shortDescription: 'Reserved for upcoming matrimonial or celebratory digital archives.'
  },
  {
    id: '004',
    row: 'C',
    seatNumber: 'C2',
    status: 'RESERVED',
    category: 'Intimate Keepsakes',
    label: 'Editorial Anniversary Archive',
    shortDescription: 'Reserved for romantic or anniversary timeline portals.'
  },
  {
    id: '005',
    row: 'C',
    seatNumber: 'C4',
    status: 'RESERVED',
    category: 'Creators & Culture',
    label: 'Independent Creator Portfolio',
    shortDescription: 'Reserved for photography or artist monograph experiences.'
  },
  {
    id: '006',
    row: 'C',
    seatNumber: 'C5',
    status: 'RESERVED',
    category: 'Custom Systems',
    label: 'Operational Platform Engine',
    shortDescription: 'Reserved for booking and enterprise operational interfaces.'
  }
];

export const premiumLodgeData = {
  id: 'LODGE',
  row: 'REAR',
  seatNumber: 'LODGE 01',
  status: 'PREMIUM' as const,
  category: 'Future Client Commission',
  title: 'YOUR PROJECT COULD SCREEN HERE.',
  subtitle: 'The best seat in the house is still empty.',
  copy: "Bring the idea; we'll build the world around it. Independent design and digital engineering from Bhubaneswar.",
  ctaText: 'START A PROJECT',
  ctaHref: '/contact'
};
