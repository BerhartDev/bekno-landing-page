const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const serviceImages = {
  hero: `${basePath}/services/hero.jpg`,
  website: `${basePath}/services/website.jpg`,
  landing: `${basePath}/services/landing.jpg`,
  ecommerce: `${basePath}/services/ecommerce.jpg`,
  cms: `${basePath}/services/cms.jpg`,
  seo: `${basePath}/services/seo.jpg`,
  systems: `${basePath}/services/systems.jpg`,
} as const;

export type ServiceImageId = keyof typeof serviceImages;

/** Unsplash License allows commercial use. These photos illustrate a service. They are not client work. */
export const serviceImageCredits: Record<ServiceImageId, { source: string; license: string }> = {
  hero: {
    source: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    license: 'https://unsplash.com/license',
  },
  website: {
    source: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58',
    license: 'https://unsplash.com/license',
  },
  landing: {
    source: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a',
    license: 'https://unsplash.com/license',
  },
  ecommerce: {
    source: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da',
    license: 'https://unsplash.com/license',
  },
  cms: {
    source: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    license: 'https://unsplash.com/license',
  },
  seo: {
    source: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3',
    license: 'https://unsplash.com/license',
  },
  systems: {
    source: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
    license: 'https://unsplash.com/license',
  },
};
