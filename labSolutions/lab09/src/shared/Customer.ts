
export class Customer {

    constructor(public firstName: string, public lastName: string, public preposition?: string) { }

    toString() {
        return `${this.firstName}${this.preposition ? ` ${this.preposition}` : ''} ${this.lastName}`;
    }
}
