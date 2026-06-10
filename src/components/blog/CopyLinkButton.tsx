'use client';

import React from 'react';
import { Link as LinkIcon } from 'lucide-react';

export default function CopyLinkButton() {
  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href).then(() => {
        // Could use a toast here, but alert is simpler for now
        alert('Link copied to clipboard!');
      });
    }
  };

  return (
    <button
      onClick={handleCopyLink}
      className="p-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
      aria-label="Copy link to this article"
      title="Copy link"
    >
      <LinkIcon className="w-5 h-5" />
    </button>
  );
}
