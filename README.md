# @gitbook-ng/gitbook

![@gitbook-ng/gitbook npm badge](https://img.shields.io/npm/v/@gitbook-ng/gitbook)
[![Build Status](https://travis-ci.org/gitbook-ng/gitbook.svg?branch=master)](https://travis-ci.org/gitbook-ng/gitbook)

GitBook is a command line tool (and Node.js library) for building beautiful books using GitHub/Git and Markdown (or AsciiDoc).

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

You need uninstall `gitbook-cli`:

```bash
npm uninstall gitbook-cli -g
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
