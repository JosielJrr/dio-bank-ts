import { DioAccount } from "./DioAccount";

export class BusinessAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    deposit = (value: number): number => {
        this.balance += value + 10
        return this.balance
    }
}