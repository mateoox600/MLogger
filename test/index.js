const { HtmlColors } = require('@mateoox600/m-color');
const { Logger } = require('../build');

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