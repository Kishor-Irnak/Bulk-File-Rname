import React from 'react';
import { FileItem } from '@/types';
import { FileIcon, Trash2, AlertTriangle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';

type PreviewProps = {
  files: FileItem[];
  onRemove: (id: string) => void;
};

export default function Preview({ files, onRemove }: PreviewProps) {
  if (files.length === 0) {
    return (
      <Card className="flex flex-col items-center justify-center p-8 h-full min-h-[300px] border-dashed bg-gray-50/50 dark:bg-gray-800/25">
        <CardContent className="flex flex-col items-center justify-center py-6">
          <FileIcon className="w-12 h-12 text-gray-300 dark:text-gray-600 mb-4" />
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            No files selected yet. Drop some files to see the preview.
          </p>
        </CardContent>
      </Card>
    );
  }

  // Check for duplicates
  const nameCounts = files.reduce((acc, file) => {
    acc[file.newName] = (acc[file.newName] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <Card className="flex flex-col h-full max-h-[600px] overflow-hidden shadow-sm">
      <CardHeader className="px-4 py-3 border-b bg-gray-50 dark:bg-gray-800/50 flex flex-row justify-between items-center gap-2">
        <CardTitle className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
          Live Preview
          <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-0.5 rounded-full text-xs font-medium">
            {files.length}
          </span>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-0 overflow-x-auto flex-grow">
        <Table className="w-full text-left border-collapse">
          <TableHeader className="bg-gray-50/50 dark:bg-gray-800/50 sticky top-0 z-10 backdrop-blur">
            <TableRow>
              <TableHead className="px-4 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Original Name
              </TableHead>
              <TableHead className="px-4 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                New Name
              </TableHead>
              <TableHead className="px-4 py-3 w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {files.map((file) => {
              const isDuplicate = nameCounts[file.newName] > 1;
              const hasChanged = file.originalName !== file.newName;

              return (
                <TableRow key={file.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <TableCell className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 font-mono truncate max-w-[200px] lg:max-w-[300px]">
                    {file.originalName}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-sm font-mono truncate max-w-[200px] lg:max-w-[300px]">
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
                      <span className="ml-2 inline-flex items-center gap-1 text-xs text-red-500 font-sans" title="Multiple files will have this exact same name">
                        <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                        Conflict
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => onRemove(file.id)}
                      className="text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 h-8 w-8"
                      aria-label={`Remove ${file.originalName}`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
