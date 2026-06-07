import React from 'react';
import { RenameSettings, CaseConversionType, AutoNumberPosition } from '@/types';
import { Settings2, Hash, Type, Scissors, PlusSquare, Replace } from 'lucide-react';

type RenameRulesProps = {
  settings: RenameSettings;
  onChange: (newSettings: RenameSettings) => void;
};

export default function RenameRules({ settings, onChange }: RenameRulesProps) {
  const handleChange = (key: keyof RenameSettings, value: string | number | boolean) => {
    onChange({ ...settings, [key]: value });
  };

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm p-4 lg:p-6 space-y-8">
      <div className="flex items-center gap-2 pb-4 border-b border-gray-200 dark:border-gray-800">
        <Settings2 className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Rename Rules</h2>
      </div>

      {/* 1. Find & Replace */}
      <section className="space-y-4">
        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-200 flex items-center gap-2">
          <Replace className="w-4 h-4 text-blue-500" /> Find & Replace
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Find</label>
            <input
              type="text"
              value={settings.findText}
              onChange={(e) => handleChange('findText', e.target.value)}
              placeholder="Text to replace..."
              className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:text-white"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Replace with</label>
            <input
              type="text"
              value={settings.replaceText}
              onChange={(e) => handleChange('replaceText', e.target.value)}
              placeholder="New text..."
              className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:text-white"
            />
          </div>
        </div>
        <label className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <input
            type="checkbox"
            checked={settings.useRegex}
            onChange={(e) => handleChange('useRegex', e.target.checked)}
            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          Use Regular Expression
        </label>
      </section>

      {/* 2. Add Prefix & Suffix */}
      <section className="space-y-4">
        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-200 flex items-center gap-2">
          <PlusSquare className="w-4 h-4 text-indigo-500" /> Add Prefix & Suffix
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Prefix</label>
            <input
              type="text"
              value={settings.prefix}
              onChange={(e) => handleChange('prefix', e.target.value)}
              placeholder="Add to start..."
              className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Suffix</label>
            <input
              type="text"
              value={settings.suffix}
              onChange={(e) => handleChange('suffix', e.target.value)}
              placeholder="Add to end..."
              className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
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
          <label className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 font-medium cursor-pointer">
            <input
              type="checkbox"
              checked={settings.useAutoNumber}
              onChange={(e) => handleChange('useAutoNumber', e.target.checked)}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            Enable
          </label>
        </div>
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 transition-opacity ${settings.useAutoNumber ? 'opacity-100' : 'opacity-50 pointer-events-none'}`}>
          <div>
            <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Start AT</label>
            <input
              type="number"
              value={settings.autoNumberStart}
              onChange={(e) => handleChange('autoNumberStart', parseInt(e.target.value) || 0)}
              className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Padding (digits)</label>
            <select
              value={settings.autoNumberPadding}
              onChange={(e) => handleChange('autoNumberPadding', parseInt(e.target.value))}
              className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num} ({String(1).padStart(num, '0')})
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Position</label>
            <select
              value={settings.autoNumberPosition}
              onChange={(e) => handleChange('autoNumberPosition', e.target.value as AutoNumberPosition)}
              className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
            >
              <option value="after">After Name</option>
              <option value="before">Before Name</option>
            </select>
          </div>
        </div>
      </section>

      {/* 4. Case Conversion */}
      <section className="space-y-4">
        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-200 flex items-center gap-2">
          <Type className="w-4 h-4 text-purple-500" /> Case Conversion
        </h3>
        <select
          value={settings.caseConversion}
          onChange={(e) => handleChange('caseConversion', e.target.value as CaseConversionType)}
          className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
        >
          <option value="none">No change</option>
          <option value="lowercase">lowercase</option>
          <option value="uppercase">UPPERCASE</option>
          <option value="titlecase">Title Case</option>
          <option value="camelcase">camelCase</option>
          <option value="kebabcase">kebab-case</option>
          <option value="snakecase">snake_case</option>
        </select>
      </section>

      {/* 5. Remove Characters */}
      <section className="space-y-4">
        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-200 flex items-center gap-2">
          <Scissors className="w-4 h-4 text-pink-500" /> Remove Characters
        </h3>
        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300 cursor-pointer p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
            <input
              type="checkbox"
              checked={settings.removeSpaces}
              onChange={(e) => handleChange('removeSpaces', e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            Remove all spaces
          </label>
          <label className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300 cursor-pointer p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
            <input
              type="checkbox"
              checked={settings.removeNumbers}
              onChange={(e) => handleChange('removeNumbers', e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            Remove all numbers
          </label>
          <label className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300 cursor-pointer p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
            <input
              type="checkbox"
              checked={settings.removeSpecialChars}
              onChange={(e) => handleChange('removeSpecialChars', e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            Remove special characters (keep only alphanumeric & spaces)
          </label>
        </div>
      </section>
    </div>
  );
}
