# Release notes

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## 3.3.6

- Fix missing models/book.js issue.

## 3.3.5

- Upgrade gitbook-plugin-theme-default to @gitbook-ng/gitbook-plugin-theme-default@1.0.8 
  to remove powered by; 
- Remove gitbook-plugin-theme-official
- Add .npmignore to exclude files in npm package.
- Print detail error when load plugin failed
- Upgrade @gitbook-ng/gitbook-plugin-sitemap to 1.3.2
- Update ignore from 3.2.1 to 3.2.7
- Use npm local install svgexport to reduce external dependence
- Replace gitbook-plugin-sitemap with @gitbook-ng/gitbook-plugin-sitemap

## 3.3.4

- Reduce npm package size.

## 3.3.3

- Add error detail when generate page failed
- Revert gitbook-markdown to 1.3.2

## 3.3.2

- Fix: Use commander@2.11.0

## 3.3.1

- Fix: Add commander into dependence

## 3.3.0

- Update gitbook.js to run gitbook command.
  `gitbook-cli` is not required anymore.

## 3.2.4

- Update dependencies to fix all known vulnerabilities
