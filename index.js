#!/usr/bin/env node
'use strict';

const history = require('repl.history');
const repl    = require('repl');
const R       = require('ramda');
const version = require('./package.json').version;

const welcome = R.join('\n', [
  'Welcome to Ramda REPL version ' + version + '!',
  'Type .help to see available commands',
  ''
]);

const addReadOnlyGlobal = (context, name, value) => {
  Object.defineProperty(context, name, {
    configurable: false,
    enumerable:   true,
    value:        value
  })
};

const initContext = (context) => {
  addReadOnlyGlobal(r.context, 'R', R);
};

const config = {
  prompt:    '𝛌 ',
  replMode:  repl.REPL_MODE_STRICT,
  useColors: true
};

console.log(welcome);

const r = repl.start(config);
initContext(r.context);

r.on('reset', initContext);

history(r, process.env.HOME + '/.ramda-repl-history');
