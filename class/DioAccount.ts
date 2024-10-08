export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  getStatus = (): boolean => {
    return this.status
  }

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.balance += value
      console.log(`Você depositou ${value} reais, seu saldo atual é: ${this.balance} reais`)
    }
  }

  withdraw = (value: number): void => {
    if (this.status === true && this.balance > value) {
      this.balance -= value
      console.log(`Você sacou ${value} reais, seu saldo atual é: ${this.balance} reais`)
    }

  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
