module.exports = {
  // Type check TypeScript files
  './src/*.(ts|tsx)': () => 'npx tsc --noEmit',

  // Lint then format TypeScript and JavaScript files
  './src/*.(ts|tsx|js)': (filenames) => [
    `npm run eslint --fix ${filenames.join(' ')}`,
    `npm run prettier --write ${filenames.join(' ')}`,
    `npm run lint ${filenames.join(' ')}`,
  ],

  // Format MarkDown and JSON
  '**/*.(md|json)': (filenames) =>
    `npm run prettier --write ${filenames.join(' ')}`,
}
