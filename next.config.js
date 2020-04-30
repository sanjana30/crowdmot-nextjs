const withCSS = require('@zeit/next-css')
module.exports = withCSS({target: 'serverless'})

// module.exports = {
//     exportPathMap: function () {
//       return {
//         '/': { page: '/' }
//       }
//     }
//   }