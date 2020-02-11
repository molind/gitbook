#!/bin/sh

cloc --by-file --exclude-dir=__tests__ lib book.js

cloc --exclude-dir=__tests__ lib book.js
