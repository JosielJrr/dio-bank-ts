import { BusinessAccount } from './class/BusinessAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Lucas', 10)
console.log(peopleAccount)

// Testando a implementação do método deposit.
peopleAccount.deposit(35)
peopleAccount.deposit(100)

// Testando a implementação do método withdraw (saque).
peopleAccount.withdraw(50)

// ------------------------------------------------------------------------------------

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount)

// Testando a implementação do método deposit.
companyAccount.deposit(100)
companyAccount.deposit(300)

// Testando a implementação do método withdraw (saque).
companyAccount.withdraw(200)

// Testando a implementação do método getLoan (empréstimo).
companyAccount.getLoan(100)

// ------------------------------------------------------------------------------------

const businessAccount: BusinessAccount = new BusinessAccount("Facebook", 55)
console.log(businessAccount)

// Testando a implementação do método deposit (depósito com aumento de 10 reais).
let newBalance = businessAccount.deposit(500)
console.log(`Seu saldo com acréscimo é: ${newBalance}`)

newBalance = businessAccount.deposit(300)
console.log(`Seu saldo com acréscimo é: ${newBalance}`)

// Testando a implementação do método withdraw (saque).
businessAccount.withdraw(100)
