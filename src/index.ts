import { mColor, Color, Style } from '@mateoox600/m-color';

export interface LogLevel {
    colors?: Color | Style | (Color | Style)[],
    prefix?: string,
    suffix?: string
}

export class Logger<LogLevels extends Record<string, LogLevel>> {

    private events: Record<keyof LogLevels, ((string: string) => void)[]>;

    constructor(public logLevels: LogLevels, public def?: keyof LogLevels) {
        const events: Record<string, unknown[]> = {};
        for(const key of Object.keys(logLevels)) events[key] = [];
        this.events = events as Record<keyof LogLevels, ((string: string) => void)[]>;
    }

    log(string: string, level?: keyof LogLevels) {
        if(!level) 
            if(this.def) level = this.def;
            else throw new Error('Parameter missing "log level".');
        this.events[level].forEach((f) => f(string));
        const logLevel = this.logLevels[level];
        console.log(mColor(logLevel.colors || [], `${logLevel.prefix || ''}${string}${logLevel.suffix || ''}`));
    }

    on(event: keyof LogLevels, listener: (string: string) => void) {
        this.events[event].push(listener);
    }

}