# Installation

Getting GitBook installed and ready-to-go should only take a few minutes.

## Requirements

Installing GitBook is easy and straightforward. Your system just needs to meet these two requirements:

* NodeJS (v10.0 and above is recommended)
* Windows, Linux, Unix, or Mac OS X

## Install with NPM

The best way to install GitBook is via **NPM**. At the terminal prompt, simply run the following command to install GitBook:

```bash
$ npm install @gitbook-ng/gitbook
```

## Create a book

GitBook can setup a boilerplate book:

```bash
$ npx gitbook init
```

If you wish to create the book into a new directory, you can do so by running `gitbook init ./directory`

Preview and serve your book using:

```bash
$ npx gitbook serve
```

Or build the static website using:

```bash
$ npx gitbook build
```

The default book output directory is `_book`.

## Debugging

You can use the options `--log=debug` and `--debug` to get better error messages (with stack trace). For example:

```bash
$ npx gitbook build ./ --log=debug --debug
```
