#!/usr/bin/env node
'use strict';

const history = require('repl.history');
const repl    = require('repl');
const R       = require('ramda');

const addReadOnlyGlobal = (context, name, value) => {
  Object.defineProperty(context, name, {
    configurable: false,
    enumerable:   true,
    value:        value
  })
};

const config = {
  prompt:    '𝛌 ',
  replMode:  repl.REPL_MODE_STRICT,
  useColors: true
};

const r = repl.start(config);
addReadOnlyGlobal(r.context, 'R', R);

history(r, process.env.HOME + '/.zen-repl-history');
