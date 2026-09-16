export type ProjectStatus = 'REAL_CLIENT' | 'CONCEPT_PROJECT' | 'INTERNAL';

export type ProjectCategory = 'Celebrations' | 'Business & Brand' | 'Custom Systems' | 'Studio Architecture';

export interface CaseStudySection {
  title: string;
  content: string;
}

export interface Project {
  number: string;              // e.g. "000", "001"
  slug: string;                // e.g. "000", "001-artisan-cafe"
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  shortDescription: string;
  year: number;
  heroAsset: string;
  liveUrl?: string;
  tags: string[];
  caseStudy?: {
    summary: string;
    challenge: string;
    solution: string;
    deliverables: string[];
  };
}

export const projects: Project[] = [
  {
    number: '000',
    slug: '000',
    title: 'Algoryxz Studio Platform',
    category: 'Studio Architecture',
    status: 'INTERNAL',
    shortDescription: 'The foundational public digital studio platform, engineering system, and catalog for Algoryxz.',
    year: 2026,
    heroAsset: '/assets/projects/000-hero.svg',
    liveUrl: 'https://algoryxz.com',
    tags: ['Astro 5', 'Cloudflare Pages', 'Design Systems', 'Static Engine'],
    caseStudy: {
      summary: 'Project 000 establishes the technical baseline, aesthetic standards, and operational infrastructure of Algoryxz.',
      challenge: 'Build a high-performance, edge-hosted digital presence with zero unnecessary runtime complexity, sub-second global loading, and strict brand governance.',
      solution: 'Constructed an Astro-powered static architecture deploying to Cloudflare Pages edge network, governed by 3-tier semantic tokens and multi-agent operating rules.',
      deliverables: [
        'High-performance static-first studio application',
        '3-tier semantic CSS design token system',
        'Typed static portfolio data model for future releases (001+)',
        'Cloudflare Pages automated deployment pipeline'
      ]
    }
  },
  {
    number: '001',
    slug: '001',
    title: 'The Courtyard Wedding Portal',
    category: 'Celebrations',
    status: 'CONCEPT_PROJECT',
    shortDescription: 'An editorial multi-day celebration experience with bespoke itinerary and real-time guest RSVP.',
    year: 2026,
    heroAsset: '/assets/projects/001-hero.svg',
    tags: ['Celebrations', 'Mobile-First', 'RSVP System', 'Editorial Design'],
    caseStudy: {
      summary: 'A concept project demonstrating the Celebrations lane: multi-event schedule, RSVP collection, and mobile-optimized photo galleries.',
      challenge: 'Create a heartfelt, elegant mobile invitation portal that eliminates messy WhatsApp PDF schedules and tracks event headcounts accurately.',
      solution: 'Designed an editorial typography layout with responsive event timeline and edge-integrated RSVP collection.',
      deliverables: [
        'Multi-day event schedule and Google Maps navigation',
        'Per-event dietary & attendance RSVP collection',
        'Mobile photo gallery with zero egress costs',
        'WhatsApp card preview optimization'
      ]
    }
  },
  {
    number: '002',
    slug: '002',
    title: 'Bhubaneswar Artisan Roastery',
    category: 'Business & Brand',
    status: 'CONCEPT_PROJECT',
    shortDescription: 'A modern, high-speed digital storefront and interactive menu for a local specialty coffee café.',
    year: 2026,
    heroAsset: '/assets/projects/002-hero.svg',
    tags: ['Local Business', 'Menu Engine', 'Edge Fast', 'Local SEO'],
    caseStudy: {
      summary: 'A concept project illustrating the Business & Brand lane: high-conversion local presence with instant tap-to-order routing.',
      challenge: 'Local cafés frequently rely on unsearchable Instagram bios and blurry PDF menus, losing discovery and customer orders.',
      solution: 'Built a 95+ Lighthouse score storefront with categorized search, operating hours indicator, and direct WhatsApp ordering.',
      deliverables: [
        'Instant-loading categorized menu with dietary filters',
        'Google Maps and tap-to-directions integration',
        'Direct WhatsApp order link generator',
        'Lightweight Care-ready content structure'
      ]
    }
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjects(): Project[] {
  return projects;
}
