import React from 'react';

export default function JsonLd() {
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "BulkRenameTool",
    "url": "https://bulkrenametool.com",
    "description": "Free online bulk file renamer tool",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Bulk file renaming",
      "Add prefix and suffix",
      "Find and replace",
      "Auto numbering",
      "Case conversion"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is this tool really free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, completely free forever. No signup, no payment, no tricks."
        }
      },
      {
        "@type": "Question",
        "name": "Are my files safe? Do you upload them anywhere?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. All processing happens entirely inside your browser locally. Files never leave your device."
        }
      },
      {
        "@type": "Question",
        "name": "How many files can I rename at once?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There is no limit. You can rename 1 or 10,000 files at once seamlessly."
        }
      },
      {
        "@type": "Question",
        "name": "Does it work on Mac and Windows?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. It works on any operating system running a modern browser — Chrome, Safari, Firefox, Edge."
        }
      },
      {
        "@type": "Question",
        "name": "Can I preview before downloading?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our live preview lets you see the before and after for every file before creating the ZIP."
        }
      },
      {
        "@type": "Question",
        "name": "What file types does it support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All file types! Images, videos, documents, code, audio — any file type is supported."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to create an account?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. There is no signup, no email request, and no account wall."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use regex for find and replace?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Simply toggle regex mode in the Find & Replace field."
        }
      }
    ]
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BulkRenameTool",
    "url": "https://bulkrenametool.com",
    "logo": "https://bulkrenametool.com/icon-512.png"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
    </>
  );
}
