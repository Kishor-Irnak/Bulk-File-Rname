import React from 'react';
import { FileItem } from '@/types';
import { FileIcon, Trash2 } from 'lucide-react';

type PreviewProps = {
  files: FileItem[];
  onRemove: (id: string) => void;
};

export default function Preview({ files, onRemove }: PreviewProps) {
  if (files.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 h-full min-h-[300px]">
        <FileIcon className="w-12 h-12 text-gray-300 dark:text-gray-600 mb-4" />
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          No files selected yet. Drop some files to see the preview.
        </p>
      </div>
    );
  }

  // Check for duplicates
  const nameCounts = files.reduce((acc, file) => {
    acc[file.newName] = (acc[file.newName] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm flex flex-col h-full max-h-[600px]">
      <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex justify-between items-center">
        <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
          Live Preview
          <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-0.5 rounded-full text-xs font-medium">
            {files.length}
          </span>
        </h3>
      </div>
      
      <div className="overflow-x-auto flex-grow">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50/50 dark:bg-gray-800/50 sticky top-0 z-10 backdrop-blur">
            <tr>
              <th className="px-4 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider border-b border-gray-200 dark:border-gray-700">
                Original Name
              </th>
              <th className="px-4 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider border-b border-gray-200 dark:border-gray-700">
                New Name
              </th>
              <th className="px-4 py-3 w-10 border-b border-gray-200 dark:border-gray-700"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {files.map((file) => {
              const isDuplicate = nameCounts[file.newName] > 1;
              const hasChanged = file.originalName !== file.newName;

              return (
                <tr key={file.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 font-mono truncate max-w-[200px] lg:max-w-[300px]">
                    {file.originalName}
                  </td>
                  <td className="px-4 py-3 text-sm font-mono truncate max-w-[200px] lg:max-w-[300px]">
                    <span 
                      className={`
                        px-1.5 py-0.5 rounded
                        ${isDuplicate ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' : ''}
                        ${!isDuplicate && hasChanged ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : ''}
                        ${!hasChanged ? 'text-gray-900 dark:text-gray-100' : ''}
                      `}
                    >
                      {file.newName}
                    </span>
                    {isDuplicate && (
                      <span className="ml-2 text-xs text-red-500 font-sans" title="Multiple files will have this exact same name">
                        ⚠️ Conflict
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button
                      onClick={() => onRemove(file.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded hover:bg-red-50 dark:hover:bg-red-900/20"
                      aria-label={`Remove ${file.originalName}`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
