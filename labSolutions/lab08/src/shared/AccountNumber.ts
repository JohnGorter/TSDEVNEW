const upperBound = 999999999;

export class AccountNumber {
    value: number;

    constructor(public bic: string) {
        this.value = Math.floor(Math.random() * upperBound) + 1;
    }

    toString() {
        let value = this.value.toString();
        while (value.length < 9) {
            value = `0${value}`;
        }
        return `${this.bic} ${value}`
    }
}
