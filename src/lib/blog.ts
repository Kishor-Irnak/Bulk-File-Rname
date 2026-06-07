export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-bulk-rename-files-online',
    title: 'How to Bulk Rename Files Online in 3 Steps (Free)',
    description: 'Learn how to bulk rename hundreds of files online instantly. No software needed. Works in your browser. Free.',
    date: 'January 1, 2024',
    readTime: '5 min read'
  },
  {
    slug: 'bulk-rename-files-for-photographers',
    title: "Bulk Rename Photos Online: A Photographer's Guide",
    description: 'Stop renaming IMG_1234.jpg one by one. Batch rename hundreds of photos in seconds. Free tool, works in browser.',
    date: 'January 5, 2024',
    readTime: '6 min read'
  },
  {
    slug: 'batch-rename-windows-alternative',
    title: 'Best Free Batch Rename Tool (No Download Required)',
    description: 'Looking for a batch rename tool without installing software? Rename files in your browser instantly. 100% free.',
    date: 'January 10, 2024',
    readTime: '4 min read'
  },
  {
    slug: 'how-to-rename-100-files-at-once',
    title: 'How to Rename 100 Files at Once (Online, No Software)',
    description: 'Rename 100 or 1000 files at once without any software. Our free online tool handles any number of files in seconds.',
    date: 'January 15, 2024',
    readTime: '5 min read'
  },
  {
    slug: 'bulk-rename-files-for-developers',
    title: "Bulk Rename Files Online: Developer's Workflow Guide",
    description: 'Developers: rename project files, clean up codebases, and organize assets in bulk. Free online tool with regex support.',
    date: 'January 20, 2024',
    readTime: '7 min read'
  }
];
