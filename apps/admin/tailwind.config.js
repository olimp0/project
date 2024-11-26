const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');
const sharedPreset = require('../../libs/share/tailwind-preset/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [sharedPreset],
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
};
