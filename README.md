# **MLogger**

Npm package for logging, works in pair with [m-color](https://github.com/mateoox600/MColor).

---
## Features
 - Logging work in pair with [m-color](https://github.com/mateoox600/MColor)
 - Event emitter for logs levels
 - Prefix and suffix for log levels
---
## Installation
```console
npm install @mateoox600/m-logger
```
 - Typescript is supported and types comes with the installation
---
## Usage
```js
const { HtmlColors } = require('@mateoox600/m-color');
const { Logger } = require('@mateoox600/m-logger');

const logger = new Logger({
    info: { },
    warn: { colors: HtmlColors.Yellow.asFore(), prefix: '[WARN] ' },
    error: { colors: HtmlColors.Red.asBack(), prefix: '[ERROR] ', suffix: ' !!!' }
}, 'info');

logger.on('warn', (str) => {
    console.log(`This logs before warns and the warn is: '${str}'`);
});

logger.log('This is an info with 0 coloring');
logger.log('This is a yellow warn', 'warn');
logger.log('This failed', 'error');
```
---
## Docs
### Logger
 - Takes as arguments an object describing all the log levels, and an optional string for the default log level
 - on(logLevel, listener) : The listener takes a string and is called when something of that log level is logged
 - log(string, logLevel) : Logs the string at the given log level or the default log level if none of the two exist it throw a "Parameter missing"