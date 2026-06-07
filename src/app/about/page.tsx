import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about BulkRenameTool, the free, private, and fast way to batch rename files online.',
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white mb-8">
        About BulkRenameTool
      </h1>
      
      <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-gray-600 dark:text-gray-300">
        <p>
          BulkRenameTool was built with a simple mission: to provide the fastest, safest, and easiest way to rename multiple files at once.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-12 mb-4">
          Why we built this
        </h2>
        <p>
          Most desktop file renaming tools are clunky, require installation, or and are restricted to specific operating systems. On the other hand, many online tools force you to upload your files to their servers, compromising your privacy and taking forever on slow connections.
        </p>
        <p>
          We thought there should be a better way. Thanks to modern web technologies, we've built a tool that processes everything locally in your browser. 
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-12 mb-4">
          100% Privacy Guarantee
        </h2>
        <p>
          When you use BulkRenameTool, <strong>your files never leave your device</strong>. We don't have servers that process your files, we don't store them, and we certainly don't look at them. The renaming and zipping process happens entirely within your web browser using JavaScript.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-12 mb-4">
          Free Forever
        </h2>
        <p>
          This utility is provided completely free of charge. No accounts, no paywalls, no limits on how many files you can rename.
        </p>
      </div>
    </div>
  );
}
