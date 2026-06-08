import React, { useCallback, useRef, useState } from 'react';
import { UploadCloud, File as FileIcon } from 'lucide-react';
import { FileItem } from '@/types';

type DropZoneProps = {
  onFilesAdded: (files: FileItem[]) => void;
  filesCount: number;
};

export default function DropZone({ onFilesAdded, filesCount }: DropZoneProps) {
  const [isDragActive, setIsDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragActive(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragActive(false);
  }, []);

  const processRawFiles = useCallback((rawFiles: File[]) => {
    const newItems: FileItem[] = rawFiles.map((file) => ({
      id: crypto.randomUUID(),
      file,
      originalName: file.name,
      newName: file.name,
      size: file.size,
      extension: file.name.includes('.') ? file.name.substring(file.name.lastIndexOf('.')) : '',
    }));
    onFilesAdded(newItems);
  }, [onFilesAdded]);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragActive(false);

      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        processRawFiles(Array.from(e.dataTransfer.files));
      }
    },
    [processRawFiles]
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        processRawFiles(Array.from(e.target.files));
        // Reset input so the same files can be selected again if needed
        if (inputRef.current) inputRef.current.value = '';
      }
    },
    [processRawFiles]
  );

  return (
    <div
      className={`relative w-full border-2 border-dashed rounded-xl p-6 md:p-8 lg:p-12 text-center transition-all duration-200 cursor-pointer flex flex-col items-center justify-center ${
        isDragActive
          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/10'
          : 'border-gray-300 dark:border-gray-700 hover:border-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          inputRef.current?.click();
        }
      }}
      aria-label="Drag and drop zone to upload files for bulk renaming"
    >
      <input
        type="file"
        multiple
        className="hidden"
        ref={inputRef}
        onChange={handleInputChange}
        aria-hidden="true"
      />

      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
          <UploadCloud className="w-8 h-8" />
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Drag & drop files here
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            or click to browse from your device
          </p>
        </div>
        {filesCount > 0 && (
          <div className="inline-flex items-center gap-1.5 bg-zinc-100 text-zinc-800 px-3 py-1 rounded-full text-xs font-medium border border-zinc-200">
            <FileIcon className="w-3.5 h-3.5" />
            {filesCount} file{filesCount !== 1 ? 's' : ''} loaded
          </div>
        )}
      </div>
    </div>
  );
}
