import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for BulkRenameTool. We don\'t upload, store, or sell your files.',
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white mb-8">
        Privacy Policy
      </h1>
      
      <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-gray-600 dark:text-gray-300">
        <p className="font-semibold">Last Updated: January 2024</p>
        
        <p>
          At BulkRenameTool, your privacy is our top priority. Our tool is designed specifically to ensure that your files remain under your control at all times.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-12 mb-4">
          Local Processing
        </h2>
        <p>
          <strong>No files are collected, uploaded, or stored on our servers.</strong> All file processing, renaming, and ZIP creation happens locally on your device within your web browser. Your files never transit through our network.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-12 mb-4">
          Data Collection
        </h2>
        <p>
          We do not track user data, and we do not require any account creation. We use standard anonymous analytics (Google Analytics) to understand basic usage statistics (such as page views or which tools are most popular). This data is anonymized and cannot be linked back to you personally.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-12 mb-4">
          Cookies
        </h2>
        <p>
          We do not use any cookies except for those required by Google Analytics.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-12 mb-4">
          Data Sharing
        </h2>
        <p>
          Since we do not collect any personal data or files, there is absolutely no data to sell or share with third parties.
        </p>
      </div>
    </div>
  );
}
