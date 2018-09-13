const upperBound = 999999999;

export class AccountNumber {
    value: number;
    public bic: string

    constructor(bic: string)
    constructor(copy: AccountNumber)
    constructor(bicOrCopy: AccountNumber | string) {
        if (typeof bicOrCopy === 'string') {
            this.bic = bicOrCopy;
            this.value = Math.floor(Math.random() * upperBound) + 1;
        } else {
            this.bic = bicOrCopy.bic;
            this.value = bicOrCopy.value;
        }
    }

    toString() {
        let value = this.value.toString();
        while (value.length < 9) {
            value = `0${value}`;
        }
        return `${this.bic} ${value}`
    }
}
