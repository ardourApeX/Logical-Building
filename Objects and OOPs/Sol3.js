class BankAccount {
    constructor(name, acc, balance, accType, ifsc) {
        this.name = name;
        this.acc = acc;
        this.balance = balance;
        this.accType = accType;
        this.ifsc = ifsc;
    }
    getBalance() {
        return this.balance;
    }
    getName() {
        return this.name;
    }
}
obj1 = new BankAccount("Joy", 2323243543523, 2323145345, "saving", "d34edw")
obj2 = new BankAccount("Amit", 23123123352534, 3434215135, "saving", "sds22")
obj3 = new BankAccount("Ritik", 2321443, 234534545, "saving", "sd2232")
let Average = obj1.balance + obj2.balance + obj3.balance;
Average = Average / 3
console.log("Average ", Average)
