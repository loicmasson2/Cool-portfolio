const manifestConfig = require('./manifest-config');
require('dotenv').config();

const { ANALYTICS_ID } = process.env;

const plugins = [
  'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-plugin-manifest',
    options: manifestConfig,
  },
  'gatsby-plugin-styled-components',
  'gatsby-transformer-remark',
  'gatsby-plugin-offline',
];
return plugins;
//   // if (ANALYTICS_ID) {
//   //   plugins.push({
//   //     resolve: 'gatsby-plugin-google-analytics',
//   //     options: {
//   //       trackingId: ANALYTICS_ID,
//   //     },
//   //   });
//   // }

//   return {
//     plugins,
//   };
// });
