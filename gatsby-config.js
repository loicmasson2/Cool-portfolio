require('dotenv').config();

const plugins = [
  {
    resolve: `gatsby-plugin-typescript`,
    options: {
      isTSX: true, // defaults to false
      jsxPragma: `jsx`, // defaults to "React"
      allExtensions: true, // defaults to false
    },
  },
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-styled-components',
];
return plugins;