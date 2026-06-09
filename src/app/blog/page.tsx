import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'File Renaming Guides & Tips',
  description: 'Guides, tutorials, and tips on bulk renaming files online. Learn how to batch rename photos, rename 100 files at once, and use regex for file renaming — all free.',
  alternates: {
    canonical: 'https://bulkrenametool.com/blog'
  }
};

export default function BlogList() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white mb-6">
          File Renaming Guides &amp; Tips
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Learn how to bulk rename files, batch rename photos, and automate repetitive file organization tasks — all using our free online bulk rename tool.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col h-full hover:shadow-md hover:border-blue-300 dark:hover:border-blue-800 transition-all">
            <div className="flex items-center gap-3 text-xs font-medium text-gray-500 dark:text-gray-400 mb-4">
              <span className="text-blue-600 dark:text-blue-400">{post.readTime}</span>
              <span>•</span>
              <time dateTime={post.publishedDate}>{post.date}</time>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {post.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
              {post.description}
            </p>
            <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-auto flex items-center gap-1 group-hover:gap-2 transition-all">
              Read article <span aria-hidden="true">→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
