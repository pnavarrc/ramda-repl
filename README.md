# Ramda Repl

<a href="https://zenhub.com"><img src="https://raw.githubusercontent.com/ZenHubIO/support/master/zenhub-badge.png"></a>

Command line REPL for Ramda

## Install

```
$ npm install --global @pnavarrc/ramda-repl
```

## Usage

```
$ ramda-repl
```

## REPL Commands

All the native [Node REPL commands](https://nodejs.org/api/repl.html#repl_commands_and_special_keys) are available.

Command   | Description
----------|---------------------------------------------------------------------------
`.break`  | Cancels the current multi-line expression
`.clear`  | Resets the REPL context and clears multi-line expressions being input
`.exit`   | Exit the REPL
`.help`   | Show this commands
`.save`   | Save the current session to a file (`.save /file/to/save.js`)
`.load`   | Load a file into the current session (`.load /file/to/load.js`)
`.editor` | Enter editor mode (<kbd>ctrl</kbd> + <kbd>d</kbd> to finish, <kbd>ctrl</kbd> + <kbd>c</kbd> to cancel
