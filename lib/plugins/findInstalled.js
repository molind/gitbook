var readInstalled = require('read-installed');
var Immutable = require('immutable');
var path = require('path');

var Promise = require('../utils/promise');
var fs = require('../utils/fs');
var Plugin = require('../models/plugin');
var PREFIXS = require('../constants/pluginPrefix');

/**
 * Validate if a package name is a GitBook plugin
 *
 * @return {Boolean}
 */
function validateId(name) {
    if (!name) {
        return false;
    }

    for (let i=0; i<PREFIXS.length; i++) {
        if (name.indexOf(PREFIXS[i]) === 0) {
            return true;
        }
    }

    return false;
}


/**
 * List all packages installed inside a folder
 *
 * @param {String} folder
 * @return {OrderedMap<String:Plugin>}
 */
function findInstalled(folder) {
    var options = {
        dev: false,
        log: function() {},
        depth: 4
    };
    var results = Immutable.OrderedMap();

    function onPackage(pkg, parent) {
        if (!pkg.name) return;

        var name = pkg.name;
        var version = pkg.version;
        var pkgPath = pkg.realPath;
        var depth = pkg.depth;
        var dependencies = pkg.dependencies;

        for (let i=0; i<PREFIXS.length; i++) {
            var pluginName = name.slice(PREFIXS[i].length);

            if (!validateId(name)){
                if (parent) return;
            } else {
                results = results.set(pluginName, Plugin({
                    name: pluginName,
                    version: version,
                    path: pkgPath,
                    depth: depth,
                    parent: parent
                }));
            }

            Immutable.Map(dependencies).forEach(function(dep) {
                onPackage(dep, pluginName);
            });
        }
    }

    // Search for gitbook-plugins in node_modules folder
    var node_modules = path.join(folder, 'node_modules');

    // List all folders in node_modules
    function readModules(node_modules) {
        return fs.readdir(node_modules)
            .fail(function() {
                return Promise([]);
            })
            .then(function(modules) {
                return Promise.serie(modules, function(module) {
                    if (module.startsWith('@')) {
                        // continue read scoped package.
                        return readModules(path.join(node_modules, module));
                    }

                    if (!validateId(module)) {
                        // Not a gitbook-plugin
                        return Promise();
                    }

                    // Read gitbook-plugin package details
                    var module_folder = path.join(node_modules, module);
                    return Promise.nfcall(readInstalled, module_folder, options)
                    .then(function(data) {
                        onPackage(data);
                    });
                });
            })
            .then(function() {
                // Return installed plugins
                return results;
            });
    }

    return readModules(node_modules);
}

module.exports = findInstalled;
