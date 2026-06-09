export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  publishedDate: string; // ISO 8601 for JSON-LD schema
  readTime: string;
  keywords: string[];
  relatedSlugs: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-bulk-rename-files-online',
    title: 'How to Bulk Rename Files Online in 3 Steps (Free)',
    description: 'Learn how to bulk rename files online in 3 simple steps. Add prefix, suffix, auto-number, find & replace. Works on Windows, Mac. Free online tool. No software download.',
    date: 'January 1, 2024',
    publishedDate: '2024-01-01T00:00:00Z',
    readTime: '5 min read',
    keywords: ['bulk rename files online', 'how to bulk rename', 'batch rename files', 'rename multiple files', 'bulk rename online tool'],
    relatedSlugs: ['bulk-rename-files-for-photographers', 'bulk-rename-files-for-developers']
  },
  {
    slug: 'bulk-rename-files-for-photographers',
    title: 'Bulk Rename Photos for Photographers (Free Online)',
    description: 'Rename 500 photos at once without manual work. Bulk rename for photographers with batch numbering, date formatting, and prefix/suffix. Free. No signup.',
    date: 'January 5, 2024',
    publishedDate: '2024-01-05T00:00:00Z',
    readTime: '6 min read',
    keywords: ['bulk rename photos', 'batch rename images', 'rename photos in bulk', 'bulk photo renaming', 'rename vacation photos'],
    relatedSlugs: ['how-to-bulk-rename-files-online', 'how-to-rename-100-files-at-once']
  },
  {
    slug: 'batch-rename-windows-alternative',
    title: 'Batch Rename Tool (Free Alternative to Desktop Apps)',
    description: 'Free online alternative to desktop batch rename apps. Bulk rename files in your browser instantly. No download, no installation. Works on any device.',
    date: 'January 10, 2024',
    publishedDate: '2024-01-10T00:00:00Z',
    readTime: '4 min read',
    keywords: ['batch rename tool', 'free batch rename', 'batch rename alternative', 'batch rename software', 'bulk rename no software'],
    relatedSlugs: ['how-to-bulk-rename-files-online', 'how-to-rename-100-files-at-once']
  },
  {
    slug: 'how-to-rename-100-files-at-once',
    title: 'Rename 100 Files at Once (No Software Required)',
    description: 'Rename 100, 500, or 1000 files at once online. Sequential numbering, find & replace, case conversion. Free tool. All processing happens in your browser.',
    date: 'January 15, 2024',
    publishedDate: '2024-01-15T00:00:00Z',
    readTime: '5 min read',
    keywords: ['rename 100 files', 'rename multiple files', 'batch rename', 'bulk rename', 'rename 1000 files at once'],
    relatedSlugs: ['how-to-bulk-rename-files-online', 'batch-rename-windows-alternative']
  },
  {
    slug: 'bulk-rename-files-for-developers',
    title: 'Bulk Rename Files for Developers (Regex & Patterns)',
    description: 'Bulk rename files for developers with regex support. Pattern matching, bulk find & replace, case conversion. Free online tool. No account needed.',
    date: 'January 20, 2024',
    publishedDate: '2024-01-20T00:00:00Z',
    readTime: '7 min read',
    keywords: ['bulk rename files developers', 'rename project files', 'regex rename', 'pattern matching rename', 'bulk rename code files'],
    relatedSlugs: ['how-to-bulk-rename-files-online', 'batch-rename-windows-alternative']
  }
];
