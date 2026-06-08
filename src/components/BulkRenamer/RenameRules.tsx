import React from 'react';
import { RenameSettings, CaseConversionType, AutoNumberPosition } from '@/types';
import { Settings2, Hash, Type, Scissors, PlusSquare, Replace } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type RenameRulesProps = {
  settings: RenameSettings;
  onChange: (newSettings: RenameSettings) => void;
};

export default function RenameRules({ settings, onChange }: RenameRulesProps) {
  const handleChange = (key: keyof RenameSettings, value: string | number | boolean) => {
    onChange({ ...settings, [key]: value });
  };

  return (
    <Card className="shadow-sm">
      <CardHeader className="flex flex-row items-center gap-2 pb-4 border-b border-gray-200 dark:border-gray-800">
        <Settings2 className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">Rename Rules</CardTitle>
      </CardHeader>

      <CardContent className="p-4 lg:p-6 space-y-8 pt-6">
        {/* 1. Find & Replace */}
        <section className="space-y-4">
          <h3 className="text-sm font-medium text-gray-900 dark:text-gray-200 flex items-center gap-2">
            <Replace className="w-4 h-4 text-blue-500" /> Find & Replace
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="find-input" className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Find</Label>
              <Input
                id="find-input"
                type="text"
                value={settings.findText}
                onChange={(e) => handleChange('findText', e.target.value)}
                placeholder="Text to replace..."
                className="w-full h-9"
              />
            </div>
            <div>
              <Label htmlFor="replace-input" className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Replace with</Label>
              <Input
                id="replace-input"
                type="text"
                value={settings.replaceText}
                onChange={(e) => handleChange('replaceText', e.target.value)}
                placeholder="New text..."
                className="w-full h-9"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="useRegex"
              checked={settings.useRegex}
              onCheckedChange={(checked) => handleChange('useRegex', checked === true)}
            />
            <Label htmlFor="useRegex" className="text-sm font-normal text-gray-600 dark:text-gray-400 cursor-pointer">
              Use Regular Expression
            </Label>
          </div>
        </section>

        {/* 2. Add Prefix & Suffix */}
        <section className="space-y-4">
          <h3 className="text-sm font-medium text-gray-900 dark:text-gray-200 flex items-center gap-2">
            <PlusSquare className="w-4 h-4 text-indigo-500" /> Add Prefix & Suffix
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="prefix-input" className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Prefix</Label>
              <Input
                id="prefix-input"
                type="text"
                value={settings.prefix}
                onChange={(e) => handleChange('prefix', e.target.value)}
                placeholder="Add to start..."
                className="w-full h-9"
              />
            </div>
            <div>
              <Label htmlFor="suffix-input" className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Suffix</Label>
              <Input
                id="suffix-input"
                type="text"
                value={settings.suffix}
                onChange={(e) => handleChange('suffix', e.target.value)}
                placeholder="Add to end..."
                className="w-full h-9"
              />
            </div>
          </div>
        </section>

        {/* 3. Auto Number */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-200 flex items-center gap-2">
              <Hash className="w-4 h-4 text-green-500" /> Auto Numbering
            </h3>
            <div className="flex items-center gap-2">
              <Checkbox
                id="useAutoNumber"
                checked={settings.useAutoNumber}
                onCheckedChange={(checked) => handleChange('useAutoNumber', checked === true)}
              />
              <Label htmlFor="useAutoNumber" className="text-sm font-medium text-gray-600 dark:text-gray-400 cursor-pointer">
                Enable
              </Label>
            </div>
          </div>
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 transition-opacity ${settings.useAutoNumber ? 'opacity-100' : 'opacity-50 pointer-events-none'}`}>
            <div>
              <Label htmlFor="auto-number-start" className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Start At</Label>
              <Input
                id="auto-number-start"
                type="number"
                value={settings.autoNumberStart}
                onChange={(e) => handleChange('autoNumberStart', parseInt(e.target.value) || 0)}
                className="w-full h-9"
              />
            </div>
            <div>
              <Label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Padding (digits)</Label>
              <Select
                value={String(settings.autoNumberPadding)}
                onValueChange={(val) => handleChange('autoNumberPadding', val ? parseInt(val) : 1)}
              >
                <SelectTrigger className="w-full h-9">
                  <SelectValue placeholder="Select padding..." />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <SelectItem key={num} value={String(num)}>
                      {num} ({String(1).padStart(num, '0')})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Position</Label>
              <Select
                value={settings.autoNumberPosition}
                onValueChange={(val) => val && handleChange('autoNumberPosition', val as AutoNumberPosition)}
              >
                <SelectTrigger className="w-full h-9">
                  <SelectValue placeholder="Select position..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="after">After Name</SelectItem>
                  <SelectItem value="before">Before Name</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* 4. Case Conversion */}
        <section className="space-y-4">
          <h3 className="text-sm font-medium text-gray-900 dark:text-gray-200 flex items-center gap-2">
            <Type className="w-4 h-4 text-purple-500" /> Case Conversion
          </h3>
          <Select
            value={settings.caseConversion}
            onValueChange={(val) => val && handleChange('caseConversion', val as CaseConversionType)}
          >
            <SelectTrigger className="w-full h-9">
              <SelectValue placeholder="Select case conversion..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">No change</SelectItem>
              <SelectItem value="lowercase">lowercase</SelectItem>
              <SelectItem value="uppercase">UPPERCASE</SelectItem>
              <SelectItem value="titlecase">Title Case</SelectItem>
              <SelectItem value="camelcase">camelCase</SelectItem>
              <SelectItem value="kebabcase">kebab-case</SelectItem>
              <SelectItem value="snakecase">snake_case</SelectItem>
            </SelectContent>
          </Select>
        </section>

        {/* 5. Remove Characters */}
        <section className="space-y-4">
          <h3 className="text-sm font-medium text-gray-900 dark:text-gray-200 flex items-center gap-2">
            <Scissors className="w-4 h-4 text-pink-500" /> Remove Characters
          </h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
              <Checkbox
                id="removeSpaces"
                checked={settings.removeSpaces}
                onCheckedChange={(checked) => handleChange('removeSpaces', checked === true)}
              />
              <Label htmlFor="removeSpaces" className="text-sm font-normal text-gray-600 dark:text-gray-300 cursor-pointer flex-grow">
                Remove all spaces
              </Label>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
              <Checkbox
                id="removeNumbers"
                checked={settings.removeNumbers}
                onCheckedChange={(checked) => handleChange('removeNumbers', checked === true)}
              />
              <Label htmlFor="removeNumbers" className="text-sm font-normal text-gray-600 dark:text-gray-300 cursor-pointer flex-grow">
                Remove all numbers
              </Label>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
              <Checkbox
                id="removeSpecialChars"
                checked={settings.removeSpecialChars}
                onCheckedChange={(checked) => handleChange('removeSpecialChars', checked === true)}
              />
              <Label htmlFor="removeSpecialChars" className="text-sm font-normal text-gray-600 dark:text-gray-300 cursor-pointer flex-grow">
                Remove special characters (keep only alphanumeric & spaces)
              </Label>
            </div>
          </div>
        </section>
      </CardContent>
    </Card>
  );
}
