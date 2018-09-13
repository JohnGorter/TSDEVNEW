
export class Customer {
    public firstName: string;

    constructor(firstName: string, lastName: string, preposition?: string)
    constructor(copy: Customer)
    constructor(firstNameOrCopy: string | Customer, public lastName?: string, public preposition?: string) {
        if (typeof firstNameOrCopy === 'string') {
            this.firstName = firstNameOrCopy;
        } else {
            this.firstName = firstNameOrCopy.firstName;
            this.lastName = firstNameOrCopy.lastName;
            this.preposition = firstNameOrCopy.preposition;
        }
    }

    toString() {
        return `${this.firstName}${this.preposition ? ` ${this.preposition}` : ''} ${this.lastName}`;
    }
}
