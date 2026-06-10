import React from 'react';

type BlogJsonLdProps = {
  title: string;
  description: string;
  publishedDate: string;  // ISO 8601
  modifiedDate?: string;  // ISO 8601, defaults to publishedDate
  url: string;
  readTime?: string;
};

export default function BlogJsonLd({ title, description, publishedDate, modifiedDate, url, readTime }: BlogJsonLdProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": url,
    "datePublished": publishedDate,
    "dateModified": modifiedDate || publishedDate,
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
        "url": "https://bulkrenametool.com/android-chrome-512x512.png",
        "width": 512,
        "height": 512
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "image": {
      "@type": "ImageObject",
      "url": "https://bulkrenametool.com/og-image.png",
      "width": 1200,
      "height": 630
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
