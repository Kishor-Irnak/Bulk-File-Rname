import React from 'react';

type BlogJsonLdProps = {
  title: string;
  description: string;
  publishedDate: string;  // ISO 8601
  url: string;
  readTime?: string;
};

export default function BlogJsonLd({ title, description, publishedDate, url, readTime }: BlogJsonLdProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": url,
    "datePublished": publishedDate,
    "dateModified": "2026-06-09T00:00:00Z",
    "author": {
      "@type": "Organization",
      "name": "BulkRenameTool",
      "url": "https://bulkrenametool.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "BulkRenameTool",
      "url": "https://bulkrenametool.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bulkrenametool.com/android-chrome-512x512.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "timeRequired": readTime ? `PT${readTime.replace(' min read', 'M')}` : undefined
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://bulkrenametool.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://bulkrenametool.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": url
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
