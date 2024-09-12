import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    if (this.getStatus() === true) {
      this.balance += value
      console.log(`Você pegou um empréstimo de ${value}, seu saldo atual é: ${this.balance}`)
    }
  }
}
