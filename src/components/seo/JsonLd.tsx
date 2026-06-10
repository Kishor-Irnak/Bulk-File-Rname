import React from 'react';

export default function JsonLd() {
  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "BulkRenameTool",
    "url": "https://bulkrenametool.com",
    "description": "Free online bulk file renamer. Rename hundreds of files at once in your browser. Add prefix, suffix, auto-number, find & replace. 100% private. No uploads. Works on Windows, Mac, Linux.",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Windows, macOS, Linux, ChromeOS, iOS, Android",
    "browserRequirements": "Requires a modern browser with JavaScript enabled (Chrome, Firefox, Safari, Edge).",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "screenshot": "https://bulkrenametool.com/og-image.png",
    "featureList": [
      "Bulk file renaming — rename hundreds of files at once",
      "Add prefix and suffix to all filenames simultaneously",
      "Find and replace text across all filenames",
      "Auto sequential numbering with customizable padding",
      "Case conversion — UPPER, lower, Title, camelCase, snake_case, kebab-case",
      "Live preview before download — see every change before committing",
      "100% private — files never uploaded to any server",
      "Download all renamed files as a single ZIP archive",
      "Regex support for advanced find and replace patterns",
      "Works on Windows, Mac, Linux, ChromeOS, iOS, Android",
      "Bulk rename JPG files, PNG files, PDF documents, and any file type",
      "Remove spaces from filenames",
      "Batch rename photos for photographers",
      "No software download required"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "127",
      "bestRating": "5"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "BulkRenameTool",
    "url": "https://bulkrenametool.com",
    "description": "Free online bulk file renamer. Rename hundreds of files at once in your browser. No software download required.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://bulkrenametool.com/blog?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Bulk Rename Files Online in 3 Steps",
    "description": "Rename hundreds of files at once in your browser using BulkRenameTool. No software download required. 100% free and private.",
    "totalTime": "PT2M",
    "tool": {
      "@type": "HowToTool",
      "name": "BulkRenameTool — Free Online Bulk File Renamer"
    },
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Upload Your Files",
        "text": "Drag and drop your files into the drop zone, or click to select them from your computer. The files are loaded directly in your browser and never leave your device.",
        "url": "https://bulkrenametool.com/#renamer-tool"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Configure Rename Rules",
        "text": "Set your renaming rules: add a prefix or suffix, use find & replace to swap out text, enable auto-numbering for sequential files, or convert case. The live preview updates instantly.",
        "url": "https://bulkrenametool.com/#renamer-tool"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Download Renamed Files",
        "text": "Review the live preview to confirm every filename looks exactly right, then click Download All (ZIP). Your browser packages all renamed files into a single ZIP archive instantly.",
        "url": "https://bulkrenametool.com/#renamer-tool"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is BulkRenameTool really free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, completely free forever. There is no signup required, no payment, no freemium tier, and no hidden fees. BulkRenameTool is a 100% free online bulk file renaming tool with no limits on the number of files you can rename."
        }
      },
      {
        "@type": "Question",
        "name": "Are my files safe? Do you upload them anywhere?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. All file processing happens entirely inside your browser using the Web File API. Your files are never uploaded to any server. You can even turn off your internet connection after loading the page and the bulk rename tool will continue to work perfectly — proof that your files never leave your device."
        }
      },
      {
        "@type": "Question",
        "name": "How many files can I rename at once?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There is no hard limit. You can rename 1 file or 10,000 files at once. The tool handles large batches seamlessly because all processing happens locally in your browser using your device's RAM and CPU, so speed is not limited by your internet connection."
        }
      },
      {
        "@type": "Question",
        "name": "Does the bulk rename tool work on Mac and Windows?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. BulkRenameTool works on any operating system with a modern browser — Chrome, Safari, Firefox, Edge, or Brave. It runs identically on Windows, Mac, Linux, and ChromeOS. Since it runs in the browser, there is nothing to install."
        }
      },
      {
        "@type": "Question",
        "name": "Can I preview the new filenames before downloading?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our live preview table shows you every original filename alongside its new renamed version in real time as you adjust your rules. You can verify all changes are correct before clicking the Download ZIP button, so you never make a mistake."
        }
      },
      {
        "@type": "Question",
        "name": "What file types does the bulk file renamer support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All file types are supported. You can bulk rename images (JPG, PNG, RAW, WEBP), videos (MP4, MOV, AVI), documents (PDF, DOCX, XLSX), code files, audio files, and any other file format. The tool renames the file, not its content."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use regex for find and replace?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Toggle the 'Use Regular Expression' mode in the Find & Replace panel. This unlocks powerful pattern matching — for example, use a regex like [0-9]{4} to strip four-digit numbers from all filenames at once. The live preview updates instantly as you type your regex pattern."
        }
      },
      {
        "@type": "Question",
        "name": "Can I rename 1000 files at once?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The bulk rename tool handles 1000 files or more at once without any issue. Since all processing happens locally in your browser, you are only limited by your device's memory. Renaming and zipping 1000 files typically takes just a few seconds."
        }
      },
      {
        "@type": "Question",
        "name": "Does bulk file renaming work on mobile?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. BulkRenameTool is fully mobile responsive. You can bulk rename files on your phone or tablet using Chrome or Safari mobile. The interface adapts to smaller screens and all features including live preview and ZIP download are supported on mobile devices."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a bulk rename tool for Windows without downloading software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — BulkRenameTool is that tool. Instead of downloading an .exe file or installing PowerToys, simply open BulkRenameTool in your Chrome or Edge browser on Windows. All the same bulk renaming features — prefix, suffix, find & replace, auto-numbering, case conversion — are available instantly with no installation required."
        }
      }
    ]
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BulkRenameTool",
    "url": "https://bulkrenametool.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://bulkrenametool.com/android-chrome-512x512.png",
      "width": 512,
      "height": 512
    },
    "description": "Free online bulk file renamer tool. Rename hundreds of files at once in your browser with no software download required.",
    "foundingDate": "2024",
    "sameAs": [
      "https://bulkrenametool.com"
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "BulkRenameTool — Free Bulk File Renamer",
        "item": "https://bulkrenametool.com"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
