import React from 'react';
import Link from 'next/link';
import { FolderSync } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1 */}
          <div className="space-y-4 flex flex-col">
            <Link href="/" className="flex items-center gap-2" aria-label="BulkRenameTool Home">
              <FolderSync className="w-6 h-6 text-blue-600 dark:text-blue-500" />
              <span className="font-semibold text-xl tracking-tight text-gray-900 dark:text-white">
                BulkRenameTool
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-xs">
              Free online utility to batch rename files instantly.
            </p>
            <div className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-xs font-medium self-start">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Files never leave your browser
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              How it works
            </h3>
            <ol className="space-y-3 text-sm text-gray-600 dark:text-gray-400 list-decimal pl-4">
              <li className="pl-1">Upload your files securely.</li>
              <li className="pl-1">Configure your rename rules.</li>
              <li className="pl-1">Download the renamed files as ZIP.</li>
            </ol>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} BulkRenameTool. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span>Free & Open</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
