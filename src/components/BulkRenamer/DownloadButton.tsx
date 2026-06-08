import React, { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { FileItem } from '@/types';

type DownloadButtonProps = {
  files: FileItem[];
};

export default function DownloadButton({ files }: DownloadButtonProps) {
  const [isZipping, setIsZipping] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleDownload = async () => {
    if (files.length === 0) return;
    setIsZipping(true);
    setProgress(0);

    try {
      const zip = new JSZip();

      // Check for duplicate names to avoid overwriting files in the zip
      const nameMap = new Map<string, number>();

      files.forEach((item) => {
        let finalName = item.newName;
        // Collision resolution for zip
        if (nameMap.has(finalName)) {
          const count = nameMap.get(finalName)! + 1;
          nameMap.set(finalName, count);
          
          const dotIndex = finalName.lastIndexOf('.');
          if (dotIndex !== -1) {
            finalName = `${finalName.substring(0, dotIndex)} (${count})${finalName.substring(dotIndex)}`;
          } else {
            finalName = `${finalName} (${count})`;
          }
        } else {
          nameMap.set(finalName, 1);
        }

        zip.file(finalName, item.file);
      });

      const zipFile = await zip.generateAsync(
        { type: 'blob', compression: 'STORE' },
        (metadata) => {
          setProgress(Math.round(metadata.percent));
        }
      );

      saveAs(zipFile, 'renamed-files.zip');
    } catch (error) {
      console.error('Error creating ZIP:', error);
      alert('There was an error creating the ZIP file. Please try again.');
    } finally {
      setIsZipping(false);
      setProgress(0);
    }
  };

  return (
    <Button
      onClick={handleDownload}
      disabled={files.length === 0 || isZipping}
      className="w-full py-3 h-11 font-semibold flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow-md transition-all duration-200"
    >
      {isZipping ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          Zipping Files ({progress}%)
        </>
      ) : (
        <>
          <Download className="w-5 h-5" />
          Download All (ZIP)
        </>
      )}
    </Button>
  );
}
