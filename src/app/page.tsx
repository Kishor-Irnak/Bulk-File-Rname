import React from 'react';
import Link from 'next/link';
import BulkRenamer from '@/components/BulkRenamer';
import { UploadCloud, Settings2, Download, ShieldCheck, Zap, Smartphone, FolderSync } from 'lucide-react';
import JsonLd from '@/components/seo/JsonLd';

export default function Home() {
  return (
    <>
      <JsonLd />
      
      {/* 1. HERO SECTION */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6 animate-fade-in">
          <FolderSync className="w-4 h-4" />
          The smartest way to rename files
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 dark:text-white mb-6">
          Bulk Rename Files Online <br className="hidden md:block"/>
          <span className="text-gray-500 dark:text-gray-400 font-normal">— Free, Fast & Private</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Rename hundreds of files at once in your browser. Add prefixes, suffixes, auto-numbering, and find & replace. No software download required. Files never leave your device.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a href="#renamer-tool" className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm">
            Start Renaming Files ↓
          </a>
          <a href="#how-it-works" className="w-full sm:w-auto px-8 py-3.5 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-700 dark:text-gray-200 font-medium rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
            See How It Works
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-gray-500 dark:text-gray-400">
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-green-500" /> 100% Private</span>
          <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-yellow-500" /> Instant</span>
          <span className="flex items-center gap-1.5"><span className="text-lg">🆓</span> Free Forever</span>
          <span className="flex items-center gap-1.5"><Smartphone className="w-4 h-4 text-blue-500" /> Works on Mobile</span>
        </div>
      </section>

      {/* 2. THE TOOL COMPONENT */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900/50 border-y border-gray-200 dark:border-gray-800 relative">
        <div className="absolute inset-0 bg-blue-500/5 dark:bg-blue-500/10 pointer-events-none" />
        <div className="text-center mb-8 relative">
          <h2 className="text-sm font-semibold tracking-wider text-gray-500 dark:text-gray-400 uppercase">
            Try it now — drag your files below
          </h2>
        </div>
        <div className="relative">
          <BulkRenamer />
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section id="how-it-works" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">How it works</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Rename thousands of files in three simple steps, without your files ever leaving your computer.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gray-200 dark:bg-gray-800 -z-10" />
          
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 text-center relative shadow-sm">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold border-4 border-white dark:border-gray-950 shadow-sm">1</div>
            <div className="mx-auto w-16 h-16 bg-gray-50 dark:bg-gray-800 rounded-xl flex items-center justify-center mb-6 text-gray-600 dark:text-gray-300">
              <UploadCloud className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Upload Files</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Drag and drop your files into the zone above. They never leave your browser for maximum privacy.</p>
          </div>

          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 text-center relative shadow-sm">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold border-4 border-white dark:border-gray-950 shadow-sm">2</div>
            <div className="mx-auto w-16 h-16 bg-gray-50 dark:bg-gray-800 rounded-xl flex items-center justify-center mb-6 text-gray-600 dark:text-gray-300">
              <Settings2 className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Set Rules</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Configure your renaming rules like prefix, suffix, case changes, or find and replace.</p>
          </div>

          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 text-center relative shadow-sm">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold border-4 border-white dark:border-gray-950 shadow-sm">3</div>
            <div className="mx-auto w-16 h-16 bg-gray-50 dark:bg-gray-800 rounded-xl flex items-center justify-center mb-6 text-gray-600 dark:text-gray-300">
              <Download className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Download Renamed</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Review the live preview and download all files nicely packaged in a single ZIP archive instantly.</p>
          </div>
        </div>
      </section>

      {/* 4. FEATURES GRID */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50 dark:bg-gray-950/50 border-t border-gray-200 dark:border-gray-800 rounded-3xl mx-4 mb-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">Powerful Features</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Everything you need to organize your files perfectly.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[
            { title: "Add Prefix & Suffix", desc: "Easily append or prepend text to hundreds of files at once to maintain a clean naming structure." },
            { title: "Find & Replace", desc: "Quickly swap out specific words, dates, or characters across your entire selection of files." },
            { title: "Auto Numbering", desc: "Create sequential filenames like IMG_001, IMG_002, perfect for organizing photos and datasets." },
            { title: "Case Conversion", desc: "Easily force filenames to UPPERCASE, lowercase, camelCase, snake_case, and more." },
            { title: "Live Preview", desc: "See exactly what your new filenames will look like before writing any data or downloading." },
            { title: "100% Private", desc: "We use modern Web APIs. Files process locally on your device and are never uploaded to any server." }
          ].map((feature, i) => (
            <div key={i} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. USE CASES */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">Who uses BulkRenameTool?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
            <div className="text-3xl mb-4">📸</div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Photographers</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Rename massive batches of RAW and JPGs from generic IMG_1234 formats into descriptive names.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
            <div className="text-3xl mb-4">💻</div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Developers</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Quickly clean up component names, apply snake_case to assets, and prepare files for production.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
            <div className="text-3xl mb-4">🎬</div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Content Creators</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Organize video clips and audio stems systematically with prepended project ID codes.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
            <div className="text-3xl mb-4">📂</div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Office Workers</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Add correct dates and consistent company prefixes to all scanned PDF receipts and documents.</p>
          </div>
        </div>
      </section>

      {/* 6. FAQ (for SEO) */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto border-t border-gray-200 dark:border-gray-800">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-6">
          {[
            { q: "Is this tool really free?", a: "Yes, completely free forever. No signup, no payment, no tricks." },
            { q: "Are my files safe? Do you upload them anywhere?", a: "No. All processing happens entirely inside your browser locally. Files never leave your device." },
            { q: "How many files can I rename at once?", a: "There is no limit. You can rename 1 or 10,000 files at once seamlessly." },
            { q: "Does it work on Mac and Windows?", a: "Yes. It works on any operating system running a modern browser — Chrome, Safari, Firefox, Edge." },
            { q: "Can I preview before downloading?", a: "Yes. Our live preview lets you see the before and after for every file before creating the ZIP." },
            { q: "What file types does it support?", a: "All file types! Images, videos, documents, code, audio — any file type is supported." },
            { q: "Do I need to create an account?", a: "No. There is no signup, no email request, and no account wall." },
            { q: "Can I use regex for find and replace?", a: "Yes. Simply toggle regex mode in the Find & Replace field." },
          ].map((faq, i) => (
            <div key={i} className="border-b border-gray-200 dark:border-gray-800 pb-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{faq.q}</h3>
              <p className="text-gray-600 dark:text-gray-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. BLOG PREVIEW SECTION */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50 dark:bg-gray-900/30 rounded-3xl mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-2">Tips & Guides</h2>
            <p className="text-gray-600 dark:text-gray-400">Learn how to master file organization.</p>
          </div>
          <Link href="/blog" className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline">
            View all articles →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
            <span className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-3">5 min read</span>
            <Link href="/blog/how-to-bulk-rename-files-online" className="flex-grow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2 hover:text-blue-600 transition-colors">How to Bulk Rename Files Online in 3 Steps</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-6">Learn how to bulk rename hundreds of files online instantly. No software needed. Works in your browser.</p>
            </Link>
            <div className="text-sm font-medium text-gray-900 dark:text-white mt-auto">Read more →</div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
            <span className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-3">4 min read</span>
            <Link href="/blog/bulk-rename-files-for-photographers" className="flex-grow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2 hover:text-blue-600 transition-colors">Bulk Rename Photos Online: A Photographer's Guide</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-6">Stop renaming IMG_1234.jpg one by one. Batch rename hundreds of photos in seconds. Free tool.</p>
            </Link>
            <div className="text-sm font-medium text-gray-900 dark:text-white mt-auto">Read more →</div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
            <span className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-3">6 min read</span>
            <Link href="/blog/batch-rename-windows-alternative" className="flex-grow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2 hover:text-blue-600 transition-colors">Best Free Batch Rename Tool (No Download Required)</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-6">Looking for a batch rename tool without installing software? Rename files in your browser instantly.</p>
            </Link>
            <div className="text-sm font-medium text-gray-900 dark:text-white mt-auto">Read more →</div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-10 md:p-16 text-center shadow-xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">Ready to rename your files?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">No signup required · Works instantly · 100% free</p>
          <a href="#renamer-tool" className="inline-block px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg">
            Start Renaming Now
          </a>
        </div>
      </section>
    </>
  );
}
