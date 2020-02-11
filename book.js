var pkg = require('./package.json');

module.exports = {
    // Documentation for GitBook is stored under "docs"
    root: './docs',
    title: '@gitbook-ng/gitbook',

    // Enforce use of GitBook v3
    gitbook: '3.3.4',

    // Use the "official" theme
    plugins: ['-sharing', '-fontsettings', 'sitemap'],

    variables: {
        version: pkg.version
    },

    pluginsConfig: {
        sitemap: {
            hostname: 'https://gitbook-ng.github.com',
        },

        'theme-default': {
            showLevel: false
        }
    }
};
