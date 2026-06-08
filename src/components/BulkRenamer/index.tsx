'use client';

import React, { useState, useEffect, useCallback } from 'react';
import DropZone from './DropZone';
import RenameRules from './RenameRules';
import Preview from './Preview';
import DownloadButton from './DownloadButton';
import { FileItem, RenameSettings, defaultSettings } from '@/types';
import { processNames } from '@/lib/rename';
import { RefreshCcw, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function BulkRenamer() {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [settings, setSettings] = useState<RenameSettings>(defaultSettings);
  const [history, setHistory] = useState<RenameSettings[]>([defaultSettings]);

  // Update processed files whenever settings or original files change
  // eslint-disable-next-line react-hooks/exhaustive-deps, react-hooks/set-state-in-effect
  useEffect(() => {
    if (files.length > 0) {
      setFiles((currentFiles) => processNames(currentFiles, settings));
    }
  }, [settings]);

  // Re-process when files are added or removed, using a better pattern
  const handleFilesAdded = (newFiles: FileItem[]) => {
    setFiles((current) => {
      const allFiles = [...current, ...newFiles];
      return processNames(allFiles, settings);
    });
  };

  const handleRemoveFile = (id: string) => {
    setFiles((current) => {
      const filtered = current.filter((f) => f.id !== id);
      return processNames(filtered, settings);
    });
  };

  const handleSettingsChange = (newSettings: RenameSettings) => {
    setSettings(newSettings);
    // Add to history for undo
    setHistory((prev) => {
      const newHistory = [...prev, newSettings];
      return newHistory.length > 20 ? newHistory.slice(1) : newHistory; // Keep last 20
    });
  };

  const handleClear = () => {
    setFiles([]);
    setSettings(defaultSettings);
    setHistory([defaultSettings]);
  };

  const handleUndo = useCallback(() => {
    setHistory((prev) => {
      if (prev.length > 1) {
        const newHistory = [...prev];
        newHistory.pop(); // Remove current
        const previousSettings = newHistory[newHistory.length - 1];
        setSettings(previousSettings);
        return newHistory;
      }
      return prev;
    });
  }, []);

  // Keyboard shortcut Ctrl+Z / Cmd+Z for Undo
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
        e.preventDefault();
        handleUndo();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleUndo]);

  return (
    <div className="w-full max-w-7xl mx-auto" id="renamer-tool">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
        {/* Left Column: Rules & Actions */}
        <div className="w-full lg:w-[380px] xl:w-[400px] flex-shrink-0 flex flex-col gap-6 order-2 lg:order-1">
          {files.length > 0 && (
            <Card>
              <CardContent className="flex items-center justify-between py-3 px-4">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {files.length} file{files.length !== 1 ? 's' : ''} loaded
                </span>
                <Button
                  variant="ghost"
                  onClick={handleClear}
                  className="text-xs flex items-center gap-1.5 text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 font-medium h-auto p-1.5"
                  aria-label="Clear all files and settings"
                >
                  <RefreshCcw className="w-4 h-4" />
                  Clear All
                </Button>
              </CardContent>
            </Card>
          )}

          <RenameRules settings={settings} onChange={handleSettingsChange} />
          
          <Card>
            <CardContent className="p-5">
               <DownloadButton files={files} />
               <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 font-medium">
                 <ShieldCheck className="w-4 h-4 text-green-500" />
                 100% Private - Files never leave your browser
               </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Dropzone & Preview */}
        <div className="w-full flex-grow flex flex-col gap-6 order-1 lg:order-2 h-auto lg:h-[calc(100vh-140px)] lg:min-h-[600px]">
          {files.length === 0 ? (
            <div className="w-full h-auto min-h-[250px] lg:h-full lg:min-h-[300px] flex flex-col justify-center">
              <DropZone onFilesAdded={handleFilesAdded} filesCount={files.length} />
            </div>
          ) : (
            <div className="flex flex-col h-full gap-4 lg:min-h-0">
              <div className="hidden lg:block flex-shrink-0">
                <DropZone onFilesAdded={handleFilesAdded} filesCount={files.length} />
              </div>
              <div className="flex-grow lg:min-h-0 lg:overflow-hidden rounded-xl">
                <Preview files={files} onRemove={handleRemoveFile} />
              </div>
              {/* On mobile, allow adding more files below preview */}
              <div className="block lg:hidden flex-shrink-0">
                <DropZone onFilesAdded={handleFilesAdded} filesCount={files.length} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
