import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About BulkRenameTool | Free Bulk File Renamer',
  description: 'Learn about BulkRenameTool — the free, private, and fast online bulk file renamer. No software download, no uploads, no signup. Built for photographers, developers, and anyone who renames files.',
  alternates: {
    canonical: 'https://bulkrenametool.com/about'
  }
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white mb-8">
        About BulkRenameTool
      </h1>

      <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-gray-600 dark:text-gray-300">
        <p>
          <strong>BulkRenameTool</strong> is a free online bulk file renamer built with a simple mission: to provide the fastest, safest, and easiest way to rename multiple files at once — without downloading any software. Whether you need to rename 10 files or 10,000 files, our <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">free bulk rename tool</Link> handles it instantly in your browser.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-12 mb-4">
          Why We Built This
        </h2>
        <p>
          Most desktop file renaming tools are clunky, require installation, and are restricted to specific operating systems. On the other hand, many &quot;online&quot; tools force you to upload your files to their servers, compromising your privacy and taking forever on slow connections.
        </p>
        <p>
          We thought there should be a better way. Thanks to modern browser APIs — specifically the Web File API and WebAssembly-compiled JSZip — we built a batch rename tool that processes everything locally in your browser. Your files never leave your device. Not even a single byte is transmitted to any server.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-12 mb-4">
          Who Is It For?
        </h2>
        <p>BulkRenameTool is used by people from all walks of life who deal with large numbers of files:</p>
        <ul>
          <li><strong>Photographers</strong> who need to <Link href="/blog/bulk-rename-files-for-photographers" className="text-blue-600 dark:text-blue-400 hover:underline">bulk rename photos</Link> from generic camera names like IMG_1234.jpg into descriptive client delivery names.</li>
          <li><strong>Developers</strong> who need to <Link href="/blog/bulk-rename-files-for-developers" className="text-blue-600 dark:text-blue-400 hover:underline">bulk rename project files</Link> using regex patterns for case conversion or namespace cleanup.</li>
          <li><strong>Office workers</strong> who need to standardize hundreds of invoice PDFs or scanned documents with consistent naming conventions.</li>
          <li><strong>Content creators</strong> who need to batch rename video clips, audio stems, or graphic assets before publishing or delivering to clients.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-12 mb-4">
          100% Privacy Guarantee
        </h2>
        <p>
          When you use BulkRenameTool, <strong>your files never leave your device</strong>. We do not have servers that process your files, we do not store them, and we certainly do not inspect them. The entire renaming and ZIP packaging process happens within your web browser using JavaScript and the Web File API. You can verify this yourself: load the tool, disconnect from the internet, and it still works perfectly.
        </p>
        <p>
          Read our full <Link href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">privacy policy</Link> for complete technical details.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-12 mb-4">
          Free Forever
        </h2>
        <p>
          This bulk file renamer is provided completely free of charge. No accounts, no paywalls, no freemium limits. Rename 1 file or rename 10,000 files — there are no restrictions. Our goal is to make a genuinely useful tool freely accessible to everyone who needs to rename files in bulk.
        </p>

        <div className="mt-12 p-8 bg-blue-50 dark:bg-blue-900/30 rounded-2xl border border-blue-100 dark:border-blue-800 text-center not-prose">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Ready to bulk rename your files?</h3>
          <Link href="/" className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all">
            Try BulkRenameTool Free →
          </Link>
        </div>
      </div>
    </div>
  );
}
