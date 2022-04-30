import { mColor, Color, Style } from '@mateoox600/m-color';

export class Logger<LogLevels extends Record<string, Color | Style | (Color | Style)[]>> {

    private events: Record<keyof LogLevels, ((string: string) => void)[]>;

    constructor(public logLevels: LogLevels) {
        const events: Record<string, unknown[]> = {};
        for(const key of Object.keys(logLevels)) events[key] = [];
        this.events = events as Record<keyof LogLevels, ((string: string) => void)[]>;
    }

    log(level: keyof LogLevels, string: string) {
        this.events[level].forEach((f) => f(string));
        console.log(mColor(this.logLevels[level], string));
    }

    on(event: keyof LogLevels, listener: (string: string) => void) {
        this.events[event].push(listener);
    }

}