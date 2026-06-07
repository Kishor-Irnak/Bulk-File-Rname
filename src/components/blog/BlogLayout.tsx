'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Share2, Facebook, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';

type BlogLayoutProps = {
  title: string;
  description: string;
  date: string;
  readTime: string;
  children: React.ReactNode;
};

export default function BlogLayout({ title, description, date, readTime, children }: BlogLayoutProps) {
  
  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Breadcrumb */}
      <nav className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-8" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link href="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">Home</Link>
          </li>
          <li>
            <div className="flex items-center">
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-gray-900 dark:hover:text-white transition-colors">Blog</Link>
            </div>
          </li>
        </ol>
      </nav>

      <div className="mb-12">
        <div className="flex items-center gap-4 text-sm text-blue-600 dark:text-blue-400 font-medium mb-4">
          <span>{date}</span>
          <span>•</span>
          <span>{readTime}</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 relative">
        {/* Main Content */}
        <div className="flex-grow prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
          {children}

          {/* CTA */}
          <div className="mt-16 p-8 bg-blue-50 dark:bg-blue-900/30 rounded-2xl border border-blue-100 dark:border-blue-800 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Ready to try it yourself?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Rename your files safely, privately, and instantly.</p>
            <Link href="/" className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all">
              Try BulkRenameTool Free
            </Link>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-64 flex-shrink-0 space-y-8 lg:sticky lg:top-24 h-fit">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white mb-4">Share this article</h3>
            <div className="flex gap-4">
              <button onClick={handleCopyLink} className="p-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors" aria-label="Copy link" title="Copy link">
                <LinkIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
