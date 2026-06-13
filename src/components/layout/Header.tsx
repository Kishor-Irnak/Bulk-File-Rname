'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { label: 'Home', href: '/' },
    { label: 'How it works', href: '/#how-it-works' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="BulkRenameTool Home">
          <Image src="/apple-touch-icon.png" alt="BulkRenameTool logo" width={24} height={24} className="rounded-md" />
          <span className="font-semibold text-xl tracking-tight text-gray-900 dark:text-white">
            BulkRenameTool
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                pathname === link.href ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center md:hidden gap-2">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-lg">
          <nav className="flex flex-col px-4 py-6 space-y-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium px-4 py-2 rounded-lg transition-colors ${
                  pathname === link.href
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
