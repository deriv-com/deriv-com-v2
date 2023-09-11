module.exports = {
  '{apps,libs}/**/*.{ts,tsx}': (files) => {
    return `nx affected --target=lint --files=${files.join(',')}`;
  },
  '{apps,libs}/**/*.{js,ts,jsx,tsx,json}': [
    (files) => `nx affected:lint --files=${files.join(',')}`,
  ],
};
