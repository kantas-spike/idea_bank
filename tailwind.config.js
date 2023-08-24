const path = require("path");
const theme_dir = path.basename(__dirname);

module.exports = {
  content: [
    `./hugo_stats.json`,
    `./themes/${theme_dir}/assets/**/*.{js,jsx,css}`,
    "./assets/**/*.{js,jsx,css}",
  ],
  theme: {},
  plugins: [],
};
