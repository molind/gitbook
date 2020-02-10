var pkg = require('./package.json');

module.exports = {
    // Documentation for GitBook is stored under "docs"
    root: './docs',
    title: '@gitbook-ng/gitbook Documentation',

    // Enforce use of GitBook v3
    gitbook: '3.3.4',

    // Use the "official" theme
    plugins: ['theme-official@2.1.1', '-sharing', '-fontsettings', 'sitemap'],

    variables: {
        version: pkg.version
    },

    pluginsConfig: {
        sitemap: {
            hostname: 'https://gitbook-ng.github.com',
            pathPrefix: '/docs/'
        }
    }
};
