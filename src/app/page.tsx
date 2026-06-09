import React from 'react';
import Link from 'next/link';
import BulkRenamer from '@/components/BulkRenamer';
import { UploadCloud, Settings2, Download, ShieldCheck, Zap, Smartphone, FolderSync, Gift, Camera, Code2, Film, FolderOpen } from 'lucide-react';
import JsonLd from '@/components/seo/JsonLd';

export default function Home() {
  return (
    <>
      <JsonLd />

      {/* 1. HERO SECTION */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6 animate-fade-in">
          <FolderSync className="w-4 h-4" />
          The fastest way to bulk rename files online
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 dark:text-white mb-6">
          Bulk Rename Files Online <br className="hidden md:block"/>
          <span className="text-gray-500 dark:text-gray-400 font-normal">— Free, Fast &amp; Private</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Rename hundreds of files at once in your browser. Add prefixes, suffixes, auto-numbering, and find &amp; replace. No software download required. Files never leave your device.
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
          <span className="flex items-center gap-1.5"><Gift className="w-4 h-4 text-emerald-500" /> Free Forever</span>
          <span className="flex items-center gap-1.5"><Smartphone className="w-4 h-4 text-blue-500" /> Works on Mobile</span>
        </div>
      </section>

      {/* 2. THE TOOL COMPONENT */}
      <section id="renamer-tool" className="py-12 px-4 sm:px-6 lg:px-8 bg-zinc-50 border-y border-gray-200 relative">
        <div className="text-center mb-8 relative">
          <h2 className="text-sm font-semibold tracking-wider text-gray-500 dark:text-gray-400 uppercase">
            Try it now — drag your files below
          </h2>
        </div>
        <div className="relative">
          <BulkRenamer />
        </div>
      </section>

      {/* 3. INTRO — keyword-rich body text, first 100 words contain primary keyword */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          <strong>BulkRenameTool</strong> is the fastest free bulk rename tool for files online — no software download ever required. Whether you&apos;re a photographer renaming 500 RAW photos from a shoot, a developer cleaning up project assets, or an office worker standardizing invoice PDFs, our <strong>free bulk file renamer</strong> makes it instant. Add prefixes, suffixes, auto-number files sequentially, find &amp; replace text, convert case — all processed in your browser. Your files never leave your device. 100% private. 100% free. Try the batch rename tool above to see how easy it is to rename files in bulk.
        </p>
      </section>

      {/* 4. WHY ONLINE VS DESKTOP */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200 dark:border-gray-800">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">Why Use Online Bulk Rename Instead of Desktop Apps?</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Skip the installation, the admin rights, and the system bloat. Our browser-based batch rename tool gives you everything you need in seconds.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'No Installation Required',
              desc: 'Open your browser and start renaming immediately. No .exe downloads, no admin privileges, no cluttering your system with single-use software. Works on any computer — even locked-down work machines.'
            },
            {
              title: 'Works on Any Device',
              desc: 'Use it on Windows, Mac, Linux, or ChromeOS. Works equally well on desktop, laptop, and tablet. The bulk rename tool is fully mobile-responsive — rename files on your phone if you need to.'
            },
            {
              title: '100% Private — Files Never Leave Your Browser',
              desc: "Unlike many online tools that upload your files to their servers, BulkRenameTool processes everything locally. Turn off your Wi-Fi after loading — it still works. That's how private it is."
            }
          ].map((item, i) => (
            <div key={i} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section id="how-it-works" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50 dark:bg-gray-950/50 rounded-3xl mx-4 mb-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">How to Bulk Rename Files in 3 Steps</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Rename thousands of files in three simple steps, without your files ever leaving your computer. No signup, no upload.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gray-200 dark:bg-gray-800 -z-10" />

          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 text-center relative shadow-sm">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold border-4 border-white dark:border-gray-950 shadow-sm">1</div>
            <div className="mx-auto w-16 h-16 bg-gray-50 dark:bg-gray-800 rounded-xl flex items-center justify-center mb-6 text-gray-600 dark:text-gray-300">
              <UploadCloud className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Upload Your Files</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Drag and drop your files into the drop zone above, or click to select them. They never leave your browser for maximum privacy.</p>
          </div>

          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 text-center relative shadow-sm">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold border-4 border-white dark:border-gray-950 shadow-sm">2</div>
            <div className="mx-auto w-16 h-16 bg-gray-50 dark:bg-gray-800 rounded-xl flex items-center justify-center mb-6 text-gray-600 dark:text-gray-300">
              <Settings2 className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Configure Rename Rules</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Set your renaming rules: add prefix or suffix, use find &amp; replace, enable auto-numbering, or convert case. The live preview updates instantly.</p>
          </div>

          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 text-center relative shadow-sm">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold border-4 border-white dark:border-gray-950 shadow-sm">3</div>
            <div className="mx-auto w-16 h-16 bg-gray-50 dark:bg-gray-800 rounded-xl flex items-center justify-center mb-6 text-gray-600 dark:text-gray-300">
              <Download className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Download Renamed Files</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Review the live preview and download all your renamed files packaged in a single ZIP archive — all in seconds.</p>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link href="/blog/how-to-bulk-rename-files-online" className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
            Read the full guide on how to bulk rename files online →
          </Link>
        </div>
      </section>

      {/* 6. FEATURES GRID */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">Features of Our Free Bulk File Renamer</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Everything you need to rename files in bulk — all free, all in your browser.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[
            {
              title: 'Add Prefix & Suffix',
              desc: 'Easily append or prepend text to hundreds of files at once. Turn IMG_1234.jpg into vacation_IMG_1234.jpg across your entire folder in one click.'
            },
            {
              title: 'Find & Replace Text',
              desc: 'Quickly swap out specific words, dates, or characters across your entire selection of files. Supports both plain text and regex pattern matching.'
            },
            {
              title: 'Auto-Number Files Sequentially',
              desc: 'Create sequential filenames like photo_001, photo_002, perfect for organizing large photo libraries, video courses, or numbered datasets.'
            },
            {
              title: 'Case Conversion',
              desc: 'Force filenames to UPPERCASE, lowercase, Title Case, camelCase, snake_case, or kebab-case. Perfect for web assets and developer codebases.'
            },
            {
              title: 'Live Preview',
              desc: 'See exactly what your new filenames will look like before downloading. The preview updates instantly as you adjust settings — no guessing, no mistakes.'
            },
            {
              title: '100% Private & Secure',
              desc: 'Files process locally using browser APIs. Nothing is ever uploaded. Turn off your Wi-Fi and it still works — proof your files never leave your device.'
            }
          ].map((feature, i) => (
            <div key={i} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. USE CASES */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200 dark:border-gray-800">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">Who Uses Bulk Rename Tools?</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">From photographers to developers, anyone who deals with large numbers of files benefits from batch renaming.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5 border border-blue-100/50 dark:border-blue-800/30">
              <Camera className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Photographers</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">Rename 500 RAW photos from DSC00123 to descriptive names like 2024_wedding_001.jpg in seconds.</p>
            <Link href="/blog/bulk-rename-files-for-photographers" className="text-xs text-blue-600 dark:text-blue-400 font-medium hover:underline">
              Bulk rename photos guide →
            </Link>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
            <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-5 border border-purple-100/50 dark:border-purple-800/30">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Developers</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">Clean up component names, convert to snake_case or kebab-case, and prepare assets for production with regex support.</p>
            <Link href="/blog/bulk-rename-files-for-developers" className="text-xs text-blue-600 dark:text-blue-400 font-medium hover:underline">
              Bulk rename for developers →
            </Link>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
            <div className="w-12 h-12 rounded-xl bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 flex items-center justify-center mb-5 border border-pink-100/50 dark:border-pink-800/30">
              <Film className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Content Creators</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">Organize video clips, audio stems, and graphic assets systematically with batch numbering and project ID prefixes.</p>
            <Link href="/blog/how-to-rename-100-files-at-once" className="text-xs text-blue-600 dark:text-blue-400 font-medium hover:underline">
              Rename 100 files at once →
            </Link>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
            <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-5 border border-amber-100/50 dark:border-amber-800/30">
              <FolderOpen className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Office Workers</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">Add dates and consistent company prefixes to batches of scanned PDFs, invoices, and documents in one go.</p>
            <Link href="/blog/batch-rename-windows-alternative" className="text-xs text-blue-600 dark:text-blue-400 font-medium hover:underline">
              Free batch rename tool →
            </Link>
          </div>
        </div>
      </section>

      {/* 8. FAQ (for SEO rich snippets) */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto border-t border-gray-200 dark:border-gray-800">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Frequently Asked Questions About Bulk Renaming</h2>
        </div>
        <div className="space-y-6">
          {[
            {
              q: 'Is BulkRenameTool really free?',
              a: 'Yes, completely free forever. No signup, no payment, no freemium limits. There are no restrictions on how many files you can rename. The bulk rename tool is free to use as many times as you need.'
            },
            {
              q: 'Are my files safe? Do you upload them anywhere?',
              a: 'No. All processing happens entirely inside your browser using the Web File API. Files are never uploaded to any server. To prove it: load the tool, then turn off your Wi-Fi — it still works perfectly, because nothing ever leaves your device.'
            },
            {
              q: 'Can I rename 1000 files at once?',
              a: 'Yes. There is no hard limit. You can rename 1 or 10,000 files at once. Because all processing is done locally using your device\'s RAM and CPU, the speed is not limited by your internet connection. Zipping 1000 files typically takes just seconds.'
            },
            {
              q: 'Does it work on Mac and Windows?',
              a: 'Yes. BulkRenameTool works on any operating system running a modern browser — Chrome, Safari, Firefox, or Edge. It runs identically on Windows, Mac, Linux, and ChromeOS with zero installation required.'
            },
            {
              q: 'Can I preview before downloading?',
              a: 'Yes. The live preview table shows every original filename alongside its new renamed version in real time as you adjust your settings. You can verify all changes are exactly right before clicking Download ZIP.'
            },
            {
              q: 'Is there a bulk rename tool for Windows without software?',
              a: 'Yes — BulkRenameTool is exactly that. Instead of downloading executables or installing PowerToys, open BulkRenameTool in Chrome or Edge on Windows. All bulk renaming features — prefix, suffix, find & replace, auto-numbering, case conversion — are available with no installation.'
            },
            {
              q: 'What file types does the bulk file renamer support?',
              a: 'All file types are supported. Images (JPG, PNG, RAW, WEBP), videos (MP4, MOV), documents (PDF, DOCX), code files, audio files — any format. The tool renames the file, not its content, so extension type does not matter.'
            },
            {
              q: 'Can I use regex for find and replace?',
              a: 'Yes. Toggle the "Use Regular Expression" mode in the Find & Replace panel. This lets you write powerful patterns — for example, strip 8-character hash IDs from filenames using [a-f0-9]{8}. The live preview shows matches instantly.'
            },
            {
              q: 'Do I need to create an account?',
              a: 'No. There is no account, no signup, no email address required. Open the tool in your browser and start renaming immediately. Everything works anonymously.'
            },
            {
              q: 'Does bulk renaming work on mobile?',
              a: 'Yes. BulkRenameTool is fully mobile responsive. You can bulk rename files on your phone or tablet using Chrome or Safari mobile. All features including live preview and ZIP download work on mobile devices.'
            }
          ].map((faq, i) => (
            <div key={i} className="border-b border-gray-200 dark:border-gray-800 pb-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{faq.q}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. BLOG PREVIEW SECTION */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50 dark:bg-gray-900/30 rounded-3xl mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-2">Bulk Rename Guides &amp; Tips</h2>
            <p className="text-gray-600 dark:text-gray-400">Learn how to master file organization and batch renaming for your workflow.</p>
          </div>
          <Link href="/blog" className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline">
            View all guides →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
            <span className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-3">5 min read</span>
            <Link href="/blog/how-to-bulk-rename-files-online" className="flex-grow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2 hover:text-blue-600 transition-colors">How to Bulk Rename Files Online in 3 Steps (Free)</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-6">Learn how to bulk rename hundreds of files online instantly using our free tool. No software needed. Works in your browser on Windows and Mac.</p>
            </Link>
            <Link href="/blog/how-to-bulk-rename-files-online" className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-auto hover:underline">Read the bulk rename guide →</Link>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
            <span className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-3">6 min read</span>
            <Link href="/blog/bulk-rename-files-for-photographers" className="flex-grow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2 hover:text-blue-600 transition-colors">Bulk Rename Photos for Photographers (Free Online)</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-6">Stop renaming IMG_1234.jpg one by one. Bulk rename photos for photographers with batch numbering and date formatting. Free tool, no signup.</p>
            </Link>
            <Link href="/blog/bulk-rename-files-for-photographers" className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-auto hover:underline">Read the bulk rename photos guide →</Link>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
            <span className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-3">4 min read</span>
            <Link href="/blog/batch-rename-windows-alternative" className="flex-grow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2 hover:text-blue-600 transition-colors">Batch Rename Tool (Free Alternative to Desktop Apps)</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-6">Looking for a batch rename tool without installing software? Rename files in your browser instantly. No download, no installation, 100% free.</p>
            </Link>
            <Link href="/blog/batch-rename-windows-alternative" className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-auto hover:underline">Read the batch rename tool guide →</Link>
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-10 md:p-16 text-center shadow-xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">Ready to bulk rename your files?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">Try our free bulk file renamer today — no signup required, works instantly, 100% private.</p>
          <a href="#renamer-tool" className="inline-block px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg">
            Start Renaming Files Now
          </a>
        </div>
      </section>
    </>
  );
}
