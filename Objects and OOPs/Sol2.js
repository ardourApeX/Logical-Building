class Employee {
    constructor(name, id, salaray) {
        this.name = name;
        this.id = id;
        this.salaray = salaray;

    }
    getSalary() {
        return (`${this.name} earns ${this.salaray}`);
    }
}
emp1 = new Employee("Joy", "AS23", 100000)
emp2 = new Employee("Preet", "A121", 80000)
console.log(emp1.getSalary())
console.log(emp2.getSalary())