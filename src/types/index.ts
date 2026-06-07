export type FileItem = {
  id: string; // Unique ID
  file: File;
  originalName: string;
  newName: string;
  size: number;
  extension: string;
};

export type CaseConversionType = 
  | 'none'
  | 'uppercase'
  | 'lowercase'
  | 'titlecase'
  | 'camelcase'
  | 'kebabcase'
  | 'snakecase';

export type AutoNumberPosition = 'before' | 'after';

export type RenameSettings = {
  findText: string;
  replaceText: string;
  useRegex: boolean;
  prefix: string;
  suffix: string;
  useAutoNumber: boolean;
  autoNumberStart: number;
  autoNumberPadding: number;
  autoNumberPosition: AutoNumberPosition;
  caseConversion: CaseConversionType;
  removeSpaces: boolean;
  removeNumbers: boolean;
  removeSpecialChars: boolean;
};

export const defaultSettings: RenameSettings = {
  findText: '',
  replaceText: '',
  useRegex: false,
  prefix: '',
  suffix: '',
  useAutoNumber: false,
  autoNumberStart: 1,
  autoNumberPadding: 3,
  autoNumberPosition: 'after',
  caseConversion: 'none',
  removeSpaces: false,
  removeNumbers: false,
  removeSpecialChars: false,
};
