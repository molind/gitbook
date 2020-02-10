#!/usr/bin/env node

var _ = require('lodash');
var program = require('commander');
var gitbook = require('../lib');
var parsedArgv = require('optimist').argv;
var color = require('bash-color');

function runPromise(p) {
  return p
    .then(function() {
      process.exit(0);
    }, function(err) {
      console.log('');
      console.log(color.red(err.toString()));
      if (program.debug || process.env.DEBUG) console.log(err.stack || '');
      process.exit(1);
    });
}

// Helper function for print help
// indented output by spaces
function indent_output(n, name, description) {
  if (!n) {
    n = 0;
  }

  console.log(
    _.repeat('    ', n) +
    name +
    _.repeat(' ', 32 - n * 4 - name.length) +
    description
  );
}

// Print help for a list of commands
// It prints the command and its description, then all the options
function help(commands) {
  _.each(commands, function(command) {
    indent_output(1, command.name, command.description);
    _.each(command.options || [], function(option) {
      var after = [];

      if (option.defaults !== undefined) after.push("Default is " + option.defaults);
      if (option.values) after.push("Values are " + option.values.join(", "));

      if (after.length > 0) after = "(" + after.join("; ") + ")";
      else after = "";

      var optname = '--';
      if (typeof option.defaults === 'boolean') optname += '[no-]';
      optname += option.name;
      indent_output(2, optname, option.description + ' ' + after);
    });
    console.log('');
  });
}


program
  .command('help')
  .description('List commands for GitBook')
  .action(function() {
    help(gitbook.commands);
  });

program
  .command('*')
  .description(`run a command with a specific gitbook version. Available commands: \n\t\t${gitbook.commands.map(command => command.name.split(' ')[0]).join('\n\t\t')}`)
  .action(function(commandName) {
    var args = parsedArgv._.slice(1);
    var kwargs = _.omit(parsedArgv, '$0', '_');

    var command = _.find(gitbook.commands, (element) => element.name.startsWith(commandName));

    if (!command) {
      console.error(`Error: Command ${commandName} doesn't exist, run "gitbook help" to list available commands.`);
      return;
    }

    // Apply defaults
    _.each(command.options || [], function(option) {
      kwargs[option.name] = (kwargs[option.name] === undefined) ? option.defaults : kwargs[option.name];
      if (option.values && !_.includes(option.values, kwargs[option.name])) {
        throw new Error('Invalid value for option "' + option.name + '"');
      }
    });

    runPromise(command.exec(args, kwargs));
  });

// Parse and fallback to help if no args
if (_.isEmpty(program.parse(process.argv).args) && process.argv.length === 2) {
  program.help();
}
