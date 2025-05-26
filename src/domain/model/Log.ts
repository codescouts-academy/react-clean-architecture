export class Log {
    public readonly when: number;

    constructor(public readonly message: string) {
        this.when = new Date().getTime();
    }

    public format() {
        return `${this.message} - ${new Date(this.when).toDateString()}`;
    }
}