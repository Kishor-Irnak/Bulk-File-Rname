import type { MetadataRoute } from 'next';

// Required for Next.js static export (output: 'export')
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://bulkrenametool.com/sitemap.xml',
    host: 'https://bulkrenametool.com',
  };
}
