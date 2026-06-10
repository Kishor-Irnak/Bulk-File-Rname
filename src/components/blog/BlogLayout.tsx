// Server Component — NO 'use client' directive
// JSON-LD schema renders in static HTML, not JS bundle, so Googlebot parses it on first crawl
import React from 'react';
import Link from 'next/link';
import BlogJsonLd from '@/components/seo/BlogJsonLd';
import { blogPosts, BlogPost } from '@/lib/blog';
import CopyLinkButton from '@/components/blog/CopyLinkButton';

type BlogLayoutProps = {
  title: string;
  description: string;
  date: string;
  publishedDate: string;
  modifiedDate?: string;
  readTime: string;
  slug: string;
  children: React.ReactNode;
};

export default function BlogLayout({ title, description, date, publishedDate, modifiedDate, readTime, slug, children }: BlogLayoutProps) {
  const currentPost = blogPosts.find(p => p.slug === slug);
  const relatedPosts: BlogPost[] = currentPost
    ? (currentPost.relatedSlugs
        .map(s => blogPosts.find(p => p.slug === s))
        .filter(Boolean) as BlogPost[])
    : [];

  const canonicalUrl = `https://bulkrenametool.com/blog/${slug}`;

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* JSON-LD Article Schema — renders in static HTML for Googlebot */}
      <BlogJsonLd
        title={title}
        description={description}
        publishedDate={publishedDate}
        modifiedDate={modifiedDate}
        url={canonicalUrl}
        readTime={readTime}
      />

      {/* Breadcrumb */}
      <nav className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-8" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3" itemScope itemType="https://schema.org/BreadcrumbList">
          <li className="inline-flex items-center" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/" className="hover:text-gray-900 dark:hover:text-white transition-colors" itemProp="item">
              <span itemProp="name">Home</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <div className="flex items-center">
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-gray-900 dark:hover:text-white transition-colors" itemProp="item">
                <span itemProp="name">Blog</span>
              </Link>
              <meta itemProp="position" content="2" />
            </div>
          </li>
        </ol>
      </nav>

      <div className="mb-12">
        <div className="flex items-center gap-4 text-sm text-blue-600 dark:text-blue-400 font-medium mb-4">
          <time dateTime={publishedDate}>{date}</time>
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

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 not-prose">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Related Guides</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedPosts.map(post => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block p-5 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-sm transition-all"
                  >
                    <span className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-2 block">{post.readTime}</span>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                      {post.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Internal Link Back to Tool — key for passing PageRank to homepage */}
          <div className="mt-10 not-prose p-6 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Ready to rename your files? The <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">free bulk file renamer</Link> runs entirely in your browser — no software, no signup, 100% private.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/" className="text-xs text-blue-600 dark:text-blue-400 hover:underline">→ Bulk rename files online</Link>
              <Link href="/" className="text-xs text-blue-600 dark:text-blue-400 hover:underline">→ Batch rename tool (free)</Link>
              <Link href="/" className="text-xs text-blue-600 dark:text-blue-400 hover:underline">→ Online bulk file renamer</Link>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-blue-50 dark:bg-blue-900/30 rounded-2xl border border-blue-100 dark:border-blue-800 text-center not-prose">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Ready to bulk rename your files?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Rename files safely, privately, and instantly. No software download. No signup.</p>
            <Link href="/" className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all">
              Try the Free Bulk Rename Tool →
            </Link>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-64 flex-shrink-0 space-y-8 lg:sticky lg:top-24 h-fit">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white mb-4">Share this article</h3>
            <div className="flex gap-4">
              <CopyLinkButton />
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="p-4 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 rounded-xl text-center">
            <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Free Bulk File Renamer</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Rename files in your browser — no software needed.</p>
            <Link href="/" className="inline-block w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
              Try It Free
            </Link>
          </div>

          {/* Sidebar internal links */}
          <div className="p-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">More Guides</h3>
            <ul className="space-y-2">
              <li><Link href="/blog/how-to-bulk-rename-files-online" className="text-xs text-blue-600 dark:text-blue-400 hover:underline leading-tight block">How to Bulk Rename Files Online</Link></li>
              <li><Link href="/blog/bulk-rename-files-for-photographers" className="text-xs text-blue-600 dark:text-blue-400 hover:underline leading-tight block">Bulk Rename Photos for Photographers</Link></li>
              <li><Link href="/blog/batch-rename-windows-alternative" className="text-xs text-blue-600 dark:text-blue-400 hover:underline leading-tight block">Free Batch Rename Tool Alternative</Link></li>
              <li><Link href="/blog/how-to-rename-100-files-at-once" className="text-xs text-blue-600 dark:text-blue-400 hover:underline leading-tight block">Rename 100 Files at Once</Link></li>
              <li><Link href="/blog/bulk-rename-files-for-developers" className="text-xs text-blue-600 dark:text-blue-400 hover:underline leading-tight block">Bulk Rename for Developers</Link></li>
            </ul>
          </div>
        </aside>
      </div>
    </article>
  );
}
