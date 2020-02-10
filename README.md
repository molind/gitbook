# @gitbook-ng/gitbook

[![@gitbook-ng/gitbook npm badge](https://img.shields.io/npm/v/@gitbook-ng/gitbook)](https://www.npmjs.com/package/@gitbook-ng/gitbook)
[![Build Status](https://travis-ci.org/gitbook-ng/gitbook.svg?branch=master)](https://travis-ci.org/gitbook-ng/gitbook)
[![codecov](https://codecov.io/gh/gitbook-ng/gitbook/branch/master/graph/badge.svg)](https://codecov.io/gh/gitbook-ng/gitbook)
[![PR Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/gitbook-ng/gitbook/pull/new)

GitBook is a command line tool (and Node.js library) for building beautiful books using GitHub/Git and Markdown (or AsciiDoc).

## Why Choose @gitbook-ng/gitbook instead of legacy gitbook

**@gitbook-ng/gitbook** fork from legacy gitbook but providing vulnerabilities fixes and will continue to maintained to provide bugs/ vulnerabilities fixes.

**@gitbook-ng/gitbook** Have no known vulnerabilities.

```bash
$ npm install @gitbook-ng/gitbook
...
...
found 0 vulnerabilities
```

Legacy **gitbook** have hundreds of vulnerabilities:

```bash
$ npm install gitbook
...
...
npm WARN deprecated graceful-fs@3.0.5: please upgrade to graceful-fs 4 for compatibility with current and future versions of Node.js
npm WARN deprecated nunjucks@2.2.0: potential XSS vulnerability in autoescape mode, and with escape filter was fixed in v2.4.3
npm WARN deprecated fsevents@0.3.8: Way too old
npm WARN deprecated minimatch@0.2.14: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated natives@1.1.6: This module relies on Node.js's internals and will break at some point. Do not use it, and update to graceful-fs@4.x.
npm WARN deprecated minimatch@2.0.10: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated sprintf@0.1.5: The sprintf package is deprecated in favor of sprintf-js.
npm WARN deprecated datauri@0.2.1: Potential REDOS vulnerability removed in v1.1.0
npm WARN deprecated node-uuid@1.4.8: Use uuid module instead
npm WARN deprecated hawk@1.1.1: This module moved to @hapi/hawk. Please make sure to switch over as this distribution is no longer supported and may contain bugs and critical security issues.
npm WARN deprecated hoek@0.9.1: This version has been deprecated in accordance with the hapi support policy (hapi.im/support). Please upgrade to the latest version to get the best features, bug fixes, and security patches. If you are unable to upgrade at this time, paid support is available for older versions (hapi.im/commercial).
npm WARN deprecated cryptiles@0.2.2: This version has been deprecated in accordance with the hapi support policy (hapi.im/support). Please upgrade to the latest version to get the best features, bug fixes, and security patches. If you are unable to upgrade at this time, paid support is available for older versions (hapi.im/commercial).
npm WARN deprecated sntp@0.2.4: This module moved to @hapi/sntp. Please make sure to switch over as this distribution is no longer supported and may contain bugs and critical security issues.
npm WARN deprecated boom@0.4.2: This version has been deprecated in accordance with the hapi support policy (hapi.im/support). Please upgrade to the latest version to get the best features, bug fixes, and security patches. If you are unable to upgrade at this time, paid support is available for older versions (hapi.im/commercial).
...
...

found 224 vulnerabilities (30 low, 114 moderate, 76 high, 4 critical)
  run `npm audit fix` to fix them, or `npm audit` for details
```

## Getting started

No more separated `gitbook-cli` is required and no more global installation.

TODO.

Quick start:

```bash
npm install @gitbook-ng/gitbook
```

Add `build` and `serve` command to `package.json`:

```json
"scripts": {
  "serve": "gitbook serve",
  "build": "gitbook build",
}
```

Then you can run:

```bash
npx gitbook init

npm run build
npm run serve
```

## Migrate from legacy gitbook-cli

First you need uninstall `gitbook-cli` (optionally, recommend to save your disk space):

```bash
npm uninstall gitbook-cli -g
rm -fr ~/.gitbook   # Remove legacy gitbook global installation
```

Then follow **Get Started**.

## Notice

This is a fork of *GitBookIO/GitBook* CLI due to *GitbookIO* deprecated *GitBook* CLI project.

There are hundreds of vulnerabilities on *GitBookIO/GitBook*.

This fork try to fix all the known vulnerabilities and PR is welcome for bug fixes, enhancement etc.

Like keep *GitBook* CLI continue to live, +1 star please.

### Changes to original gitbook

There are in-compatible changes to original *gitbook*:

- NPM package name changed to `@gitbook-ng/gitbook`.
- There is no more `gitbook-cli` required, just install `@gitbook-ng/gitbook` you will be all set.
- No more global installation of `gitbook`.

## Licensing

GitBook is licensed under the Apache License, Version 2.0. See [LICENSE](LICENSE) for the full license text.
