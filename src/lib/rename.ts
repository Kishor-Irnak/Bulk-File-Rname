import { FileItem, RenameSettings } from '@/types';

// Helper to convert case
function convertCase(text: string, type: string): string {
  if (!text) return text;
  switch (type) {
    case 'uppercase':
      return text.toUpperCase();
    case 'lowercase':
      return text.toLowerCase();
    case 'titlecase':
      return text.replace(
        /\w\S*/g,
        (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      );
    case 'camelcase':
      return text
        .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
          return index === 0 ? word.toLowerCase() : word.toUpperCase();
        })
        .replace(/\s+/g, '');
    case 'kebabcase':
      return text
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[\s_]+/g, '-')
        .toLowerCase();
    case 'snakecase':
      return text
        .replace(/([a-z])([A-Z])/g, '$1_$2')
        .replace(/[\s\-]+/g, '_')
        .toLowerCase();
    case 'none':
    default:
      return text;
  }
}

export function generateNewName(file: FileItem, settings: RenameSettings, index: number): string {
  let nameWithoutExt = file.originalName.substring(0, file.originalName.lastIndexOf('.')) || file.originalName;
  const ext = file.originalName.substring(file.originalName.lastIndexOf('.')) || '';

  // 1. Find and Replace
  if (settings.findText) {
    try {
      if (settings.useRegex) {
        const regex = new RegExp(settings.findText, 'g');
        nameWithoutExt = nameWithoutExt.replace(regex, settings.replaceText);
      } else {
        // split join approach for global replace without regex
        nameWithoutExt = nameWithoutExt.split(settings.findText).join(settings.replaceText);
      }
    } catch (e) {
      // Ignored regex errors
    }
  }

  // 2. Remove characters
  if (settings.removeSpaces) {
    nameWithoutExt = nameWithoutExt.replace(/\s+/g, '');
  }
  if (settings.removeNumbers) {
    nameWithoutExt = nameWithoutExt.replace(/[0-9]+/g, '');
  }
  if (settings.removeSpecialChars) {
    nameWithoutExt = nameWithoutExt.replace(/[^a-zA-Z0-9\s]/g, '');
  }

  // 3. Case conversion
  nameWithoutExt = convertCase(nameWithoutExt, settings.caseConversion);

  // 4. Add Prefix & Suffix
  if (settings.prefix) {
    nameWithoutExt = settings.prefix + nameWithoutExt;
  }
  if (settings.suffix) {
    nameWithoutExt = nameWithoutExt + settings.suffix;
  }

  // 5. Trim whitespace
  nameWithoutExt = nameWithoutExt.trim();

  // 6. Auto Number
  let resultName = nameWithoutExt;
  if (settings.useAutoNumber) {
    const currentNum = settings.autoNumberStart + index;
    const numStr = String(currentNum).padStart(settings.autoNumberPadding, '0');
    
    // Add separator if name is not empty
    const separator = resultName ? (settings.autoNumberPosition === 'before' ? '-' : '-') : ''; // Or just no separator, but usually a space or dash. Let's use dash. Actually, let's just append it. Or a space. Standard: if they want a separator they can use suffix/prefix, but wait, if autonumbering just "adds", maybe no separator by default or just use `_` or `-`. I will just concatenate it directly or with a space.
    // The prompt says "adds 001, 002...". We'll just concatenate directly. If they want a space they can add a suffix space or prefix space.
    if (settings.autoNumberPosition === 'before') {
      resultName = numStr + (resultName ? ' ' + resultName : '');
    } else {
      resultName = (resultName ? resultName + ' ' : '') + numStr;
    }
  }

  return resultName + ext;
}

export function processNames(files: FileItem[], settings: RenameSettings): FileItem[] {
  return files.map((file, index) => {
    let result = generateNewName(file, settings, index);
    
    return {
      ...file,
      newName: result,
    };
  });
}
