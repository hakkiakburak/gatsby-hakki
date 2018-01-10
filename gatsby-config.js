module.exports = {
    siteMetadata: {
        title: `Homepage`,
        author: `Hakki Akburak`,
    },
    plugins: [
        'gatsby-plugin-catch-links',
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages'
            }
        },
        {
           resolve: `gatsby-plugin-favicon`,
           options: {
             logo: "./src/favicon.png",
             injectHTML: true,
             icons: {
               android: true,
               appleIcon: true,
               appleStartup: true,
               coast: false,
               favicons: true,
               firefox: true,
               twitter: false,
               yandex: false,
               windows: false
             }
           }
         },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: []
            }
        }
    ]
};
