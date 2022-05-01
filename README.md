# **MLogger**

Npm package for logging, works in pair with [m-color](https://github.com/mateoox600/MColor).

---
## Features
 - Logging work in pair with [m-color](https://github.com/mateoox600/MColor)
 - Event emitter for logs levels
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
});

logger.on('warn', (str) => {
    console.log(`This logs before warns and the warn is: '${str}'`);
});

logger.log('info', 'This is an info with 0 coloring');
logger.log('warn', 'This is a yellow warn');
logger.log('error', 'This failed');
```
---
## Docs
### Logger
 - Takes as arguments an object describing all the log levels
 - on(logLevel, listener) : The listener takes a string and is called when something of that log level is logged
 - log(logLevel, string) : Logs the string at the given log level