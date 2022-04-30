import { HtmlColors } from '@mateoox600/m-color';
import { Logger } from '../src';

const logger = new Logger({
    info: [],
    warn: HtmlColors.Yellow.asFore()
});

logger.on('warn', (str) => {
    console.log(`This logs before warns and the warn is: '${str}'`);
});

logger.log('info', 'This is an info with 0 coloring');
logger.log('warn', 'This is a yellow warn');